import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMock4 } from '@kr-platform/ui';

/** @title Zoom */

@Component({
  selector: 'chart-zoom-line',
  templateUrl: './chart-zoom-line.component.html',
  styleUrls: ['./chart-zoom-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartZoomLineComponent {
  public data = kruiChartNumberMock4;
}
