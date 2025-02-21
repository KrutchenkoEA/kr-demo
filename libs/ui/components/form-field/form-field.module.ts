import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { KruiErrorComponent } from './error/error.component';
import { KruiHintComponent } from './hint/hint.component';
import { KruiFormFieldComponent } from './form-field/form-field.component';
import { KruiLabelComponent } from './label/label.component';
import { KruiPrefixDirective } from './prefix.directive';
import { KruiSuffixDirective } from './suffix.directive';
import { KruiInputDirective } from './input.directive';
import { KruiFitHeightDirective } from './fit-height.directive';

@NgModule({
  declarations: [
    KruiErrorComponent,
    KruiHintComponent,
    KruiFormFieldComponent,
    KruiLabelComponent,
    KruiPrefixDirective,
    KruiSuffixDirective,
    KruiInputDirective,
    KruiFitHeightDirective,
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    OverlayModule,
    A11yModule,
  ],
  exports: [
    KruiErrorComponent,
    KruiHintComponent,
    KruiFormFieldComponent,
    KruiLabelComponent,
    KruiPrefixDirective,
    KruiSuffixDirective,
    KruiInputDirective,
    KruiFitHeightDirective,
  ],
})
export class KruiFormFieldModule {
}
