import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { SvgIconComponent } from 'angular-svg-icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'kr-app-rezume',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatIcon,
    SvgIconComponent,
    MatTooltip,
  ],
  templateUrl: './rezume.component.html',
  styleUrl: './rezume.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RezumeComponent {
  public showPreviousJobs: boolean = false;
}
