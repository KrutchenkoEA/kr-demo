import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChartComboLineBarComponent } from './chart-combo-line-bar/chart-combo-line-bar.component';
import { KruiChartComboModule } from '@kr-platform/ui';

export {
  ChartComboLineBarComponent,
};

@NgModule({
  declarations: [
    ChartComboLineBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    KruiChartComboModule,
  ],
})
export class ChartsExampleModule {
}
