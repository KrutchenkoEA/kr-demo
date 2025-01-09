import { KruiChartScale } from '../chart-models/base.model';
import { KruiChartAxisType } from '../content-models/axis.model';

/** Отсортированные значения [x,y, enum-значение] */
export type KruiChartBarData = [number, number, any];
/** Входные значения [x,y, enum-значение?], если enum - то в x передаем порядковый номер */
export type KruiChartBarInputData = [number | string | Date, number, any] | [number | string | Date, number];


export interface KruiChartBarConfig {
  type: KruiChartAxisType;
  barWidth: number;
  barWidthCalculated: number;
  barPadding: number;
  primaryAxis: KruiChartScale;
  secondaryAxis: KruiChartScale;
}

export interface IKruiChartDataLayerBarBaseInputs {
  barType: KruiChartBarColorType;
  barOpacity: number;
  barRadius: number;
  barBorder: boolean;
  fixedBarWidth: boolean;
  showEnumValues: boolean;
  valuePosition: KruiChartBarTextPosition;
  animationType: KruiChartBarAnimationType;
  tooltipHoverEffect: boolean;
  tooltipHoverColor: string;
  enablePreviousData: boolean;
  startInNull: boolean;
}

export interface KruiChartDataLayerBarInputs extends IKruiChartDataLayerBarBaseInputs {
  barBorderColor: string;
  barWidthPercent: number;
  color?: string;
  data?: KruiChartBarInputData[];
}


export type KruiChartBarAnimationType = 'growth' | 'none'
export type KruiChartBarColorType = 'gradient' | 'solidColor'
export type KruiChartBarTextPosition = 'top' | 'center' | 'bottom' | 'over'
