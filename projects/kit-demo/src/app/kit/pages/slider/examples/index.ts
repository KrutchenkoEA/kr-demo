import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderSimpleComponent } from './slider-simple-example/slider-simple-example';
import { KruiSliderModule } from '@kr-platform/ui';

export {
  SliderSimpleComponent,
};

@NgModule({
  declarations: [
    SliderSimpleComponent,
  ],
  imports: [
    CommonModule,
    KruiSliderModule,
  ],
})
export class SliderExampleModule {
}
