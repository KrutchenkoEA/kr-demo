import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ThemeConfiguratorService } from '../../services/theme-configurator.service';
import { SvgIconComponent } from 'angular-svg-icon';
import { KruiButtonModule, KruiToggleModule, KruiTooltipModule } from '@kr-platform/ui';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'kr-app-platform-header',
  imports: [
    RouterLink,
    SvgIconComponent,
    KruiButtonModule,
    KruiToggleModule,
    KruiTooltipModule,
    AsyncPipe,
    FormsModule,
  ],
  templateUrl: './platform-header.component.html',
  styleUrl: './platform-header.component.scss',
  standalone: true,
})
export class PlatformHeaderComponent {
  public themeService = inject(ThemeConfiguratorService);
  public router = inject(Router);

  public changeTheme(): void {
    this.themeService.changeTheme();
  }

  public isActive(url: string, paths: 'exact' | 'subset' = 'exact'): boolean {
    return this.router.isActive(url, {
      queryParams: 'ignored',
      paths: paths,
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
}
