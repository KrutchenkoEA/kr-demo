import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartRandomValue, kruiChartStackBarMock1 } from '@kr-platform/ui';

/** @title Обновление данных */

@Component({
  selector: 'chart-horizontal-stack-bar-update',
  templateUrl: './chart-horizontal-stack-bar-update.component.html',
  styleUrls: ['./chart-horizontal-stack-bar-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartHorizontalStackBarUpdateComponent {
  public data = kruiChartStackBarMock1;

  public update(): void {
    this.data = [
      ...this.data, [
        this.data.length + 1,
        [kruiChartRandomValue(10, 50), kruiChartRandomValue(10, 50), kruiChartRandomValue(10, 50)],
        '',
      ],
    ];
  }
}
