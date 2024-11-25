import * as d3 from 'd3';

export interface KruiChartSmartScrollInputs {
  data: [number | Date | string, number][];
  moveScroll: d3.D3ZoomEvent<any, any>;
}
