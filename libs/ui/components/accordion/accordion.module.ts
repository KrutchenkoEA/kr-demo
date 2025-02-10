import { NgModule } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { KruiAccordionItemDirective } from './accordion-item.directive';
import { KruiAccordionComponent } from './accordion.component';

@NgModule({
  declarations: [KruiAccordionComponent, KruiAccordionItemDirective],
  imports: [CommonModule, CdkAccordionModule, AngularSvgIconModule],
  exports: [KruiAccordionComponent, KruiAccordionItemDirective],
})
export class KruiAccordionModule {
}
