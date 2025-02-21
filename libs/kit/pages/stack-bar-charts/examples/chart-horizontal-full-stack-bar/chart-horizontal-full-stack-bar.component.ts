import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartStackBarMock2 } from '@kr-platform/ui';

/** @title Горизонтальный */

@Component({
  selector: 'chart-horizontal-full-stack-bar',
  templateUrl: './chart-horizontal-full-stack-bar.component.html',
  styleUrls: ['./chart-horizontal-full-stack-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartHorizontalFullStackBarComponent {
  public data = kruiChartStackBarMock2;
}
