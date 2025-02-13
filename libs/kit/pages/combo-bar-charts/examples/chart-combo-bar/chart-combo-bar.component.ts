import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  kruiChartNumberMock1,
  kruiChartNumberMock2,
  kruiChartNumberMock3,
  kruiChartNumberMock4,
} from '@kr-platform/ui';

/** @title Базовый */

@Component({
  selector: 'chart-combo-bar',
  templateUrl: './chart-combo-bar.component.html',
  styleUrls: ['./chart-combo-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartComboBarComponent {
  public data = kruiChartNumberMock1;
  public data2 = kruiChartNumberMock2;
  public data3 = kruiChartNumberMock3;
  public data4 = kruiChartNumberMock4;
}
