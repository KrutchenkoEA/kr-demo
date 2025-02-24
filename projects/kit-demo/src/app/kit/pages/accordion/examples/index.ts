import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionSimpleExample } from './accordion-simple-example/accordion-simple-example';
import { KruiAccordionModule } from '@kr-platform/ui';

export { AccordionSimpleExample };

@NgModule({
  declarations: [AccordionSimpleExample],
  imports: [
    CommonModule,
    KruiAccordionModule,
  ],
})
export class AccordionExampleModule {
}
