import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KruiToggleComponent } from './toggle.component';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [KruiToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIcon,
  ],
  exports: [KruiToggleComponent],
})
export class KruiToggleModule {
}
