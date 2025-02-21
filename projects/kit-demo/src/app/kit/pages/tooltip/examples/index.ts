import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidesSmallExampleComponent } from './sides-small-example/sides-small-example.component';
import { TitleExampleComponent } from './title-example/title-example.component';
import {
  SidesSmallTemplateExampleComponent,
} from './sides-small-template-example/sides-small-template-example.component';
import { KruiTooltipModule } from '@kr-platform/ui';

export {
  SidesSmallExampleComponent,
  TitleExampleComponent,
  SidesSmallTemplateExampleComponent,
};

@NgModule({
  declarations: [
    SidesSmallExampleComponent,
    TitleExampleComponent,
    SidesSmallTemplateExampleComponent,
  ],
  imports: [
    CommonModule,
    KruiTooltipModule,
  ],
})
export class TooltipExample {
}
