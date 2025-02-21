import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartRandomValue, kruiChartRangeBarMock1, kruiChartRangeBarMock2 } from '@kr-platform/ui';

/** @title Обновление данных */

@Component({
  selector: 'chart-horizontal-range-bar-update',
  templateUrl: './chart-horizontal-range-bar-update.component.html',
  styleUrls: ['./chart-horizontal-range-bar-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartHorizontalRangeBarUpdateComponent {
  public data = kruiChartRangeBarMock2;
  public data2 = kruiChartRangeBarMock1;

  public update(): void {
    this.data = [
      ...this.data, [this.data.length + 1, [kruiChartRandomValue(10, 100), kruiChartRandomValue(10, 100)], ''],
    ];
    this.data2 = [
      ...this.data2, [this.data2.length + 1, [kruiChartRandomValue(10, 100), kruiChartRandomValue(10, 100)], ''],
    ];
  }
}
