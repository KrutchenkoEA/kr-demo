import { KruiChartAxisInputs, KruiChartAxisPosition, KruiChartAxisType } from './axis.model';

export abstract class KruiChartAxisProvider implements KruiChartAxisInputs {
  abstract type: KruiChartAxisType;
  abstract position: KruiChartAxisPosition;
  abstract min: number;
  abstract max: number;
  abstract ticks: number;
  abstract fontSize: number;
  abstract fontFamily: string;
  abstract fontColor: string;
  abstract name: string;
  abstract primary: boolean;
  abstract color: string;
  abstract drawAxisLabel: boolean;
  abstract drawAxisLabelLine: boolean;
}
