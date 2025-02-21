import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartStackBarMock1 } from '@kr-platform/ui';

/** @title Горизонтальный */

@Component({
  selector: 'chart-horizontal-stack-bar',
  templateUrl: './chart-horizontal-stack-bar.component.html',
  styleUrls: ['./chart-horizontal-stack-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartHorizontalStackBarComponent {
  public data = kruiChartStackBarMock1;
}
