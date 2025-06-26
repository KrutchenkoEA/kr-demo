import { Component, HostBinding, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { KruiButtonModule, KruiToggleModule, KruiTooltipModule } from '@kr-platform/ui';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeConfiguratorService } from '../../../../../kit-demo/src/app/kit/example';
import { AuthService } from '../../services/auth.service';
import { AdminLoginDialogComponent } from '../admin-login-dialog/admin-login-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  public route = inject(ActivatedRoute);
  private auth = inject(AuthService);
  private dialog = inject(MatDialog);
  public isMenuVisible: boolean = false;
  public isButtonsHidden: boolean = false;
  public isAdmin = this.auth.isAdmin();

  @HostBinding('class.burger-menu--visible') get menuVisible() {
    return this.isMenuVisible;
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(p => {
      this.isButtonsHidden = p['hideTabs'] === 'true';
    });
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

  public loginAsAdmin(): void {
    this.dialog.open(AdminLoginDialogComponent)
      .afterClosed()
      .subscribe(password => {
        if (!password) return;

        if (btoa(unescape(encodeURIComponent(password))) === 'c2VjcmV0') {
          this.auth.enableAdminMode();
        } else {
          alert('Неверный пароль');
        }
      });
  }

  public logoutAdmin(): void {
    this.auth.disableAdminMode();
  }
}
