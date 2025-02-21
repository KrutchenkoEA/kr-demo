import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';
import { ThemeConfiguratorService } from '../../services/theme-configurator.service';

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

const SLIDE_INOUT_TOP = trigger('slideInOutTop', [
  transition(':enter', [
    style({ opacity: 0, height: 0 }),
    animate(`180ms cubic-bezier(0, 0, .2, 1)`, style({ opacity: 1, height: '*' })),
  ]),
  transition(':leave', [
    animate(`180ms cubic-bezier(0, 0, .2, 1)`, style({ height: 0, opacity: 0 })),
  ]),
]);

@Component({
  selector: 'krui-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  animations: [SLIDE_INOUT_TOP],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KruiMainMenuComponent implements OnInit {
  @Input() public menuItems: KruiMainMenuItem[] = [];
  @Input() public version = '';
  @Input() public showFooter = true;

  public filteredItems: KruiMainMenuItem[] = [];
  public query: string = '';
  public readonly filterBroadcast$ = new BehaviorSubject<string>('');

  public constructor(
    public themeService: ThemeConfiguratorService,
    public readonly router: Router,
    public readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef,
  ) {
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(p => {
      if (p['onlyCharts']) {
        this.filterBroadcast$.next('chart');
        this.query = 'chart';
      } else {
        this.filterBroadcast$.next('');
        this.query = '';
      }
    });

    this.filterBroadcast$
      .pipe(debounceTime(60))
      .subscribe((q) => this.filter(q));
  }

  public onItemClick(item: KruiMainMenuItem): void {
    item.expanded = !item.expanded;
    if (item.href) {
      this.router.navigate([item.href], { relativeTo: this.route, queryParamsHandling: 'merge' });
    }
  }

  public isActive(url: string): boolean {
    const parentSegment = this.route.snapshot?.url?.[0]?.path;
    return this.router.isActive(parentSegment ? parentSegment + '/' + url : url, {
      queryParams: 'ignored',
      paths: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  public changeTheme(): void {
    this.themeService.changeTheme();
  }

  private filter(query: string): void {
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
              (c) => !!c.href && this.isActive(c.href),
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
