import { QueryList } from '@angular/core';
import { ScaleBand } from 'd3';
import { KruiChartDataLayerDirective } from '../../content-directives/data-layer.directive';
import { KRUI_CHART_DEFAULT_WIDTH } from '../export/constants';
import { KruiChartAxisProvider, KruiChartAxisType, KruiChartScale, KruiChartWorkgroundPadding } from '../../models';

// @ts-ignore
export const notNul = <T>(a: T): 0 | NonNullable<T> => a ?? 0;
export const axisIsEnum = (axis: KruiChartScale, type: KruiChartAxisType): axis is ScaleBand<any> => type === 'enum';

export const getNumberAxisDomain = (
  axis: KruiChartAxisProvider,
  layersList: QueryList<KruiChartDataLayerDirective<any, any>>,
): [number, number] => {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (const layer of layersList) {
    let values: number[] = [];
    if (axis.primary) {
      values = layer.getDomain(axis.type);
    } else {
      values = layer.getRange();
    }

    min = Math.min(min, ...values);
    max = Math.max(max, ...values);
  }

  return [axis.min ?? min, axis.max ?? max];
};

export const getEnumAxisDomain = (
  axis: KruiChartAxisProvider,
  layersList: QueryList<KruiChartDataLayerDirective<any, any>>,
): string[] => {
  let values = new Set<string>([]);

  for (const layer of layersList) {
    if (axis.primary) {
      layer.getDomain(axis.type)?.map(d => values.add(d.toString()));
    } else {
      layer.getRange()?.map(d => values.add(d.toString()));
    }
  }
  return Array.from(values);
};

export const getTimeAxisDomain = (
  axis: KruiChartAxisProvider,
  layersList: QueryList<KruiChartDataLayerDirective<any, any>>,
): [Date, Date] => {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (const layer of layersList) {
    let values: number[] = [];
    if (axis.primary) {
      values = layer.getDomain(axis.type).map((d: string | number) => +d);
    } else {
      values = layer.getRange().map((d: string | number) => +d);
    }

    min = Math.min(min, ...values);
    max = Math.max(max, ...values);
  }

  return [(axis.min as unknown as Date) ?? new Date(min), (axis.max as unknown as Date) ?? new Date(max)];
};

export const getWorkgroundPadding = (
  dataLayersList: QueryList<KruiChartDataLayerDirective<any, any>>,
  axisType: KruiChartAxisType,
): KruiChartWorkgroundPadding => {
  let workgroundPadding: KruiChartWorkgroundPadding = { top: 0, bottom: 0, left: 0, right: 0 };
  for (const dataLayer of dataLayersList) {
    const layerWorkgroundPadding = dataLayer.getWorkgroundPadding(axisType);
    workgroundPadding.top = layerWorkgroundPadding.top >= workgroundPadding.top ?
      layerWorkgroundPadding.top :
      workgroundPadding.top;
    workgroundPadding.right = layerWorkgroundPadding.right >= workgroundPadding.right ?
      layerWorkgroundPadding.right :
      workgroundPadding.right;
    workgroundPadding.bottom = layerWorkgroundPadding.bottom >= workgroundPadding.bottom ?
      layerWorkgroundPadding.bottom :
      workgroundPadding.bottom;
    workgroundPadding.left = layerWorkgroundPadding.left >= workgroundPadding.left ?
      layerWorkgroundPadding.left :
      workgroundPadding.left;
  }
  return workgroundPadding;
};

export const getBarMargin = (
  layersList: QueryList<KruiChartDataLayerDirective<any, any>>,
  width: number = KRUI_CHART_DEFAULT_WIDTH,
  axisType: KruiChartAxisType,
): number => {
  let barMargin = 0;
  for (const layer of layersList) {
    const layerBandMargin = 0;
    // const layerBandMargin = layer.getBarMargin(width, axisType);
    barMargin = layerBandMargin >= barMargin ? layerBandMargin : barMargin;
  }
  return barMargin;
};
