import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartBarEnumMock1, kruiChartBarEnumMock3 } from '@kr-platform/ui';

/** @title Enum */

@Component({
  selector: 'chart-enum-horizontal-combo-bar',
  templateUrl: './chart-enum-horizontal-combo-bar.component.html',
  styleUrls: ['./chart-enum-horizontal-combo-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartEnumHorizontalComboBarComponent {
  public data = kruiChartBarEnumMock1;
  public data2 = kruiChartBarEnumMock3;
}
