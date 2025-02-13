import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { FormsModule } from '@angular/forms';
import { KruiButtonDirective } from './button.directive';
import { KruiButtonGroupComponent } from './button-group/button-group.component';
import { KruiButtonIconDirective } from './button-icon.directive';

@NgModule({
  declarations: [
    KruiButtonDirective,
    KruiButtonGroupComponent,
    KruiButtonIconDirective,
  ],
  imports: [CommonModule, FormsModule, A11yModule],
  exports: [
    KruiButtonDirective,
    KruiButtonGroupComponent,
    KruiButtonIconDirective,
  ],
})
export class KruiButtonModule {}
