import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMock1, kruiChartNumberMock3 } from '@kr-platform/ui';

/** @title Слои */

@Component({
  selector: 'chart-layer-line',
  templateUrl: './chart-layer-line.component.html',
  styleUrls: ['./chart-layer-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartLayerLineComponent {
  public data = kruiChartNumberMock1;
  public data2 = kruiChartNumberMock3;
}
