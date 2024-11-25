import { IKruiChartDataLayerLineInputs, KruiChartDataLayerCommonInputs } from '../../models';
import { KRUI_CHART_SMART_SCROLL_COLOR } from '../export/constants';

export const lineDefaultCommon: Partial<KruiChartDataLayerCommonInputs> = {
  showValues: false,
  valuesFontSizePx: 12,
  valuesFontFamily: 'Tahoma',
  captions: [''],
  engUnits: [''],
  animation: true,
  durationAnimation: 2000,
  durationToggleAnimation: 500,
  reRangeThenLegendClick: true,
  reRangeThenDataChange: true,
  workgroundPadding: { top: 5, right: 10, left: 10, bottom: 5 }
};

export const lineDefaultInputs: Partial<IKruiChartDataLayerLineInputs> = {
  color: KRUI_CHART_SMART_SCROLL_COLOR,
  interpolateEnable: false,
  extendStep: 10,
  lineType: 'line',
  lineDynamics: 'curveLinear',
  lineOpacity: 1,
  lineWidth: 2,
  dataPointType: 'partial',
  dataPointMarker: 'dataPoint',
  breakPointType: 'auto',
  breakPoint: true,
  breakPointSize: 4,
  breakPointStrokeSize: 0,
  breakPointLimit: 50,
  breakPointMarker: 'symbolX',
  endPoint: true,
  endPointSize: 2,
  endPointStrokeSize: 7
};

export const getLineDefaultCommon = (): Partial<KruiChartDataLayerCommonInputs> => JSON.parse(JSON.stringify(lineDefaultCommon));
export const getLineDefaultInputs = (): Partial<IKruiChartDataLayerLineInputs> => JSON.parse(JSON.stringify(lineDefaultInputs));

