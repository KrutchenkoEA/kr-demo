import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartLineEnumMock1 } from '@kr-platform/ui';

/** @title Enum */

@Component({
  selector: 'chart-enum-line',
  templateUrl: './chart-enum-line.component.html',
  styleUrls: ['./chart-enum-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartEnumLineComponent {
  public data = kruiChartLineEnumMock1;
}
