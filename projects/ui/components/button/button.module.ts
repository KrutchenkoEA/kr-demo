import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KruiButtonGroupComponent } from './button-group/button-group.component';
import { KruiButtonDirective } from './button.directive';
import { KruiButtonIconDirective } from './button-icon.directive';

@NgModule({
  declarations: [KruiButtonGroupComponent, KruiButtonDirective, KruiButtonIconDirective],
  imports: [CommonModule],
  exports: [
    KruiButtonDirective,
  ],
})
export class ButtonModule {}
