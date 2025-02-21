import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { FormsModule } from '@angular/forms';
import { KruiCheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [KruiCheckboxComponent],
  imports: [CommonModule, FormsModule, A11yModule],
  exports: [KruiCheckboxComponent],
})
export class KruiCheckboxModule {}
