import { KruiChartScale } from '../chart-models/base.model';
import { KruiChartAxisType } from '../content-models/axis.model';
import { IKruiChartDataLayerBarBaseInputs } from './bar.model';

/** Отсортированные значения [x,[y-start, y-end], enum-значение] */
export type KruiChartRangeBarData = [number, [number, number], any];

/** Отсортированные значения [x,[y-start, y-end], enum-значение] */
export type KruiChartRangeBarStackedData = [number, [number, number][], any];

/** Входные значения [x,[y-start, y-end], enum-значение?], если enum - то в x передаем порядковый номер */
export type KruiChartRangeBarInputData =
  [number | string | Date, [number, number], any]
  | [number | string | Date, [number, number]];

/** Входные значения [x,[y-start, y-end][], enum-значение?], если enum - то в x передаем порядковый номер */
export type KruiChartRangeBarStackedInputData =
  [number | string | Date, [number, number][], any]
  | [number | string | Date, [number, number][]];


export interface KruiChartRangeBarConfig {
  type: KruiChartAxisType;
  activeCount: number;
  groupSize: number;
  stackWidth: number;
  stackWidthCalculated: number;
  stackPadding: number;
  barWidth: number;
  barWidthCalculated: number;
  barPadding: number;
  primaryAxis: KruiChartScale;
  secondaryAxis: KruiChartScale;
}


export interface KruiChartDataLayerRangeBarInputs extends IKruiChartDataLayerBarBaseInputs {
  barBorderColors: string[];
  stackWidthPercent: number;
  barWidthPercent: number;
  barsOpacity: number[];
  data?: KruiChartRangeBarInputData[][];
  dataStack?: KruiChartRangeBarStackedInputData[];
}
