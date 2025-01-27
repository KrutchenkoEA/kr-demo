import { NgModule } from '@angular/core';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TypographyHeaderExample } from './typography-header-example/typography-header-example';
import { TypographyLinkExample } from './typography-link-example/typography-link-example';
import { KruiSvgLoader } from '@kr-platform/icons';
import { TypographyComponent } from '@kr-platform/kit/pages/typography/typography.component';

export {
  TypographyHeaderExample,
  TypographyLinkExample,
};

@NgModule({
  declarations: [
    TypographyHeaderExample,
    TypographyLinkExample,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useClass: KruiSvgLoader,
      },
    }),
  ],
})
export class TypographyExampleModule {
}
