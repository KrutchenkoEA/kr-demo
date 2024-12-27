import { QueryList } from '@angular/core';
import * as d3 from 'd3';
import { KruiChartDataLayerDirective } from '../../content-directives/data-layer.directive';
import { KruiChartLayerDrawContext, KruiChartScale } from '../chart-models/base.model';
import { KruiChartGridProvider } from './grid.provider.class';
import { KruiChartAxisProvider } from './axis.provider.class';
import { KruiChartTooltipType } from '../wrapper-models/tooltip-provider.model';
import { KruiChartTooltipDataLayer } from './tooltip.model';
import { ITluiChartLayerTooltipInputs, ITluiChartLayerZoomInputs } from './layer.model';
import { KruiChartAxis } from './axis.model';
import { KruiChartLegendGroup } from './legend.model';

export abstract class KruiChartLayerDataProvider {
  static nextId: number;
  abstract layerId: string;
  abstract layerTitle: string;
  abstract layerLabels: KruiChartLegendGroup | null;
  abstract _layerSelection: d3.Selection<SVGGElement, unknown, null, undefined>;
  abstract _axis: Map<string, KruiChartAxis>;
  abstract _scales: Map<string, KruiChartScale>;

  abstract axisList: QueryList<KruiChartAxisProvider>;

  abstract gridList: QueryList<KruiChartGridProvider>;

  abstract dataLayerList: QueryList<KruiChartDataLayerDirective<any, any>>;

  abstract getLegendLabels(): KruiChartLegendGroup

  abstract createLegendLabels(): KruiChartLegendGroup

  abstract getAxis(): QueryList<KruiChartAxisProvider>

  abstract getContext(dataLayer: KruiChartDataLayerDirective<any, any>): KruiChartLayerDrawContext | null

}

export abstract class KruiChartLayerRenderer {
  abstract draw(): void;

  abstract createScales(): void;

  abstract createAxis(): void;

  abstract drawLayer(): void;

  abstract drawAxis(): void;

  abstract drawGrid(): void;

  abstract drawData(): void;

  abstract reDraw(event: d3.D3ZoomEvent<any, any>, isResize: boolean): void
}

export abstract class KruiChartLayerStateManager {
  abstract toggleAll(hidden: boolean): void;

  abstract renderOpacity(active: boolean): void;
}

export abstract class KruiChartLayerTooltip implements ITluiChartLayerTooltipInputs {
  abstract tooltipEnable: boolean;
  abstract tooltipColor: string;

  abstract getTooltipData(event: [number, number], tooltipType: KruiChartTooltipType, index: number): {
    tooltip: KruiChartTooltipDataLayer,
    pos: number
  } | null

  abstract getTooltipDataNumberAndDate(
    event: number,
    tooltipType: KruiChartTooltipType,
    primaryAxis: KruiChartAxisProvider,
    index: number
  ): {
    tooltip: KruiChartTooltipDataLayer,
    pos: number
  } | null

  abstract getTooltipDataEnum(
    event: number,
    tooltipType: KruiChartTooltipType,
    primaryAxis: KruiChartAxisProvider,
    index: number
  ): {
    tooltip: KruiChartTooltipDataLayer,
    pos: number
  } | null
}

export abstract class KruiChartLayerZoom implements ITluiChartLayerZoomInputs {
  abstract zoomPrimaryEnable: boolean;
  abstract zoomSecondaryEnable: boolean;

  abstract _zoomEvent: d3.D3ZoomEvent<any, any>;

  abstract zoom(event: d3.D3ZoomEvent<any, any>, isResize: boolean): void

  abstract zoomAxis(event: d3.D3ZoomEvent<any, any>, isResize: boolean): void

  abstract zoomLayer(event: d3.D3ZoomEvent<any, any>, isResize: boolean): void
}
