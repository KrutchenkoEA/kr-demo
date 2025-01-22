import { AfterViewInit, ChangeDetectorRef, Component, Inject, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import {DOCUMENT, NgForOf} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

interface LinkSection {
  name: string;
  links: Link[];
}

interface Link {
  /* id of the section*/
  id: string;

  /* header type h3/h4 */
  type: string;

  /* If the anchor is in view of the page */
  active: boolean;

  /* name of the anchor */
  name: string;

  /* HTML element of the anchor */
  element: HTMLElement;
}

@Component({
  selector: 'table-of-contents',
  styleUrls: ['./table-of-contents.component.scss'],
  templateUrl: './table-of-contents.component.html',
  imports: [
    NgForOf
  ],
  standalone: true
})
export class TableOfContentsComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() public container: HTMLElement | undefined;

  @Input() public content: HTMLElement | undefined;

  public _linkSections: LinkSection[] = [];
  public _links: Link[] = [];
  // @ts-ignore
  public _rootUrl = this.router.url.split('#')[0];

  private _scrollContainer: HTMLElement | Window | null = null;
  private _urlFragment = '';
  private subscriptions = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private _document: Document,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.subscriptions.add(
      this.route.fragment.subscribe((fragment) => {
        if (fragment != null) {
          this._urlFragment = fragment;

          const target = document.getElementById(this._urlFragment);
          if (target) {
            target.scrollIntoView();
          }
        }
      }),
    );
  }

  public ngOnInit(): void {
    this._scrollContainer = this.container
      ? (this.container as HTMLElement)
      : window;

    if (this._scrollContainer) {
      this.subscriptions.add(
        fromEvent(this._scrollContainer, 'scroll')
          .pipe(debounceTime(10))
          .subscribe(() => this.onScroll()),
      );
    }
  }

  public ngAfterViewInit(): void {
    if (this.content) {
      this.addHeaders('Обзор', this.content, 0);
    }

    this.updateScrollPosition();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public updateScrollPosition(): void {
    this._document.getElementById(this._urlFragment)?.scrollIntoView();
  }

  public addHeaders(
    sectionName: string,
    docViewerContent: HTMLElement,
    sectionIndex = 0,
  ): void {
    const links = Array.from(
      docViewerContent.querySelectorAll('h2, h3'),
      (header) => {
        const name = (header as HTMLElement).innerText
          .trim()
          .replace(/^link/, '');

        return {
          name,
          type: header.tagName.toLowerCase(),
          element: header as HTMLElement,
          id: header.id,
          active: false,
        };
      },
    );

    this._linkSections[sectionIndex] = { name: sectionName, links };
    this._links.push(...links);
  }

  /** Gets the scroll offset of the scroll container */
  private getScrollOffset(): number | void {
    const container = this._scrollContainer;

    if (container instanceof HTMLElement) {
      return container.scrollTop;
    }

    if (container) {
      return container.scrollY;
    }
  }

  private onScroll(): void {
    const scrollOffset = this.getScrollOffset();
    let hasChanged = false;

    for (let i = 0; i < this._links.length; i++) {
      const currentLink = this._links[i];
      const nextLink = this._links[i + 1];
      const isActive =
        +scrollOffset >= currentLink.element.offsetTop &&
        (!nextLink || nextLink.element.offsetTop >= +scrollOffset);

      if (isActive !== currentLink.active) {
        currentLink.active = isActive;
        hasChanged = true;
      }
    }

    if (hasChanged) {
      this.ngZone.run(() => this.changeDetectorRef.markForCheck());
    }
  }
}
