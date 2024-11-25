import { KruiChartGridInputs } from '../../models';
import { KRUI_CHART_GRID_COLOR } from '../export/constants';

export const gridXDefaultInputs: Partial<KruiChartGridInputs> = {
  axis: 'x',
  color: KRUI_CHART_GRID_COLOR,
  drawGrid: true
};

export const gridYDefaultInputs: Partial<KruiChartGridInputs> = {
  axis: 'y',
  color: KRUI_CHART_GRID_COLOR,
  drawGrid: true
};

export const getKruiGridXDefaultInputs = (): Partial<KruiChartGridInputs> => {
  return JSON.parse(JSON.stringify(gridXDefaultInputs));
};

export const getKruiGridYDefaultInputs = (): Partial<KruiChartGridInputs> => {
  return JSON.parse(JSON.stringify(gridYDefaultInputs));
};
