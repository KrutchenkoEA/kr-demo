import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartBarEnumMock1, kruiChartNumberMockMissingValue1 } from '@kr-platform/ui';

/** @title Базовый */

@Component({
  selector: 'chart-simple-bar',
  templateUrl: './chart-simple-bar.component.html',
  styleUrls: ['./chart-simple-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartSimpleBarComponent {
  public data = kruiChartNumberMockMissingValue1;
}
