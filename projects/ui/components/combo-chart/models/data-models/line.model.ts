export type KruiChartLineDynamics =
  | 'curveLinear'
  | 'curveLinearClosed'
  | 'curveBasis'
  | 'curveBasisOpen'
  | 'curveBasisClosed'
  | 'curveMonotoneX'
  | 'curveMonotoneY'
  | 'curveNatural'
  | 'curveStep'
  | 'curveStepAfter'
  | 'curveStepBefore'

export type KruiChartLineDataPointType =
//custom
  'symbolX'
  | 'symbolXTransparentBg'
  | 'symbolArrow'
  //d3
  | 'symbolCircle'
  | 'symbolCross'
  | 'symbolDiamond'
  | 'symbolSquare'
  | 'symbolStar'
  | 'symbolTriangle'
  | 'symbolWye'
  | 'none';


export type KruiChartLineDataPointConfigType =
  'dataPoint'
  | 'dataFillPoint'
  | 'dataPointReWrite'
  | 'dataFillPointReWrite'
  | 'breakPoint'
  | 'breakPointTransparentBg'
  | 'reWritePoint'


/** Отсортированные значения [x,y, метка точки, enum-значение] */
export type KruiChartLineData = [number, number, string | null, string | null];


/** Входные значения [x,y, метка точки?, enum-значение?], если enum - то в x передаем порядковый номер */
export type KruiChartLineInputData =
  TluiChartLineDataSimple
  | TluiChartLineDataIcon
  | TluiChartLineDataIconEnum

/** Входные значения [x,y] */
export type TluiChartLineDataSimple = [number | string | Date, number];
/** Входные значения [x,y, метка точки?] */
export type TluiChartLineDataIcon = [number | string | Date, number, string | null];
/** Входные значения [x,y, метка точки?, enum-значение?], если enum - то в x передаем порядковый номер */
export type TluiChartLineDataIconEnum = [number | string | Date, number, string | null, string];

export interface KruiChartPointDataOptions {
  pointMarkers: KruiChartLineDataPointType[];
  pointVisible: boolean;
  pointColor: 'auto' | 'wrapBg' | string | null;
  pointStrokeColor: 'auto' | 'wrapBg' | string | null;
  pointSize: number;
  pointStrokeSize: number;
  pointLimit: number;
}

export interface IKruiChartDataLayerLineInputs {
  interpolateEnable: boolean;
  extendStep: number;
  lineType: 'line' | 'area';
  lineDynamics: KruiChartLineDynamics;
  lineOpacity: number;
  lineWidth: number;
  dataPointType: 'all' | 'partial';
  dataPointColor: string | null;
  dataPointStrokeColor: string | null;
  dataPointMarker: KruiChartLineDataPointConfigType;
  breakPointType: 'auto' | 'config';
  breakPoint: boolean;
  breakPointColor: string;
  breakPointStrokeColor: string;
  breakPointSize: number;
  breakPointStrokeSize: number;
  breakPointLimit: number;
  breakPointMarker: KruiChartLineDataPointType;
  endPoint: boolean;
  endPointSize: number;
  endPointStrokeSize: number;
  color?: string;
  data?: KruiChartLineInputData[];
}
