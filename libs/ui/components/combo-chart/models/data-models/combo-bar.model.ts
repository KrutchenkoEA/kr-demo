import { KruiChartScale } from '../chart-models/base.model';
import { KruiChartAxisType } from '../content-models/axis.model';
import { KruiChartBarInputData, TluiChartDataLayerBarBaseInputs } from './bar.model';
import { KruiChartStackedBarInputData } from './stack-bar.model';


export interface KruiChartComboBarConfig {
  type: KruiChartAxisType;
  activeCount: number;
  groupSize: number;
  stackWidth: number;
  stackWidthCalculated: number;
  stackPadding: number;
  barWidth: number;
  barWidthCalculated: number;
  barPadding: number;
  primaryAxis: KruiChartScale;
  secondaryAxis: KruiChartScale;
}


export interface KruiChartDataLayerComboBarInputs extends TluiChartDataLayerBarBaseInputs {
  barBorderColors: string[];
  stackWidthPercent: number;
  barWidthPercent: number;
  barsOpacity: number[];
  data?: KruiChartBarInputData[][];
  dataStack?: KruiChartStackedBarInputData[];
}

