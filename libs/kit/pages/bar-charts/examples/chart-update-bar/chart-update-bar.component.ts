import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMock1, kruiChartRandomValue } from '@kr-platform/ui';

/** @title Обновление данных */

@Component({
  selector: 'chart-update-bar',
  templateUrl: './chart-update-bar.component.html',
  styleUrls: ['./chart-update-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartUpdateBarComponent {
  public data = kruiChartNumberMock1;

  public update(): void {
    this.data = [...this.data, [this.data.length + 1, kruiChartRandomValue(10, 100)]];
  }
}
