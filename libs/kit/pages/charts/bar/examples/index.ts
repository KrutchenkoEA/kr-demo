import { NgModule } from '@angular/core';
import { ChartSimpleBarComponent } from './chart-simple-bar/chart-simple-bar.component';
import { KruiChartComboModule } from '@kr-platform/ui';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { KruiSvgLoader } from '@kr-platform/icons';

export {
  ChartSimpleBarComponent,
};

@NgModule({
  declarations: [
    ChartSimpleBarComponent,
  ],
  imports: [
    KruiChartComboModule,
    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useClass: KruiSvgLoader
      }
    })
  ],
})
export class BarChartExampleModule {
}
