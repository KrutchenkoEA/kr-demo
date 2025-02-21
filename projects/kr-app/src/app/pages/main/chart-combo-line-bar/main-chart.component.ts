import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  KruiChartComboModule,
  kruiChartNumberMock2,
  kruiChartNumberMock3,
  kruiChartNumberMock4,
} from '@kr-platform/ui';

@Component({
  selector: 'kr-app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    KruiChartComboModule,
  ],
})
export class MainChartComponent {
  public data = kruiChartNumberMock4;
  public data2 = kruiChartNumberMock2;
  public data3 = kruiChartNumberMock3;
  public data4 = kruiChartNumberMock4.map(v => [v[0], v[1] * 2]);
}
