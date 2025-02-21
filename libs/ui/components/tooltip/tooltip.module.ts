import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KruiTooltipDirective } from './tooltip.directive';
import { KruiTooltipComponent } from './tooltip-component/tooltip.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { KruiTooltipTemplateDirective } from './tooltip-template.directive';

@NgModule({
  declarations: [
    KruiTooltipDirective,
    KruiTooltipComponent,
    KruiTooltipTemplateDirective
  ],
  imports: [
    CommonModule,
    OverlayModule,
  ],
  exports: [
    KruiTooltipDirective,
    KruiTooltipTemplateDirective
  ]
})
export class KruiTooltipModule {
}
