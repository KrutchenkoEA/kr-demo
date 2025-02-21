import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxSimpleExample } from './checkbox-simple-example/checkbox-simple-example';
import { KruiCheckboxModule } from '@kr-platform/ui';

export {
  CheckboxSimpleExample,
};

@NgModule({
  declarations: [
    CheckboxSimpleExample,
  ],
  imports: [
    CommonModule,
    KruiCheckboxModule,
  ],
})
export class CheckboxExampleModule {
}
