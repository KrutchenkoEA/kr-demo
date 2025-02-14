import { Component, Inject } from '@angular/core';
import { ThemeConfiguratorService } from './services/theme-configurator.service';
import { DOCUMENT } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';
import { PlatformHeaderComponent } from './components/platform-header/platform-header.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { KruiButtonModule } from '@kr-platform/ui';

@Component({
  selector: 'kr-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    MatTooltip,
    RouterOutlet,
    PlatformHeaderComponent,
    SvgIconComponent,
    KruiButtonModule,
  ],
  standalone: true,
})
export class KrAppComponent {
  public title = 'kr-demo';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeConfiguratorService,
  ) {
  }

  public ngOnInit(): void {
    this.themeService.setThemeConfiguratorRoot(this.document);
  }

  public scrollTop(): void {
    this.document.body.firstElementChild?.scrollTo(0, 0);
  }
}
