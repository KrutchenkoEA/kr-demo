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
import { TabsComponent } from '@kr-platform/kit/pages/tabs/tabs.component';
import { ToggleComponent } from '@kr-platform/kit/pages/toggle/toggle.component';
import { KruiSvgLoader } from '@kr-platform/icons';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';


const kitPages = [
  BarChartsComponent,
  TabsComponent,
  ToggleComponent,
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
    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useClass: KruiSvgLoader,
      },
    }),
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
