import { KruiChartScale } from '../chart-models/base.model';
import { KruiChartAxisType } from '../content-models/axis.model';
import { KruiChartBarInputData, IKruiChartDataLayerBarBaseInputs } from './bar.model';

/** Отсортированные значения [x,y, enum-значение] */
export type KruiChartStackedBarData = [number, number[], any]; //index, dataArr, enum-title
/** Входные значения [x,[y], enum-значение?], если enum - то в x передаем порядковый номер */
export type KruiChartStackedBarInputData = [number | string | Date, number[], any] | [number | string | Date, number[]];


export type KruiChartStackedBarMap = {
  initial: number[];
  normalized: number[];
  calculated: [number, number, number][];
  calculatedNormalized: [number, number, number][];
  delta: number,
  isSetted: boolean,
  enum: (number | string)[],
}

export interface KruiChartStackBarConfig {
  type: KruiChartAxisType;
  activeCount: number;
  groupSize: number;
  barWidth: number;
  barWidthCalculated: number;
  barPadding: number;
  primaryAxis: KruiChartScale;
  secondaryAxis: KruiChartScale;
}

export interface KruiChartDataLayerStackBarInputs extends IKruiChartDataLayerBarBaseInputs {
  stackType: KruiChartStackType;
  barBorderColors: string[];
  barWidthPercent: number;
  barsOpacity: number[];
  showStackValues: boolean;
  data?: KruiChartBarInputData[][];
  dataStack?: KruiChartStackedBarInputData[];
}


export type KruiChartStackType = 'stackBar' | 'fullStackBar' | 'fullStackBarIndependent'
