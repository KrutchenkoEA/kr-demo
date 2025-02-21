import {
  KruiChartLegendInputs,
  KruiChartToolbarInputs,
  KruiChartTooltipProviderInputs,
  KruiChartWrapperInputs,
} from '../../models';
import {
  KRUI_CHART_AXIS_COLOR,
  KRUI_CHART_BG_COLOR,
  KRUI_CHART_SMART_SCROLL_COLOR,
  KRUI_CHART_TOOLTIP_COLOR,
} from '../export/constants';

export const toolbarDefaultInputs: Partial<KruiChartToolbarInputs> = {
  toolbar: true,
  toolbarPosition: 'top',
  toolbarJustifyContent: 'flex-end',
};
export const tooltipDefaultInputs: Partial<KruiChartTooltipProviderInputs> = {
  tooltip: true,
  tooltipComponentType: 'default',
  tooltipType: 'fullLine',
  tooltipMarkerType: 'line',
  tooltipMarkerCrossSize: 10,
  tooltipColor: KRUI_CHART_TOOLTIP_COLOR,
  tooltipWidth: 1,
  chartOrientation: 'vertical',
  tooltipShowMilliseconds: false,
  tooltipDateValuePipeFormat: 'dd.MM.yyyy HH:mm',
  tooltipTitleDateValuePipeFormat: 'dd.MM.yyyy HH:mm:ss',
  tooltipNumberValuePipeFormat: '1.0-0',
  tooltipTitleNumberValuePipeFormat: '1.0-0',
};
export const wrapperDefaultInputs: Partial<KruiChartWrapperInputs> = {
  marginLeft: 12,
  marginRight: 12,
  marginBottom: 12,
  marginTop: 12,
  bgColor: KRUI_CHART_BG_COLOR,
  borderColor: KRUI_CHART_AXIS_COLOR,
  borderRadius: 4,
  smartScrollEnable: false,
  smartScrollHeight: 42,
  smartScrollColor: KRUI_CHART_SMART_SCROLL_COLOR,
  language: 'ru',
  formatFunc: null,
  setDefIfContainerSizeInvalid: true,
  customResize: null,
  // height: 800,
  // width: 600,
  isFixedSize: false,
};
export const legendDefaultInputs: Partial<KruiChartLegendInputs> = {
  legend: true,
  legendPosition: 'bottom',
  legendLayer: false,
  legendAxis: false,
  legendTrend: true,
  legendHoverEffect: true,
  legendType: 'simple-style',
};

export const getKruiToolbarDefaultInputs = (): Partial<KruiChartToolbarInputs> => {
  return JSON.parse(JSON.stringify(toolbarDefaultInputs));
};
export const getKruiTooltipDefaultInputs = (): Partial<KruiChartTooltipProviderInputs> => {
  return JSON.parse(JSON.stringify(tooltipDefaultInputs));
};
export const getKruiWrapperDefaultInputs = (): Partial<KruiChartWrapperInputs> => {
  return JSON.parse(JSON.stringify(wrapperDefaultInputs));
};
export const getKruiLegendDefaultInputs = (): Partial<KruiChartLegendInputs> => {
  return JSON.parse(JSON.stringify(legendDefaultInputs));
};
