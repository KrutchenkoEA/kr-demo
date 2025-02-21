import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartRangeBarMock1, kruiChartRangeBarMock2, kruiChartRangeBarStackMock } from '@kr-platform/ui';

/** @title Базовый */

@Component({
  selector: 'chart-range-bar',
  templateUrl: './chart-range-bar.component.html',
  styleUrls: ['./chart-range-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartRangeBarComponent {
  public data = kruiChartRangeBarMock1;
  public data2 = kruiChartRangeBarMock2;
  public data3 = kruiChartRangeBarStackMock;
}
