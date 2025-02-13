import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChartComboBarComponent } from './chart-combo-bar/chart-combo-bar.component';
import { ChartStackComboBarComponent } from './chart-stack-combo-bar/chart-stack-combo-bar.component';
import { ChartUpdateComboBarComponent } from './chart-update-combo-bar/chart-update-combo-bar.component';
import { ChartSettingComboBarComponent } from './chart-setting-combo-bar/chart-setting-combo-bar.component';
import { ChartComboHorizontalBarComponent } from './chart-combo-horizontal-bar/chart-combo-horizontal-bar.component';
import {
  ChartEnumHorizontalComboBarComponent,
} from './chart-enum-horizontal-combo-bar/chart-enum-horizontal-combo-bar.component';
import {
  ChartUpdateHorizontalComboBarComponent,
} from './chart-update-horizontal-combo-bar/chart-update-horizontal-combo-bar.component';
import {
  KruiAccordionModule,
  KruiButtonModule,
  KruiChartComboModule,
  KruiCheckboxModule, KruiFormFieldModule,
  KruiSliderModule, KruiToggleModule,
} from '@kr-platform/ui';

export {
  ChartComboBarComponent,
  ChartStackComboBarComponent,
  ChartUpdateComboBarComponent,
  ChartSettingComboBarComponent,
  ChartComboHorizontalBarComponent,
  ChartUpdateHorizontalComboBarComponent,
  ChartEnumHorizontalComboBarComponent,
};

@NgModule({
  declarations: [
    ChartComboBarComponent,
    ChartStackComboBarComponent,
    ChartUpdateComboBarComponent,
    ChartSettingComboBarComponent,
    ChartComboHorizontalBarComponent,
    ChartUpdateHorizontalComboBarComponent,
    ChartEnumHorizontalComboBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    KruiChartComboModule,
    KruiButtonModule,
    KruiCheckboxModule,
    KruiAccordionModule,
    KruiSliderModule,
    KruiFormFieldModule,
    KruiToggleModule,
  ],
})
export class BarChartExampleModule {
}
