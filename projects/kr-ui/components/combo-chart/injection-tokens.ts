import { InjectionToken } from '@angular/core';
import { KruiChartAxisDirective } from './content-directives/axis.directive';
import { KruiChartDataLayerDirective } from './content-directives/data-layer.directive';
import { KruiChartGridDirective } from './content-directives/grid.directive';
import { KruiChartLayerDirective } from './content-directives/layer.directive';
import {
  KruiChartColorParseService,
  KruiChartFormCreateService,
  KruiChartPopupService,
  KruiChartStackedService
} from './services';
import { KruiChartSmartScrollDirective } from './wrapper-directives/smart-scroll.directive';
import { KruiChartToolbarDirective } from './wrapper-directives/toolbar.directive';
import { KruiChartTooltipProviderDirective } from './wrapper-directives/tooltip-provider.directive';
import { KruiChartWrapperDirective } from './wrapper-directives/wrapper.directive';
import { KruiChartLegendProvider, KruiChartPaletteProvider } from './models';

export const KRUI_CHART_WRAP_TOKEN = new InjectionToken<KruiChartWrapperDirective>('krui-chart-wrap-token');
export const KRUI_CHART_TOOLTIP_PROVIDER_TOKEN = new InjectionToken<KruiChartTooltipProviderDirective>('krui-chart-tooltip-provider-token');
export const KRUI_CHART_LAYER_TOKEN = new InjectionToken<KruiChartLayerDirective>('krui-chart-layer-token');
export const KRUI_CHART_AXIS_TOKEN = new InjectionToken<KruiChartAxisDirective>('krui-chart-axis-token');
export const KRUI_CHART_GRID_TOKEN = new InjectionToken<KruiChartGridDirective>('krui-chart-grid-token');
export const KRUI_CHART_DATA_LAYER_TOKEN = new InjectionToken<KruiChartDataLayerDirective<any, any>>('krui-chart-data-layer-token');
export const KRUI_CHART_SMART_SCROLL_TOKEN = new InjectionToken<KruiChartSmartScrollDirective>('krui-chart-smart-scroll-token');
export const KRUI_CHART_TOOLBAR_TOKEN = new InjectionToken<KruiChartToolbarDirective>('krui-chart-toolbar-token');
export const KRUI_CHART_PALETTE_PROVIDER_TOKEN = new InjectionToken<KruiChartPaletteProvider>('krui-chart-palette-provider-token');
export const KRUI_CHART_LEGEND_PROVIDER_TOKEN = new InjectionToken<KruiChartLegendProvider>('krui-chart-legend-provider-token');

export const KRUI_CHART_PALETTE = new InjectionToken<string[]>('kruiChartPallete');
export const KRUI_CHART_AXIS_PALETTE = new InjectionToken<string[]>('kruiChartAxisPallete');
export const KRUI_CHART_GRID_PALETTE = new InjectionToken<string[]>('kruiChartGridPallete');

export const KRUI_CHART_STACKED_SERVICE = new InjectionToken<KruiChartStackedService>('krui-chart-stacked-service-token');
export const KRUI_CHART_POPUP_SERVICE = new InjectionToken<KruiChartPopupService>('krui-chart-popup-service-token');
export const KRUI_CHART_FORM_CREATE_SERVICE = new InjectionToken<KruiChartFormCreateService>('krui-chart-form-create-service-token');
export const KRUI_CHART_COLOR_PARSE_SERVICE = new InjectionToken<KruiChartColorParseService>('krui-chart-color-parse-service-token');
