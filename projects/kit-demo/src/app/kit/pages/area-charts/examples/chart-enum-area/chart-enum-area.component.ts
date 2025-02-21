import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartLineEnumMock1 } from '@kr-platform/ui';

/** @title Enum */

@Component({
  selector: 'chart-enum-area',
  templateUrl: './chart-enum-area.component.html',
  styleUrls: ['./chart-enum-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartEnumAreaComponent {
  public data = kruiChartLineEnumMock1;
}
