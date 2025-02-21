import { IKruiChartTooltipFormatter } from '../content-models/tooltip.model';

export type KruiChartTooltipType = 'dataPoint' | 'fullLine';
export type KruiChartTooltipMarkerType = 'line' | 'horizontal-line' | 'smallCross' | 'fullscreenCross' | 'none';

export abstract class KruiChartTooltipModel implements KruiChartTooltipProviderInputs {
  abstract tooltip: boolean;
  abstract tooltipComponentType: 'custom' | 'default';
  abstract tooltipComponent: any;
  abstract tooltipType: KruiChartTooltipType;
  abstract tooltipMarkerType: KruiChartTooltipMarkerType;
  abstract tooltipMarkerCrossSize: number;
  abstract tooltipColor: string;
  abstract tooltipWidth: number;
  abstract chartOrientation: 'vertical' | 'horizontal';
  abstract tooltipShowMilliseconds: boolean;
  abstract tooltipDateValuePipeFormat: string;
  abstract tooltipTitleDateValuePipeFormat: string;
  abstract tooltipNumberValuePipeFormat: string;
  abstract tooltipTitleNumberValuePipeFormat: string;
}

export interface KruiChartTooltipProviderInputs extends IKruiChartTooltipFormatter {
  tooltip: boolean;
  tooltipComponentType: 'custom' | 'default';
  tooltipComponent: any;
  tooltipType: KruiChartTooltipType;
  tooltipMarkerType: KruiChartTooltipMarkerType;
  tooltipMarkerCrossSize: number;
  tooltipColor: string;
  tooltipWidth: number;
  chartOrientation: 'vertical' | 'horizontal';
  tooltipShowMilliseconds: boolean;
  tooltipDateValuePipeFormat: string;
  tooltipTitleDateValuePipeFormat: string;
  tooltipNumberValuePipeFormat: string;
  tooltipTitleNumberValuePipeFormat: string;
}



