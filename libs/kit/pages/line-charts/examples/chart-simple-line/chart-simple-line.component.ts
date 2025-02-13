import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMock3, kruiChartNumberMock4 } from '@kr-platform/ui';

/** @title Базовый график */

@Component({
  selector: 'chart-simple-line',
  templateUrl: './chart-simple-line.component.html',
  styleUrls: ['./chart-simple-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartSimpleLineComponent {
  public data = kruiChartNumberMock3;
  public data2 = kruiChartNumberMock4;
}
