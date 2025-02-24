import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';
import { PlatformHeaderComponent } from './components/platform-header/platform-header.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { KruiButtonModule } from '@kr-platform/ui';
import { ThemeConfiguratorService } from 'projects/kit-demo/src/app/kit/example/services/theme-configurator.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KrAppComponent implements OnInit {
  @ViewChild('main', { read: ElementRef }) main!: ElementRef;
  private document = inject<Document>(DOCUMENT);
  public themeService = inject(ThemeConfiguratorService);
  public title = 'kr-demo';

  public ngOnInit(): void {
    this.themeService.setThemeConfiguratorRoot(this.document);
  }

  public scrollTop(): void {
    this.main?.nativeElement?.scrollTo(0, 0);
  }
}
