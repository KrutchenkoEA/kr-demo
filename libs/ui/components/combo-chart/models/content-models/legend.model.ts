import { EventEmitter, QueryList } from '@angular/core';
import { KruiChartDataLayerDirective } from '../../content-directives/data-layer.directive';
import { KruiChartAxisProvider } from './axis.provider.class';
import { KruiChartGridProvider } from './grid.provider.class';

export interface KruiChartLegendGroup {
  inactive: boolean;
  layerId: string,
  layerTitle: string,
  dataLayer: { layer: KruiChartDataLayerDirective<any, any>, data: KruiChartLegendLabelData[] | null }[]
  axis: QueryList<KruiChartAxisProvider>,
  grid: QueryList<KruiChartGridProvider>,
}

export interface KruiChartLegendLabelData {
  title: string;
  color: string;
  inactive: boolean;
  type: KruiChartLegendLabelDataType;
  disabled: boolean;
  hovered: boolean;
}

export type KruiChartLegendType = 'custom' | 'default' | 'simple-style'

export type KruiChartLegendLabelDataType = 'single' | 'stack' | 'combo';

export interface KruiChartLegendInputs {
  legend: boolean;
  legendPosition: 'top' | 'bottom';
  legendLayer: boolean;
  legendAxis: boolean;
  legendTrend: boolean;
  legendHoverEffect: boolean;
  legendType: KruiChartLegendType;
}
