import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMock1, kruiChartNumberMock3 } from '@kr-platform/ui';

/** @title Слои */

@Component({
  selector: 'chart-layer-area',
  templateUrl: './chart-layer-area.component.html',
  styleUrls: ['./chart-layer-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartLayerAreaComponent {
  public data = kruiChartNumberMock1;
  public data2 = kruiChartNumberMock3;
}
