import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartRangeBarMock1, kruiChartRangeBarMock2, kruiChartRangeBarStackMock } from '@kr-platform/ui';

/** @title Горизонтальный */

@Component({
  selector: 'chart-horizontal-range-bar',
  templateUrl: './chart-horizontal-range-bar.component.html',
  styleUrls: ['./chart-horizontal-range-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ChartHorizontalRangeBarComponent {
  public data = kruiChartRangeBarMock1;
  public data2 = kruiChartRangeBarMock2;
  public data3 = kruiChartRangeBarStackMock;
}
