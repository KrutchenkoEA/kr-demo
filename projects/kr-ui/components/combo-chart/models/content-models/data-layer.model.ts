import { KruiChartWorkgroundPadding } from '../chart-models/chart.model';

export interface ITluiChartDataLayerValueShowerInputs {
  showValues: boolean;
  valuesColor: string;
  valuesFontSizePx: number;
  valuesFontFamily: string;
  captions: (string | number | Date)[];
  engUnits: string[];
}

export interface ITluiChartDataLayerColorInputs {
  color: string | null | undefined;
  colors: string[] | null | undefined;
}

export interface ITluiChartDataLayerAnimationInputs {
  durationAnimation: number;
  durationToggleAnimation: number;
  animation: boolean;
}

export interface ITluiChartDataLayerDrawConfigInputs {
  reRangeThenLegendClick: boolean;
  reRangeThenDataChange: boolean;
  workgroundPadding: KruiChartWorkgroundPadding;
  useDefaultCheck: boolean;
}

export interface KruiChartDataLayerCommonInputs extends ITluiChartDataLayerValueShowerInputs,
  ITluiChartDataLayerColorInputs, ITluiChartDataLayerAnimationInputs, ITluiChartDataLayerDrawConfigInputs {
}
