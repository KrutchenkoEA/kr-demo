import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { KruiSpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [KruiSpinnerComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [KruiSpinnerComponent],
})
export class KruiSpinnerModule {
}
