import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartLineMockTime1 } from '@kr-platform/ui';

/** @title Временной */

@Component({
  selector: 'chart-time-area',
  templateUrl: './chart-time-area.component.html',
  styleUrls: ['./chart-time-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartTimeAreaComponent {
  public data = kruiChartLineMockTime1;
}
