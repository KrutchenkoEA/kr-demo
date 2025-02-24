import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMock1, kruiChartNumberMock2, kruiChartRandomValue } from '@kr-platform/ui';

/** @title Обновление данных */

@Component({
  selector: 'chart-update-combo-bar',
  templateUrl: './chart-update-combo-bar.component.html',
  styleUrls: ['./chart-update-combo-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartUpdateComboBarComponent {
  public data = kruiChartNumberMock1;
  public data2 = kruiChartNumberMock2;


  public update(): void {
    this.data = [...this.data, [this.data.length + 1, kruiChartRandomValue(10, 100)]];
    this.data2 = [...this.data2, [this.data2.length + 1, kruiChartRandomValue(10, 100)]];
  }
}
