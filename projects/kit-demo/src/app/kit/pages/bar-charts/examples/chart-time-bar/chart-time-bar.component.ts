import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartRandomDateArray } from '@kr-platform/ui';

/** @title Временной */

@Component({
  selector: 'chart-time-bar',
  templateUrl: './chart-time-bar.component.html',
  styleUrls: ['./chart-time-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartTimeBarComponent {
  public data = kruiChartRandomDateArray(10);
}
