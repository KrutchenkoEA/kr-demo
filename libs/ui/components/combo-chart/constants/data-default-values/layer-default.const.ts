import { KruiChartLayerInputs } from '../../models';
import { KRUI_CHART_TOOLTIP_COLOR } from '../export/constants';

export const layerDefaultInputs: Partial<KruiChartLayerInputs> = {
  tooltipEnable: true,
  tooltipColor: KRUI_CHART_TOOLTIP_COLOR,
  zoomPrimaryEnable: true,
  zoomSecondaryEnable: false,
  layerTitle: '',
};

export const getKruiLayerDefaultInputs = (): Partial<KruiChartLayerInputs> => {
  return JSON.parse(JSON.stringify(layerDefaultInputs));
};
