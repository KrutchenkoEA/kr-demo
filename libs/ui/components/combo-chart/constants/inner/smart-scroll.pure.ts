import * as d3 from 'd3';
import { notNul } from './pure';

export const line = (
  xScale: d3.ScaleLinear<number, number> | d3.ScaleTime<number, number>,
  yScale: d3.ScaleLinear<number, number>,
): d3.Line<[number, number]> =>
  d3
    .line()
    .x((d: [number | Date, number]) => notNul(xScale(d[0])))
    .y(([, y]) => notNul(yScale(y)));

export const scaleLinear = (data: number[], range: number[]): d3.ScaleLinear<number, number> =>
  d3.scaleLinear().domain(extent(data)).range(range);

export const scaleTime = (data: Date[], range: number[]): d3.ScaleTime<number, number> =>
  d3.scaleUtc().domain(extent(data)).range(range);

const extent = (data: (Date | number)[]) => {
  const [min, max] = d3.extent(data);
  return [notNul(min), notNul(max)];
};

export const getRdmData = (): [number, number][] => {
  let value: [number, number][] = [];
  const rdmNum = Math.random() * 50;
  for (let i = 0; i < rdmNum; i++) {
    value.push([i, Math.random() * 100]);
  }
  return value;
};
