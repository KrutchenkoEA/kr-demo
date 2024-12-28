import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {ThemeConfiguratorService} from '../../services/theme-configurator.service';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'kr-app-platform-header',
    imports: [
        RouterLink,
        MatButton,
        MatIcon,
        MatSlideToggle,
        MatTooltip,
    ],
    templateUrl: './platform-header.component.html',
    styleUrl: './platform-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatformHeaderComponent {

  constructor(private readonly themeConfiguratorService: ThemeConfiguratorService) {
  }

  public changeTheme(): void {
    this.themeConfiguratorService.changeTheme()
  }

}
