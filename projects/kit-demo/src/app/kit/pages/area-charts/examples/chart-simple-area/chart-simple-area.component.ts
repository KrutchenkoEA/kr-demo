import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMock1, kruiChartNumberMock2 } from '@kr-platform/ui';

/** @title Базовый */

@Component({
  selector: 'chart-simple-area',
  templateUrl: './chart-simple-area.component.html',
  styleUrls: ['./chart-simple-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartSimpleAreaComponent {
  public data = kruiChartNumberMock1;
  public data2 = kruiChartNumberMock2;
}
