import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { KruiMainMenuComponent } from './main-menu.component';
import { KruiToggleModule } from '@kr-platform/ui/components';

@NgModule({
  declarations: [KruiMainMenuComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularSvgIconModule,
    HttpClientModule,
    RouterModule,
    KruiToggleModule,
  ],
  exports: [KruiMainMenuComponent],
})
export class KruiMainMenuModule {}
