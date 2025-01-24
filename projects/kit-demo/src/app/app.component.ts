import { Component, ElementRef, ViewChild } from '@angular/core';
import packageInfo from '../../../../libs/kit/package.json';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CdkScrollable } from '@angular/cdk/scrolling';
import {
  EXAMPLE_FILES,
  EXAMPLE_FILES_TOKEN,
  ExampleHttpInterceptor,
  EXAMPLES,
  EXAMPLES_TOKEN,
  KruiMainMenuComponent,
  KruiMainMenuItem,
  PageTitleService,
  StorageService,
} from '@kr-platform/kit';
import { KrKitMenu } from '@kr-platform/kit/kit-menu';

const THEME_KEY = 'kit-theme';

@Component({
  selector: 'kr-kit-demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExampleHttpInterceptor,
      multi: true,
    },
    {
      provide: EXAMPLE_FILES_TOKEN,
      useValue: EXAMPLE_FILES,
    }, {
      provide: EXAMPLES_TOKEN,
      useValue: EXAMPLES,
    },
    StorageService,
    PageTitleService,
  ],
  imports: [
    RouterOutlet,
    KruiMainMenuComponent,
    CdkScrollable,
  ],
})
export class AppComponent {
  public version = packageInfo.version;
  public menu: KruiMainMenuItem[] = KrKitMenu.sort();

  public set theme(theme: 'dark' | 'light') {
    document
      .querySelector('body')
      ?.classList.remove('theme-dark', 'theme-light');

    document.querySelector('body')?.classList.add(`theme-${theme}`);
    this.storageService.setItem(THEME_KEY, (this._theme = theme));
  }

  public get theme() {
    return this._theme;
  }

  private _theme: 'dark' | 'light' = 'dark';

  @ViewChild('container')
  container!: ElementRef<HTMLElement>;

  public constructor(
    private readonly storageService: StorageService,
    private readonly pageTitleService: PageTitleService,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.theme = this.storageService.getItem(THEME_KEY, 'dark');

    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        const flattened = KrKitMenu.reduce(
          (acc, item) => [...acc, item, ...(item.children ?? [])],
          [] as KruiMainMenuItem[],
        );
        const url = event.snapshot.url.join('/');
        const menuItem = flattened.find((item: KruiMainMenuItem) => item.href === url);
        if (menuItem) {
          this.pageTitleService.title = menuItem.label;
        }
      }
    });
  }
}
