import { Component, HostBinding, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { KruiButtonModule, KruiToggleModule, KruiTooltipModule } from '@kr-platform/ui';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeConfiguratorService } from '../../../../../kit-demo/src/app/kit/example';

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
  public isMenuVisible: boolean = false;

  @HostBinding('class.burger-menu--visible') get menuVisible() {
    return this.isMenuVisible;
  }

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
