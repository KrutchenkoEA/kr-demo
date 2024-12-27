import { KruiChartAxisInputs } from '../../models';
import { KRUI_CHART_AXIS_COLOR, KRUI_CHART_TEXT_COLOR } from '../export/constants';

export const axisXDefaultInputs: Partial<KruiChartAxisInputs> = {
  type: 'time',
  position: 'bottom',
  // min: number,
  // max: number,
  ticks: 5,
  fontSize: 12,
  fontFamily: 'Tahoma',
  fontColor: KRUI_CHART_TEXT_COLOR,
  name: 'x',
  primary: true,
  color: KRUI_CHART_AXIS_COLOR,
  drawAxisLabel: true,
  drawAxisLabelLine: true
};

export const axisYDefaultInputs = {
  type: 'number',
  position: 'left',
  // min: number,
  // max: number,
  ticks: 5,
  fontSize: 12,
  fontFamily: 'Tahoma',
  fontColor: KRUI_CHART_TEXT_COLOR,
  name: 'y',
  primary: false,
  color: KRUI_CHART_AXIS_COLOR,
  drawAxisLabel: true,
  drawAxisLabelLine: true
};

export const getKruiAxisXDefaultInputs = (): Partial<KruiChartAxisInputs> => {
  return JSON.parse(JSON.stringify(axisXDefaultInputs));
};

export const getKruiAxisYDefaultInputs = (): Partial<KruiChartAxisInputs> => {
  return JSON.parse(JSON.stringify(axisYDefaultInputs));
};
