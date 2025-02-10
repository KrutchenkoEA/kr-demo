import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerSimpleComponent } from './spinner-simple-example/spinner-simple-example';
import { KruiSpinnerModule } from '@kr-platform/ui';

export { SpinnerSimpleComponent };

@NgModule({
  declarations: [SpinnerSimpleComponent],
  imports: [
    CommonModule,
    KruiSpinnerModule,
  ],
})
export class SpinnerExampleModule {
}
