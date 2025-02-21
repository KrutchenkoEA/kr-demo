import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomBarTooltipComponent } from './tooltip.component';
import { kruiChartNumberMock2 } from '@kr-platform/ui';

/** @title Кастомный тултип */

@Component({
  selector: 'chart-tooltip-horizontal-bar',
  templateUrl: './chart-tooltip-horizontal-bar.component.html',
  styleUrls: ['./chart-tooltip-horizontal-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartTooltipHorizontalBarComponent {
  public data = kruiChartNumberMock2;
  protected readonly tooltipComponent = CustomBarTooltipComponent;
}
