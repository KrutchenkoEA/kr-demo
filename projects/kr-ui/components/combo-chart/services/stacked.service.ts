import { Injectable } from '@angular/core';
import { KruiChartStackedBarData, KruiChartStackedBarMap, KruiChartStackType } from '../models';
import { adaptiveFixed } from '../constants/inner/function';

@Injectable()
export class KruiChartStackedService {

  public getStackDataFromArray<U>(data: [number, U, any][][]): [number, U[], any][] {
    const stackedDataMap: Map<number, [number, U[], any]> = new Map();
    data.forEach(v => {
      v.forEach((v, i) => {
          const d = stackedDataMap.get(i);

          if (d) {
            d[1].push(v[1]);
          } else {
            stackedDataMap.set(i, [v[0], [v[1]], v[2] ?? i + 1]);
          }
        }
      );
    });
    return Array.from(stackedDataMap.values());
  }

  public getArrayDataFromStack<U>(data: ([number, U[], any] | [number, U[]])[]): [number, U, any][][] {
    const arrayDataMap: Map<number, [number, U, any][]> = new Map();
    data?.[0]?.[1]?.forEach((d, i) => arrayDataMap.set(i, []));
    data?.forEach((v, i) => {
      v[1].forEach((d, j) => {
        arrayDataMap.get(j)?.push([v[0], d, v[2]]);
      });
    });

    return Array.from(arrayDataMap.values());
  }

  public getCalculatedStack(
    type: KruiChartStackType,
    data: KruiChartStackedBarData,
    i: number,
    chartMax: number
  ): KruiChartStackedBarMap {
    const max = data[1].reduce((acc: number, number: number) => acc + number);
    let res = data[1].map(v => +adaptiveFixed(v * 100 / max, 2));
    const sum = res.reduce((acc: number, number: number) => acc + number);
    const delta = +(100 - sum).toFixed(2);
    return {
      initial: data[1],
      calculated: type === 'stackBar' ? this.stackValues(data[1], i) : this.stackNormValues(data[1], i, chartMax),
      normalized: res,
      calculatedNormalized: type === 'stackBar' ? this.stackValues(res, i) : this.stackNormValues(res, i, chartMax),
      delta,
      isSetted: false,
      enum: data?.[2] ? data[2] : ''
    };
  }

  // return [startValue, endValue, index]
  public stackValues(values: number[], index: number): [number, number, number][] {
    const stacked: [number, number, number][] = [];
    let level = 0;
    for (let value of values) {
      stacked.push([level, (level += value), index]);
    }
    return stacked;
  }

  // return [startValue, endValue, index]
  public stackNormValues(values: number[], index: number, chartMax: number): [number, number, number][] {
    const max = values.reduce((p, c) => p + c, 0);
    const k = adaptiveFixed(chartMax / (max === 0 ? chartMax : max), 2);

    return values
      .map((a) => a * k)
      .reduce<[number, number, number][]>(
        (p, c, i) => [...p, i ? [p[i - 1][1], c + p[i - 1][1], index] : [0, c, index]],
        []
      );
  }

  public checkValueOrder(v: [number, number]): [number, number] {
    return (v[0] > v[1] ? v.reverse() : v) as [number, number];
  }

  public checkValueOrderStack(v: [number, number][]): [number, number][] {
    return v.map(d => this.checkValueOrder(d));
  }
}
