import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { ChartEnumLineComponent } from './chart-enum-line/chart-enum-line.component';
import { ChartInterpolateLineComponent } from './chart-interpolate-line/chart-interpolate-line.component';
import { ChartLayerLineComponent } from './chart-layer-line/chart-layer-line.component';
import { ChartPointLineComponent } from './chart-point-line/chart-point-line.component';
import { ChartSimpleLineComponent } from './chart-simple-line/chart-simple-line.component';
import { ChartTimeLineComponent } from './chart-time-line/chart-time-line.component';
import { ChartTypeLineComponent } from './chart-type-line/chart-type-line.component';
import { ChartUpdateLineComponent } from './chart-update-line/chart-update-line.component';
import { ChartZoomLineComponent } from './chart-zoom-line/chart-zoom-line.component';
import { ChartAnimationLineComponent } from './chart-animation-line/chart-animation-line.component';
import { ChartSettingLineComponent } from './chart-setting-line/chart-setting-line.component';
import { ChartLegendTooltipLineComponent } from './chart-legend-tooltip-line/chart-legend-tooltip-line.component';
import { CustomLineTooltipComponent } from './chart-legend-tooltip-line/tooltip.component';
import {
  KruiAccordionModule,
  KruiButtonModule,
  KruiChartComboModule,
  KruiCheckboxModule, KruiFormFieldModule,
  KruiSliderModule,
} from '@kr-platform/ui';
import { KruiSvgLoader } from '@kr-platform/icons';


export {
  ChartSimpleLineComponent,
  ChartPointLineComponent,
  ChartLegendTooltipLineComponent,
  ChartLayerLineComponent,
  ChartZoomLineComponent,
  ChartEnumLineComponent,
  ChartUpdateLineComponent,
  ChartTimeLineComponent,
  ChartTypeLineComponent,
  ChartInterpolateLineComponent,
  ChartAnimationLineComponent,
  ChartSettingLineComponent,
  CustomLineTooltipComponent
};

@NgModule({
  declarations: [
    ChartSimpleLineComponent,
    ChartPointLineComponent,
    ChartLegendTooltipLineComponent,
    ChartLayerLineComponent,
    ChartZoomLineComponent,
    ChartEnumLineComponent,
    ChartUpdateLineComponent,
    ChartTimeLineComponent,
    ChartTypeLineComponent,
    ChartInterpolateLineComponent,
    ChartAnimationLineComponent,
    ChartSettingLineComponent,
    CustomLineTooltipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useClass: KruiSvgLoader,
      },
    }),
    KruiButtonModule,
    KruiSliderModule,
    KruiChartComboModule,
    KruiCheckboxModule,
    KruiAccordionModule,
    KruiFormFieldModule,
  ],
})
export class LineChartExampleModule {
}
