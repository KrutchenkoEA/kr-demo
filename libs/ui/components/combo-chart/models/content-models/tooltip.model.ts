export interface IKruiChartTooltipFormatter {
  tooltipShowMilliseconds: boolean;
  tooltipDateValuePipeFormat: string;
  tooltipTitleDateValuePipeFormat: string;
  tooltipNumberValuePipeFormat: string;
  tooltipTitleNumberValuePipeFormat: string;
}

export interface IKruiChartTooltipBase extends IKruiChartTooltipFormatter {
  data: KruiChartTooltipDataLayer[];
  engUnits: string;
  delimiterSymbol: string;
}

export type KruiChartTooltipDataLayer = {
  rows: KruiChartTooltipDataRow[]
  title: string;
  value: string | number | Date;
  hidden: boolean;
  index: number;
};

export interface KruiChartTooltipDataRow {
  index: number;
  value: number | null;
  valueTitle: number | string | Date;
  title: string;
  color: string;
  hidden: boolean;
  engUnits: string;
  type: KruiChartTooltipDataRowType;
}

export type KruiChartTooltipDataRowType =
  'line'
  | 'area'
  | 'gradientArea'
  | 'bar'
  | 'stackBar'
  | 'fullStackBar'
  | string;
