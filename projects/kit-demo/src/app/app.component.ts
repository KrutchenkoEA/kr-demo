import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import packageInfo from '../../../../libs/kit/package.json';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { KruiMainMenuItem, PageTitleService } from '@kr-platform/kit';
import { KrKitMenu } from '@kr-platform/kit/kit-menu';
import { KrKitPagesModule } from '@kr-platform/kit/kit-pages.module';
import { DOCUMENT } from '@angular/common';
import { ThemeConfiguratorService } from '../../../kr-app/src/app/services/theme-configurator.service';

@Component({
  imports: [
    RouterOutlet,
    CdkScrollable,
    KrKitPagesModule,
  ],
  selector: 'kr-kit-demo-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class KitDemoComponent {
  public version = packageInfo.version;
  public menu: KruiMainMenuItem[] = KrKitMenu.sort();

  @ViewChild('container') container!: ElementRef<HTMLElement>;

  public constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly themeService: ThemeConfiguratorService,
    private readonly pageTitleService: PageTitleService,
    private readonly router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.themeService.setThemeConfiguratorRoot(this.document);

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
