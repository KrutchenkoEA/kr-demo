import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMock1, kruiChartNumberMock2 } from '@kr-platform/ui';

/** @title Настраиваемый */

@Component({
  selector: 'chart-combo-line-bar',
  templateUrl: './chart-combo-line-bar.component.html',
  styleUrls: ['./chart-combo-line-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartComboLineBarComponent {
  public data = kruiChartNumberMock1;
  public data2 = kruiChartNumberMock2;
}
