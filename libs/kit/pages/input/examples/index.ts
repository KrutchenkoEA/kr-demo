import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputSimpleExample } from './input-simple-example/input-simple-example';
import { InputNativeExample } from './input-native-example/input-native-example';
import { KruiFormFieldModule } from '@kr-platform/ui';

export {
  InputSimpleExample,
  InputNativeExample,
};

@NgModule({
  declarations: [
    InputSimpleExample,
    InputNativeExample,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    KruiFormFieldModule,
  ],
})
export class InputExampleModule {
}
