import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartBarEnumMock1 } from '@kr-platform/ui';

/** @title Zoom */

@Component({
  selector: 'chart-zoom-bar',
  templateUrl: './chart-zoom-bar.component.html',
  styleUrls: ['./chart-zoom-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartZoomBarComponent {
  public data = kruiChartBarEnumMock1;
}
