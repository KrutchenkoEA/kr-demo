import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartStackBarMock2 } from '@kr-platform/ui';

/** @title full stack */

@Component({
  selector: 'chart-full-stack-bar',
  templateUrl: './chart-full-stack-bar.component.html',
  styleUrls: ['./chart-full-stack-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartFullStackBarComponent {
  public data = kruiChartStackBarMock2;
}
