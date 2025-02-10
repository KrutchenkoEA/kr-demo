import { NgModule } from '@angular/core';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccordionSimpleExample } from './accordion-simple-example/accordion-simple-example';
import { KruiAccordionModule } from '@kr-platform/ui';
import { KruiSvgLoader } from '@kr-platform/icons';

export { AccordionSimpleExample };

@NgModule({
  declarations: [AccordionSimpleExample],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    KruiAccordionModule,
    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useClass: KruiSvgLoader,
      },
    }),
  ],
})
export class AccordionExampleModule {
}
