import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartStackBarMock1 } from '@kr-platform/ui';

/** @title Enum */

@Component({
  selector: 'chart-stack-bar-enum',
  templateUrl: './chart-stack-bar-enum.component.html',
  styleUrls: ['./chart-stack-bar-enum.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartStackBarEnumComponent {
  public data = kruiChartStackBarMock1;
}
