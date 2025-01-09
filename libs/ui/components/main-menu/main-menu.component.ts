import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SLIDE_INOUT_TOP } from '@kr-platform/ui/animations';

export interface KruiMainMenuItem {
  label: string;
  href?: string;
  badge?: number;
  iconUrl?: string;
  disabled?: boolean;
  expanded?: boolean;
  selected?: boolean;
  children?: KruiMainMenuItem[];
}

@Component({
  selector: 'tlui-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  animations: [SLIDE_INOUT_TOP],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class TluiMainMenuComponent implements OnInit {
  @Input()
  public menuItems: KruiMainMenuItem[] = [];

  @Input()
  public theme: 'light' | 'dark' = 'dark';

  @Input()
  version = '';

  @Output()
  public themeChange = new EventEmitter<'light' | 'dark'>();

  public filteredItems: KruiMainMenuItem[] = [];
  public query: string = '';
  public readonly filterBroadcast$ = new BehaviorSubject<string>('');

  public constructor(
    public readonly router: Router,
    private readonly cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.filterBroadcast$
      .pipe(debounceTime(60))
      .subscribe((q) => this.filter(q));
  }

  public onItemClick(item: KruiMainMenuItem) {
    item.expanded = !item.expanded;
    if (item.href) {
      this.router.navigate([item.href]);
    }
  }

  public isActive(url: string) {
    return this.router.isActive(url, {
      queryParams: 'ignored',
      paths: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  private filter(query: string) {
    const pattern = new RegExp(query, 'i');

    const filterTree = (from?: KruiMainMenuItem[], to?: KruiMainMenuItem[]) => {
      from
        ?.filter((it) => (!query.length ? true : it.label.match(pattern)))
        .forEach((it) => {
          const { label, href, badge, iconUrl, disabled, selected, children } =
            it;

          let f = {
            label,
            href,
            badge,
            iconUrl,
            disabled,
            expanded: (it.expanded = it?.children?.some(
              (c) => !!c.href && this.isActive(c.href)
            )),
            selected,
            children: [],
          };

          filterTree(children, f.children);
          to?.push(f);
        });
    };
    filterTree(this.menuItems, (this.filteredItems = []));

    this.cdr.markForCheck();
  }
}
