import { NgModule } from '@angular/core';
import { BarChartsComponent } from '@kr-platform/kit/pages/charts/bar/bar-charts.component';
import {
  CodeSnippedComponent,
  ExampleViewerComponent,
  KruiMainMenuComponent,
  PageTitleService,
  StorageService,
  SyntaxPipe,
  TableOfContentsComponent,
} from '@kr-platform/kit/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KruiTabsModule, KruiToggleModule } from '@kr-platform/ui';
import { MatIcon } from '@angular/material/icon';


const kitPages = [
  BarChartsComponent,
];

@NgModule({
  declarations: [
    ExampleViewerComponent,
    CodeSnippedComponent,
    KruiMainMenuComponent,
    TableOfContentsComponent,
    ...kitPages,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIcon,
    SyntaxPipe,
    KruiToggleModule,
    KruiTabsModule,
  ],
  providers: [
    StorageService,
    PageTitleService,
  ],
  exports: [
    ExampleViewerComponent,
    CodeSnippedComponent,
    KruiMainMenuComponent,
    TableOfContentsComponent,
  ],
})
export class KrKitPagesModule {
}
