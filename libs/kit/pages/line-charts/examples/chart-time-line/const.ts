import * as d3 from 'd3';
import { KRUI_CHART_RU, KruiChartLineInputData } from '@kr-platform/ui';


export const stream1 = [
  ['2022-01-01T00:00:00.0000000Z', 48],
  ['2022-02-01T00:00:00.0000000Z', 44],
  ['2022-03-01T00:00:00.0000000Z', 40],
  ['2022-04-01T00:00:00.0000000Z', 39],
  ['2022-05-01T00:00:00.0000000Z', 35],
  ['2022-06-01T00:00:00.0000000Z', 34],
  ['2022-07-01T00:00:00.0000000Z', 33],
  ['2022-08-01T00:00:00.0000000Z', 37],
  ['2022-09-01T00:00:00.0000000Z', 38],
  ['2022-10-01T00:00:00.0000000Z', 43],
  ['2022-11-01T00:00:00.0000000Z', 44],
  ['2022-12-01T00:00:00.0000000Z', 48]
] as KruiChartLineInputData[];

export function formatter(date: Date, ...arg: any[]): string {
  let locale = d3.timeFormatLocale({ ...(KRUI_CHART_RU), periods: ['', ''] });
  let formatMillisecond = locale.format('%M:%S.%L'),
    formatSecond = locale.format('%M:%S'),
    formatMinute = locale.format('%H:%M'),
    formatHour = locale.format('%H:%M'),
    formatDay = locale.format('%d %b'),
    formatWeek = locale.format('%d %b'),
    formatMonth = locale.format('%b'),
    formatYear = locale.format('%b %Y');

  return (
    d3.timeSecond(date) < date
      ? formatMillisecond
      : d3.timeMinute(date) < date
        ? formatSecond
        : d3.timeHour(date) < date
          ? formatMinute
          : d3.timeDay(date) < date
            ? formatHour
            : d3.timeMonth(date) < date
              ? d3.timeWeek(date) < date
                ? formatDay
                : formatWeek
              : d3.timeYear(date) < date
                ? formatMonth
                : formatYear
  )(date);
}

export function formatterWithoutMonth(date: Date, ...arg: any[]): string {
  let locale = d3.timeFormatLocale({ ...(KRUI_CHART_RU), periods: ['', ''] });
  let formatMillisecond = locale.format('%M:%S.%L'),
    formatSecond = locale.format('%M:%S'),
    formatMinute = locale.format('%H:%M'),
    formatHour = locale.format('%H:%M'),
    formatDay = locale.format('%d'),
    formatWeek = locale.format('%d %b'),
    formatMonth = locale.format('%b'),
    formatYear = locale.format('%b %Y');

  return (
    d3.timeSecond(date) < date
      ? formatMillisecond
      : d3.timeMinute(date) < date
        ? formatSecond
        : d3.timeHour(date) < date
          ? formatMinute
          : d3.timeDay(date) < date
            ? formatHour
            : d3.timeMonth(date) < date
              ? d3.timeWeek(date) < date
                ? formatDay
                : formatWeek
              : d3.timeYear(date) < date
                ? formatMonth
                : formatYear
  )(date);
}
