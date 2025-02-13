import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartStackBarMock1 } from '@kr-platform/ui';

/** @title Базовый */

@Component({
  selector: 'chart-stack-bar',
  templateUrl: './chart-stack-bar.component.html',
  styleUrls: ['./chart-stack-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartStackBarComponent {
  public data = kruiChartStackBarMock1;
}
