import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KruiToggleComponent } from './toggle.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [KruiToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
  ],
  exports: [KruiToggleComponent],
})
export class KruiToggleModule {
}
