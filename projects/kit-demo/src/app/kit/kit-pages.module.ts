import { NgModule } from '@angular/core';
import {
  CodeSnippedComponent,
  ExampleViewerComponent,
  KruiMainMenuComponent,
  PageTitleService,
  StorageService,
  TableOfContentsComponent,
} from './example';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KruiTabsModule, KruiToggleModule } from '@kr-platform/ui';
import { MatIcon } from '@angular/material/icon';
import { KruiSvgLoader } from '@kr-platform/icons';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { ButtonComponent } from './pages/button/button.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { InputComponent } from './pages/input/input.component';
import { RangeComponent } from './pages/range/range.component';
import { SelectComponent } from './pages/select/select.component';
import { SliderComponent } from './pages/slider/slider.component';
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { ToggleComponent } from './pages/toggle/toggle.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';
import { LineChartsComponent } from './pages/line-charts/line-charts.component';
import { BarChartsComponent } from './pages/bar-charts/bar-charts.component';
import { StackBarChartsComponent } from './pages/stack-bar-charts/stack-bar-charts.component';
import { ComboBarChartsComponent } from './pages/combo-bar-charts/combo-bar-charts.component';
import { RangeBarChartsComponent } from './pages/range-bar-charts/range-bar-charts.component';
import { AreaChartsComponent } from './pages/area-charts/area-charts.component';
import { ComboChartsComponent } from './pages/combo-charts/combo-charts.component';
import { SyntaxPipe } from './example/pipes/syntax.pipe';


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
  TooltipComponent,
];

const kitPagesCharts = [
  LineChartsComponent,
  BarChartsComponent,
  StackBarChartsComponent,
  ComboBarChartsComponent,
  RangeBarChartsComponent,
  AreaChartsComponent,
  ComboChartsComponent,
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
