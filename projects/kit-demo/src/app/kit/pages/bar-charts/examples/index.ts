import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartSimpleBarComponent } from './chart-simple-bar/chart-simple-bar.component';
import {
  KruiAccordionModule,
  KruiButtonModule,
  KruiChartComboModule,
  KruiCheckboxModule,
  KruiFormFieldModule, KruiSliderModule, KruiToggleModule,
} from '@kr-platform/ui';
import { ChartLayerBarComponent } from './chart-layer-bar/chart-layer-bar.component';
import { ChartZoomBarComponent } from './chart-zoom-bar/chart-zoom-bar.component';
import { ChartUpdateBarComponent } from './chart-update-bar/chart-update-bar.component';
import { ChartEnumBarComponent } from './chart-enum-bar/chart-enum-bar.component';
import { ChartSettingBarComponent } from './chart-setting-bar/chart-setting-bar.component';
import { ChartAnimationBarComponent } from './chart-animation-bar/chart-animation-bar.component';
import { ChartTimeBarComponent } from './chart-time-bar/chart-time-bar.component';
import { ChartSimpleHorizontalBarComponent } from './chart-simple-horizontal-bar/chart-simple-horizontal-bar.component';
import { ChartUpdateHorizontalBarComponent } from './chart-update-horizontal-bar/chart-update-horizontal-bar.component';
import {
  ChartTooltipHorizontalBarComponent,
} from './chart-tooltip-horizontal-bar/chart-tooltip-horizontal-bar.component';
import { CustomBarTooltipComponent } from './chart-tooltip-horizontal-bar/tooltip.component';
import { SvgIconComponent } from 'angular-svg-icon';

export {
  ChartSimpleBarComponent,
  ChartEnumBarComponent,
  ChartUpdateBarComponent,
  ChartZoomBarComponent,
  ChartLayerBarComponent,
  ChartAnimationBarComponent,
  ChartSettingBarComponent,
  ChartTimeBarComponent,
  ChartSimpleHorizontalBarComponent,
  ChartUpdateHorizontalBarComponent,
  ChartTooltipHorizontalBarComponent,
  CustomBarTooltipComponent,
};

@NgModule({
  declarations: [
    ChartSimpleBarComponent,
    ChartEnumBarComponent,
    ChartUpdateBarComponent,
    ChartZoomBarComponent,
    ChartLayerBarComponent,
    ChartAnimationBarComponent,
    ChartSettingBarComponent,
    ChartTimeBarComponent,
    ChartSimpleHorizontalBarComponent,
    ChartUpdateHorizontalBarComponent,
    ChartTooltipHorizontalBarComponent,
    CustomBarTooltipComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    KruiChartComboModule,
    KruiButtonModule,
    KruiCheckboxModule,
    KruiAccordionModule,
    KruiFormFieldModule,
    KruiSliderModule,
    KruiToggleModule,
    SvgIconComponent,
  ],
})
export class BarChartExampleModule {
}
