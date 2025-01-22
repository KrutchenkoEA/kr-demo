import { Component, ElementRef, ViewChild } from '@angular/core';
import packageInfo from '../../../../../kr-demo/package.json';
import MENU from './menu';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { PageTitleService } from './services/page-title.service';
import { StorageService } from './services/storage.service';
import { KruiMainMenuComponent, KruiMainMenuItem } from './@shared/main-menu/main-menu.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExampleHttpInterceptor } from './@shared/example/interceptors/example-http.interceptor';
import { CdkScrollable } from '@angular/cdk/scrolling';

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
  ],
  imports: [
    RouterOutlet,
    KruiMainMenuComponent,
    CdkScrollable,
  ],
})
export class AppComponent {
  public version = packageInfo.version;
  public menu = MENU.sort();

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
        const flattened = MENU.reduce(
          (acc, item) => [...acc, item, ...(item.children ?? [])],
          [] as KruiMainMenuItem[],
        );
        const url = event.snapshot.url.join('/');
        const menuItem = flattened.find((item) => item.href === url);
        if (menuItem) {
          this.pageTitleService.title = menuItem.label;
        }
      }
    });
  }
}
