import { KruiChartGridInputs } from './grid.model';

export abstract class KruiChartGridProvider implements KruiChartGridInputs {
  abstract axis: string;
  abstract color: string;
  abstract drawGrid: boolean;
}
