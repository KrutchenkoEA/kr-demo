import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartRdmNumberData } from '@kr-platform/ui';

/** @title Обновление данных */

@Component({
  selector: 'chart-update-area',
  templateUrl: './chart-update-area.component.html',
  styleUrls: ['./chart-update-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartUpdateAreaComponent {
  public data = kruiChartRdmNumberData(Math.random() * 20);

  public update(): void {
    this.data = kruiChartRdmNumberData(Math.random() * 20);
  }
}
