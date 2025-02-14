import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { KruiButtonModule, KruiTooltipModule } from '@kr-platform/ui';

@Component({
  selector: 'kr-app-rezume',
  imports: [
    RouterLink,
    SvgIconComponent,
    KruiTooltipModule,
    KruiButtonModule,
  ],
  templateUrl: './rezume.component.html',
  styleUrl: './rezume.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RezumeComponent {
  public showPreviousJobs: boolean = false;
}
