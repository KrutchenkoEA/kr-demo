import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSizeExample } from './button-size-example/button-size-example';
import { ButtonStyleExample } from './button-style-example/button-style-example';
import { ButtonIconExample } from './button-icon-example/button-icon-example';
import { KruiButtonModule } from '@kr-platform/ui';
import { SvgIconComponent } from 'angular-svg-icon';

export {
  ButtonSizeExample,
  ButtonStyleExample,
  ButtonIconExample,
};

@NgModule({
  declarations: [
    ButtonSizeExample,
    ButtonStyleExample,
    ButtonIconExample,
  ],
  imports: [
    CommonModule,
    KruiButtonModule,
    SvgIconComponent,
  ],
})
export class ButtonExampleModule {
}
