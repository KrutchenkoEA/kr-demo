import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TluiToggleComponent } from './toggle.component';

@NgModule({
  declarations: [TluiToggleComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [TluiToggleComponent],
})
export class TluiToggleModule {}
