import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleSimpleExample } from './toggle-simple-example/toggle-simple-example';
import { ToggleSizeExample } from './toggle-size-example/toggle-size-example';
import { KruiToggleModule } from '@kr-platform/ui';

export {
  ToggleSimpleExample,
  ToggleSizeExample,
};

@NgModule({
  declarations: [
    ToggleSimpleExample,
    ToggleSizeExample,
  ],
  imports: [
    CommonModule,
    KruiToggleModule,
  ],
})
export class ToggleExampleModule {
}
