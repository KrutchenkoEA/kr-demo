import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { KruiChartComponent, kruiChartNumberMock1 } from '@kr-platform/ui';
import { CustomAreaTooltipComponent } from './tooltip.component';

/** @title Легенда */

@Component({
  selector: 'chart-legend-area',
  templateUrl: './chart-legend-area.component.html',
  styleUrls: ['./chart-legend-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartLegendAreaComponent {
  public data = kruiChartNumberMock1;
  @ViewChild(KruiChartComponent) public chart: KruiChartComponent | undefined;
  protected readonly tooltipComponent = CustomAreaTooltipComponent;
}
