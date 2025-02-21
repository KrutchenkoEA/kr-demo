import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { KruiChartComponent, kruiChartNumberMock1 } from '@kr-platform/ui';
import { CustomLineTooltipComponent } from './tooltip.component';

/** @title Кастомная легенда и тултип */

@Component({
  selector: 'chart-legend-tooltip-line',
  templateUrl: './chart-legend-tooltip-line.component.html',
  styleUrls: ['./chart-legend-tooltip-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartLegendTooltipLineComponent {
  public data = kruiChartNumberMock1;
  @ViewChild(KruiChartComponent) public chart: KruiChartComponent | undefined;
  protected readonly tooltipComponent = CustomLineTooltipComponent;
}
