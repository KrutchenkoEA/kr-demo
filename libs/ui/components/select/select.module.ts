import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { KruiSelectComponent } from './select.component';
import { KruiOptionComponent } from './option/option.component';
import { KruiSelectSearch } from './select-search/select-search.component';
import { KruiSpinnerModule } from '@kr-platform/ui/components';

@NgModule({
  declarations: [KruiSelectComponent, KruiOptionComponent, KruiSelectSearch],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    KruiSpinnerModule,
  ],
  exports: [KruiSelectComponent, KruiOptionComponent],
})
export class KruiSelectModule {
}
