import { NgModule } from '@angular/core';
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
    KruiChartComboModule,
  ],
})
export class BarChartExampleModule {
}
