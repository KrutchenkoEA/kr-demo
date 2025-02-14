import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMockMissingValue1 } from '@kr-platform/ui';

/** @title Пропущенные значения */

@Component({
  selector: 'chart-point-area',
  templateUrl: './chart-point-area.component.html',
  styleUrls: ['./chart-point-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartPointAreaComponent {
  public data = kruiChartNumberMockMissingValue1;
}
