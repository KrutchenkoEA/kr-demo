import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMock4 } from '@kr-platform/ui';

/** @title Zoom */

@Component({
  selector: 'chart-zoom-area',
  templateUrl: './chart-zoom-area.component.html',
  styleUrls: ['./chart-zoom-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartZoomAreaComponent {
  public data = kruiChartNumberMock4;
}
