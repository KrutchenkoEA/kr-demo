import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TluiMainMenuComponent } from './main-menu.component';
import { TluiToggleModule } from '@kr-platform/ui/components';

@NgModule({
  declarations: [TluiMainMenuComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularSvgIconModule,
    HttpClientModule,
    RouterModule,
    TluiToggleModule,
  ],
  exports: [TluiMainMenuComponent],
})
export class KruiMainMenuModule {}
