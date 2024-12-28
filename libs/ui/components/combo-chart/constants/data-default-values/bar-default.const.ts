import {
  KruiChartDataLayerBarInputs,
  KruiChartDataLayerComboBarInputs,
  KruiChartDataLayerCommonInputs,
  KruiChartDataLayerStackBarInputs,
} from '../../models';
import { KRUI_CHART_SMART_SCROLL_COLOR, KRUI_CHART_TEXT_COLOR } from '../export/constants';

export const barDefaultCommon: Partial<KruiChartDataLayerCommonInputs> = {
  showValues: false,
  valuesColor: KRUI_CHART_TEXT_COLOR,
  valuesFontSizePx: 12,
  valuesFontFamily: 'Tahoma',
  captions: [''],
  engUnits: [''],
  animation: true,
  durationAnimation: 2000,
  durationToggleAnimation: 500,
  reRangeThenLegendClick: true,
  reRangeThenDataChange: true,
  workgroundPadding: { top: 5, right: 0, left: 0, bottom: 0 },
};

const barDefaultCommonBar: Partial<KruiChartDataLayerCommonInputs> = {
  workgroundPadding: { top: 5, right: 0, left: 0, bottom: 0 },
};

const barDefaultCommonHorizontal: Partial<KruiChartDataLayerCommonInputs> = {
  workgroundPadding: { top: 0, right: 5, left: 0, bottom: 0 },
};
const barDefaultCommonCombo: Partial<KruiChartDataLayerCommonInputs> = {
  workgroundPadding: { top: 5, right: 10, left: 10, bottom: 0 },
};
const barDefaultCommonHorizontalCombo: Partial<KruiChartDataLayerCommonInputs> = {
  workgroundPadding: { top: 5, right: 5, left: 2, bottom: 5 },
};

export const barDefaultInputs: Partial<KruiChartDataLayerBarInputs> = {
  color: KRUI_CHART_SMART_SCROLL_COLOR,
  barBorderColor: KRUI_CHART_SMART_SCROLL_COLOR,
  barType: 'solidColor',
  barOpacity: 1,
  barRadius: 0,
  barBorder: false,
  fixedBarWidth: false,
  showEnumValues: false,
  valuePosition: 'center',
  animationType: 'growth',
  tooltipHoverEffect: false,
  tooltipHoverColor: KRUI_CHART_SMART_SCROLL_COLOR,
  enablePreviousData: true,
  startInNull: true,
  barWidthPercent: 80,
};

export const barComboDefaultInputs: Partial<KruiChartDataLayerComboBarInputs> = {
  barType: 'solidColor',
  barOpacity: 1,
  barsOpacity: [],
  barRadius: 0,
  barBorder: false,
  fixedBarWidth: false,
  showEnumValues: false,
  valuePosition: 'center',
  animationType: 'growth',
  tooltipHoverEffect: false,
  tooltipHoverColor: KRUI_CHART_SMART_SCROLL_COLOR,
  enablePreviousData: true,
  startInNull: true,
  barWidthPercent: 80,
  stackWidthPercent: 80,
};

export const barStackDefaultInputs: Partial<KruiChartDataLayerStackBarInputs> = {
  barType: 'solidColor',
  barOpacity: 1,
  barsOpacity: [],
  barRadius: 0,
  barBorder: false,
  fixedBarWidth: false,
  showEnumValues: false,
  showStackValues: false,
  valuePosition: 'center',
  animationType: 'growth',
  tooltipHoverEffect: false,
  tooltipHoverColor: KRUI_CHART_SMART_SCROLL_COLOR,
  enablePreviousData: true,
  startInNull: true,
  barWidthPercent: 80,
  stackType: 'stackBar',
};

export const getKruiBarDefaultCommon = (): Partial<KruiChartDataLayerCommonInputs> => {
  barDefaultCommon.workgroundPadding = barDefaultCommonBar.workgroundPadding;
  return JSON.parse(JSON.stringify(barDefaultCommon));
};
export const getTluiBarDefaultHorizontalCommon = (): Partial<KruiChartDataLayerCommonInputs> => {
  barDefaultCommon.workgroundPadding = barDefaultCommonHorizontal.workgroundPadding;
  return JSON.parse(JSON.stringify(barDefaultCommon));
};
export const getKruiBarDefaultComboCommon = (): Partial<KruiChartDataLayerCommonInputs> => {
  barDefaultCommon.workgroundPadding = barDefaultCommonCombo.workgroundPadding;
  return JSON.parse(JSON.stringify(barDefaultCommon));
};
export const getTluiBarDefaultHorizontalComboCommon = (): Partial<KruiChartDataLayerCommonInputs> => {
  barDefaultCommon.workgroundPadding = barDefaultCommonHorizontalCombo.workgroundPadding;
  return JSON.parse(JSON.stringify(barDefaultCommon));
};

export const getKruiBarDefaultInputs = (): Partial<KruiChartDataLayerBarInputs> =>
  JSON.parse(JSON.stringify(barDefaultInputs));

export const getKruiBarComboDefaultInputs = (): Partial<KruiChartDataLayerComboBarInputs> =>
  JSON.parse(JSON.stringify(barComboDefaultInputs));

export const getKruiBarStackDefaultInputs = (): Partial<KruiChartDataLayerStackBarInputs> =>
  JSON.parse(JSON.stringify(barStackDefaultInputs));
