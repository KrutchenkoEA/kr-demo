import { NgModule } from '@angular/core';
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
import { TypographyComponent } from '@kr-platform/kit/pages/typography/typography.component';
import { AccordionComponent } from '@kr-platform/kit/pages/accordion/accordion.component';
import { CheckboxComponent } from '@kr-platform/kit/pages/checkbox/checkbox.component';
import { InputComponent } from '@kr-platform/kit/pages/input/input.component';
import { RangeComponent } from '@kr-platform/kit/pages/range/range.component';
import { SelectComponent } from '@kr-platform/kit/pages/select/select.component';
import { SliderComponent } from '@kr-platform/kit/pages/slider/slider.component';
import { SpinnerComponent } from '@kr-platform/kit/pages/spinner/spinner.component';
import { ButtonComponent } from '@kr-platform/kit/pages/button/button.component';
import { LineChartsComponent } from '@kr-platform/kit/pages/line-charts/line-charts.component';
import { BarChartsComponent } from '@kr-platform/kit/pages/bar-charts/bar-charts.component';
import { StackBarChartsComponent } from '@kr-platform/kit/pages/stack-bar-charts/stack-bar-charts.component';
import { ComboBarChartsComponent } from '@kr-platform/kit/pages/combo-bar-charts/combo-bar-charts.component';
import { RangeBarChartsComponent } from '@kr-platform/kit/pages/range-bar-charts/range-bar-charts.component';
import { TooltipComponent } from '@kr-platform/kit/pages/tooltip/tooltip.component';
import { AreaChartsComponent } from '@kr-platform/kit/pages/area-charts/area-charts.component';


const kitPages = [
  AccordionComponent,
  ButtonComponent,
  CheckboxComponent,
  InputComponent,
  RangeComponent,
  SelectComponent,
  SliderComponent,
  SpinnerComponent,
  TabsComponent,
  ToggleComponent,
  TypographyComponent,
  TooltipComponent
];

const kitPagesCharts = [
  LineChartsComponent,
  BarChartsComponent,
  StackBarChartsComponent,
  ComboBarChartsComponent,
  RangeBarChartsComponent,
  AreaChartsComponent
];

@NgModule({
  declarations: [
    ExampleViewerComponent,
    CodeSnippedComponent,
    KruiMainMenuComponent,
    TableOfContentsComponent,
    ...kitPages,
    ...kitPagesCharts,
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
