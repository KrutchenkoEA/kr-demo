import { KruiChartWorkgroundPadding } from '../chart-models/chart.model';

export interface IKruiChartDataLayerValueShowerInputs {
  showValues: boolean;
  valuesColor: string;
  valuesFontSizePx: number;
  valuesFontFamily: string;
  captions: (string | number | Date)[];
  engUnits: string[];
}

export interface IKruiChartDataLayerColorInputs {
  color: string | null | undefined;
  colors: string[] | null | undefined;
}

export interface IKruiChartDataLayerAnimationInputs {
  durationAnimation: number;
  durationToggleAnimation: number;
  animation: boolean;
}

export interface IKruiChartDataLayerDrawConfigInputs {
  reRangeThenLegendClick: boolean;
  reRangeThenDataChange: boolean;
  workgroundPadding: KruiChartWorkgroundPadding;
  useDefaultCheck: boolean;
  withMinMaxCoef: boolean;
}

export interface KruiChartDataLayerCommonInputs extends IKruiChartDataLayerValueShowerInputs,
  IKruiChartDataLayerColorInputs, IKruiChartDataLayerAnimationInputs, IKruiChartDataLayerDrawConfigInputs {
}
