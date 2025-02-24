import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
import { KruiRangeComponent } from './range/range.component';
import { KruiSliderComponent } from './slider/slider.component';
import { KruiFormFieldModule } from '@kr-platform/ui/components/form-field';

@NgModule({
  declarations: [KruiRangeComponent, KruiSliderComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule,
    A11yModule,
    KruiFormFieldModule,
  ],
  exports: [KruiRangeComponent, KruiSliderComponent],
})
export class KruiSliderModule {
}
