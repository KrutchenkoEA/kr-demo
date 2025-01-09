import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartBarEnumMock1 } from '@kr-platform/ui';

/** @title Базовый график */

@Component({
  selector: 'chart-simple-bar',
  templateUrl: './chart-simple-bar.component.html',
  styleUrls: ['./chart-simple-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartSimpleBarComponent {
  public data = kruiChartBarEnumMock1;
}
