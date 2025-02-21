import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KruiChartPrintComponent } from './components/chart-print/chart-print.component';
import { KruiChartWrapperComponent } from './components/chart-wrapper/chart-wrapper.component';
import { KruiChartComponent } from './components/chart/chart.component';
import { KruiChartLegendComponent } from './components/legend/legend.component';
import { KruiChartTooltipComponent } from './components/tooltip/tooltip.component';
import { KRUI_CHART_AXIS_COLORS_LIST, KRUI_CHART_COLORS_LIST, KRUI_CHART_GRID_COLORS_LIST } from './constants';
import { KruiChartAxisDirective } from './content-directives/axis.directive';
import { KruiChartDataLayerDirective } from './content-directives/data-layer.directive';
import { KruiChartGridDirective } from './content-directives/grid.directive';
import { KruiChartLayerDirective } from './content-directives/layer.directive';
import { KruiChartLegendDirective } from './content-directives/legend.directive';
import { KruiChartTooltipBaseDirective } from './content-directives/tooltip.directive';
import { KruiChartBarDirective } from './data-directives/bar.directive';
import { KruiChartComboBarDirective } from './data-directives/combo-bar.directive';
import { KruiChartHorizontalBarDirective } from './data-directives/horizontal-bar.directive';
import { KruiChartHorizontalComboBarDirective } from './data-directives/horizontal-combo-bar.directive';
import { KruiChartLineDirective } from './data-directives/line.directive';
import {
  KRUI_CHART_AXIS_PALETTE,
  KRUI_CHART_COLOR_PARSE_SERVICE,
  KRUI_CHART_FORM_CREATE_SERVICE,
  KRUI_CHART_GRID_PALETTE,
  KRUI_CHART_PALETTE,
  KRUI_CHART_POPUP_SERVICE,
  KRUI_CHART_STACKED_SERVICE,
} from './injection-tokens';
import {
  KruiChartColorParseService,
  KruiChartFormCreateService,
  KruiChartPopupService,
  KruiChartStackedService,
} from './services';
import { KruiChartSmartScrollDirective } from './wrapper-directives/smart-scroll.directive';
import { KruiChartToolbarDirective } from './wrapper-directives/toolbar.directive';
import { KruiChartTooltipProviderDirective } from './wrapper-directives/tooltip-provider.directive';
import { KruiChartWrapperDirective } from './wrapper-directives/wrapper.directive';
import { KruiChartStackBarDirective } from './data-directives/stack-bar.directive';
import { KruiChartColorWrapperDirective } from './wrapper-directives/color-wrapper.directive';
import { KruiChartRangeBarDirective } from './data-directives/range-bar.directive';
import { KruiChartHorizontalRangeBarDirective } from './data-directives/horizontal-range-bar.directive';
import { KruiChartHorizontalStackBarDirective } from './data-directives/horizontal-stack-bar.directive';
import { AngularSvgIconModule } from 'angular-svg-icon';

const exportableComponents = [
  KruiChartComponent,
  KruiChartLayerDirective,
  KruiChartAxisDirective,
  KruiChartGridDirective,
  KruiChartLegendDirective,
  KruiChartTooltipBaseDirective,
  KruiChartDataLayerDirective,
  KruiChartWrapperDirective,
  KruiChartTooltipProviderDirective,
  KruiChartSmartScrollDirective,
  KruiChartWrapperComponent,
  KruiChartToolbarDirective,
  KruiChartColorWrapperDirective,
];

const dataDirectives = [
  KruiChartLineDirective,
  KruiChartBarDirective,
  KruiChartHorizontalBarDirective,
  KruiChartComboBarDirective,
  KruiChartHorizontalComboBarDirective,
  KruiChartStackBarDirective,
  KruiChartHorizontalStackBarDirective,
  KruiChartRangeBarDirective,
  KruiChartHorizontalRangeBarDirective,
];

@NgModule({
  declarations: [
    KruiChartTooltipComponent,
    KruiChartLegendComponent,
    KruiChartPrintComponent,
    ...exportableComponents,
    ...dataDirectives,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    FormsModule,
    AngularSvgIconModule,
  ],
  providers: [
    { provide: KRUI_CHART_PALETTE, useValue: KRUI_CHART_COLORS_LIST },
    { provide: KRUI_CHART_AXIS_PALETTE, useValue: KRUI_CHART_AXIS_COLORS_LIST },
    { provide: KRUI_CHART_GRID_PALETTE, useValue: KRUI_CHART_GRID_COLORS_LIST },
    { provide: KRUI_CHART_STACKED_SERVICE, useClass: KruiChartStackedService },
    { provide: KRUI_CHART_POPUP_SERVICE, useClass: KruiChartPopupService },
    { provide: KRUI_CHART_FORM_CREATE_SERVICE, useClass: KruiChartFormCreateService },
    { provide: KRUI_CHART_COLOR_PARSE_SERVICE, useClass: KruiChartColorParseService },
  ],
  exports: [
    ...exportableComponents,
    ...dataDirectives,
  ],
})
export class KruiChartComboModule {
}
