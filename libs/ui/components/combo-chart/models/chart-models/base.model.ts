import * as d3 from 'd3';
import { KruiChartAxisData } from '../content-models/axis.model';

export type KruiChartScale =
  | d3.ScaleLinear<any, number>
  | d3.ScaleTime<any, number>
  | d3.ScaleBand<any>

export type KruiChartScaleLinear =
  | d3.ScaleLinear<any, number>
  | d3.ScaleTime<any, number>

export type KruiChartRenderTarget = d3.Selection<SVGGElement, unknown, null, unknown>;

export interface KruiChartLayerDrawContext {
  canvasWidth: number;
  canvasHeight: number;
  primaryAxis: KruiChartAxisData;
  secondaryAxis: KruiChartAxisData;
}
