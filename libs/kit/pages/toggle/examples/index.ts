import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleSimpleExample } from './toggle-simple-example/toggle-simple-example';
import { ToggleSizeExample } from './toggle-size-example/toggle-size-example';
import { KruiToggleModule } from '@kr-platform/ui';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { KruiSvgLoader } from '@kr-platform/icons';

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
    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useClass: KruiSvgLoader
      }
    })
  ],
})
export class ToggleExampleModule {
}
