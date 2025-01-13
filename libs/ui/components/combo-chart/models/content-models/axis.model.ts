import * as d3Axis from 'd3-axis';
import { KruiChartScale } from '../chart-models/base.model';

export type KruiChartAxisPosition = 'left' | 'top' | 'right' | 'bottom';
export type KruiChartAxisType = 'number' | 'time' | 'enum';

export interface KruiChartAxisData {
  name: string;
  type: KruiChartAxisType;
  position: KruiChartAxisPosition;
  d3Scale: KruiChartScale;
  d3Axis: KruiChartAxis;
}

export type KruiChartAxis = d3Axis.Axis<any>;


export interface KruiChartAxisInputs {
  type: KruiChartAxisType;
  position: KruiChartAxisPosition;
  min: number;
  max: number;
  ticks: number;
  fontSize: number;
  fontFamily: string;
  fontColor: string;
  name: string;
  primary: boolean;
  color: string;
  drawAxisLabel: boolean;
  drawAxisLabelLine: boolean;
  drawAxis: boolean;
}
