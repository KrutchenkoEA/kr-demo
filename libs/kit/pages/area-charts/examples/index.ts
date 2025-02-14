import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChartEnumAreaComponent } from './chart-enum-area/chart-enum-area.component';
import { ChartLayerAreaComponent } from './chart-layer-area/chart-layer-area.component';
import { ChartLegendAreaComponent } from './chart-legend-area/chart-legend-area.component';
import { ChartPointAreaComponent } from './chart-point-area/chart-point-area.component';
import { ChartSimpleAreaComponent } from './chart-simple-area/chart-simple-area.component';
import { ChartTimeAreaComponent } from './chart-time-area/chart-time-area.component';
import { ChartUpdateAreaComponent } from './chart-update-area/chart-update-area.component';
import { ChartZoomAreaComponent } from './chart-zoom-area/chart-zoom-area.component';
import { KruiButtonModule, KruiChartComboModule } from '@kr-platform/ui';
import { CustomAreaTooltipComponent } from './chart-legend-area/tooltip.component';

export {
  ChartSimpleAreaComponent,
  ChartPointAreaComponent,
  ChartLegendAreaComponent,
  ChartLayerAreaComponent,
  ChartZoomAreaComponent,
  ChartEnumAreaComponent,
  ChartUpdateAreaComponent,
  ChartTimeAreaComponent,
  CustomAreaTooltipComponent,
};

@NgModule({
  declarations: [
    ChartSimpleAreaComponent,
    ChartPointAreaComponent,
    ChartLegendAreaComponent,
    ChartLayerAreaComponent,
    ChartZoomAreaComponent,
    ChartEnumAreaComponent,
    ChartUpdateAreaComponent,
    ChartTimeAreaComponent,
    CustomAreaTooltipComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    KruiChartComboModule,
    KruiButtonModule,
  ],
})
export class LineChartExampleModule {
}
