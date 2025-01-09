import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartSimpleBarComponent } from './chart-simple-bar/chart-simple-bar.component';
import { KruiChartComboModule } from '@kr-platform/ui';

export {
  ChartSimpleBarComponent,
};

@NgModule({
  declarations: [
    ChartSimpleBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    KruiChartComboModule,
  ],
})
export class BarChartExampleModule {
}
