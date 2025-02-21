import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartRandomValue, kruiChartRdmNumberData } from '@kr-platform/ui';

/** @title Обновление данных */

@Component({
  selector: 'chart-update-line',
  templateUrl: './chart-update-line.component.html',
  styleUrls: ['./chart-update-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartUpdateLineComponent {
  public data: [number, number, any][] = kruiChartRdmNumberData(Math.random() * 20);

  public update(): void {
    this.data = [...this.data, [this.data.length, kruiChartRandomValue(10, 100), '']];
  }
}
