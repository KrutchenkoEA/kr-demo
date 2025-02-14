import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlatformHeaderComponent {

  constructor(
    public themeService: ThemeConfiguratorService,
  ) {
  }

  public changeTheme(): void {
    this.themeService.changeTheme();
  }
}
