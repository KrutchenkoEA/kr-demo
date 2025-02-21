import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSimpleComponent } from './range-simple-example/range-simple-example';
import { KruiSliderModule } from '@kr-platform/ui';

export {
  RangeSimpleComponent,
};

@NgModule({
  declarations: [
    RangeSimpleComponent,
  ],
  imports: [
    CommonModule,
    KruiSliderModule,
  ],
})
export class RangeExampleModule {
}
