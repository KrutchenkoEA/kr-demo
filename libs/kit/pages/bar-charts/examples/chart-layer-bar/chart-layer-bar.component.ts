import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMock3, kruiChartNumberMock4 } from '@kr-platform/ui';

/** @title Слои */

@Component({
  selector: 'chart-layer-bar',
  templateUrl: './chart-layer-bar.component.html',
  styleUrls: ['./chart-layer-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartLayerBarComponent {
  public data = kruiChartNumberMock3;
  public data2 = kruiChartNumberMock4;
}
