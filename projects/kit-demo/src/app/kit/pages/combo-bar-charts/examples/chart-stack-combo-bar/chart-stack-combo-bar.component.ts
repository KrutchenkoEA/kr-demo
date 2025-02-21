import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartStackBarMock1 } from '@kr-platform/ui';

/** @title Базовый*/

@Component({
  selector: 'chart-stack-combo-bar',
  templateUrl: './chart-stack-combo-bar.component.html',
  styleUrls: ['./chart-stack-combo-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartStackComboBarComponent {
  public data = kruiChartStackBarMock1;
}
