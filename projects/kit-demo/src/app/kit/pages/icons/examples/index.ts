import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsSimpleExampleComponent } from './icons-simple-example/icons-simple-example.component';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { KruiSvgLoader } from '@kr-platform/icons';

export {
  IconsSimpleExampleComponent,
};

@NgModule({
  declarations: [
    IconsSimpleExampleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useClass: KruiSvgLoader
      }
    })
  ],
})
export class IconsExampleModule {
}
