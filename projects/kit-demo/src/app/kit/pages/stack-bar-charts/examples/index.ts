import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChartStackBarComponent } from './chart-stack-bar/chart-stack-bar.component';
import { ChartFullStackBarComponent } from './chart-full-stack-bar/chart-full-stack-bar.component';
import { ChartStackBarEnumComponent } from './chart-stack-bar-enum/chart-stack-bar-enum.component';
import { ChartStackBarAnimationComponent } from './chart-stack-bar-animation/chart-stack-bar-animation.component';
import { ChartSettingStackBarComponent } from './chart-setting-stack-bar/chart-setting-stack-bar.component';
import { ChartHorizontalStackBarComponent } from './chart-horizontal-stack-bar/chart-horizontal-stack-bar.component';
import {
  ChartHorizontalFullStackBarComponent,
} from './chart-horizontal-full-stack-bar/chart-horizontal-full-stack-bar.component';
import {
  ChartHorizontalStackBarUpdateComponent,
} from './chart-horizontal-stack-bar-update/chart-horizontal-stack-bar-update.component';
import {
  KruiAccordionModule,
  KruiButtonModule,
  KruiChartComboModule,
  KruiCheckboxModule,
  KruiFormFieldModule,
  KruiSliderModule,
  KruiToggleModule,
} from '@kr-platform/ui';

export {
  ChartStackBarComponent,
  ChartFullStackBarComponent,
  ChartStackBarEnumComponent,
  ChartStackBarAnimationComponent,
  ChartSettingStackBarComponent,
  ChartHorizontalStackBarComponent,
  ChartHorizontalFullStackBarComponent,
  ChartHorizontalStackBarUpdateComponent,
};

@NgModule({
  declarations: [
    ChartStackBarComponent,
    ChartFullStackBarComponent,
    ChartStackBarEnumComponent,
    ChartStackBarAnimationComponent,
    ChartSettingStackBarComponent,
    ChartHorizontalStackBarComponent,
    ChartHorizontalFullStackBarComponent,
    ChartHorizontalStackBarUpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    KruiChartComboModule,
    KruiButtonModule,
    KruiSliderModule,
    KruiToggleModule,
    KruiFormFieldModule,
    KruiAccordionModule,
    KruiCheckboxModule,
  ],
})
export class BarChartExampleModule {
}
