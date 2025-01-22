import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KruiToggleComponent } from './toggle.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [KruiToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [KruiToggleComponent],
})
export class KruiToggleModule {
}
