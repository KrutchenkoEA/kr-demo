import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {
  KruiAccordionModule,
  KruiButtonModule,
  KruiChartComboModule,
  KruiCheckboxModule,
  KruiFormFieldModule,
  KruiSliderModule,
  KruiToggleModule,
} from '@kr-platform/ui';
import { SplitAreaComponent, SplitComponent } from 'angular-split';
import { ComboChartSettingsComponent } from './combo-chart-settings/combo-chart-settings.component';
import { ComboChartGraphComponent } from './combo-chart-graph/combo-chart-graph.component';
import { ComboChartGeneratorComponent } from './combo-chart-generator/combo-chart-generator.component';
import { MnActionSelectorControlComponent } from './action-selector-control/action-selector-control.component';
import { MatMenuModule } from '@angular/material/menu';

export {
  ComboChartGraphComponent,
};

@NgModule({
  declarations: [
    ComboChartSettingsComponent,
    ComboChartGraphComponent,
    ComboChartGeneratorComponent,
    MnActionSelectorControlComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    KruiChartComboModule,
    KruiAccordionModule,
    KruiCheckboxModule,
    KruiFormFieldModule,
    KruiSliderModule,
    SplitAreaComponent,
    SplitComponent,
    KruiButtonModule,
    KruiToggleModule,
    MatMenuModule,
  ],
})
export class ChartsExampleModule {
}
