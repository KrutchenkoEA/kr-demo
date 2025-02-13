import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { ChartRangeBarComponent } from './chart-range-bar/chart-range-bar.component';
import { ChartRangeBarUpdateComponent } from './chart-range-bar-update/chart-range-bar-update.component';
import { ChartRangeBarSettingComponent } from './chart-range-bar-setting/chart-range-bar-setting.component';
import { ChartHorizontalRangeBarComponent } from './chart-horizontal-range-bar/chart-horizontal-range-bar.component';
import { ChartHorizontalRangeBarUpdateComponent } from './chart-horizontal-range-bar-update/chart-horizontal-range-bar-update.component';
import {
  KruiAccordionModule,
  KruiButtonModule,
  KruiChartComboModule,
  KruiCheckboxModule,
  KruiFormFieldModule,
  KruiSliderModule, KruiToggleModule,
} from '@kr-platform/ui';

export {
  ChartRangeBarComponent,
  ChartRangeBarUpdateComponent,
  ChartRangeBarSettingComponent,
  ChartHorizontalRangeBarComponent,
  ChartHorizontalRangeBarUpdateComponent
};

@NgModule({
  declarations: [
    ChartRangeBarComponent,
    ChartRangeBarUpdateComponent,
    ChartRangeBarSettingComponent,
    ChartHorizontalRangeBarComponent,
    ChartHorizontalRangeBarUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    KruiChartComboModule,
    KruiButtonModule,
    KruiFormFieldModule,
    KruiCheckboxModule,
    KruiSliderModule,
    KruiAccordionModule,
    KruiToggleModule,
  ],
})
export class RangeBarChartExampleModule {
}
