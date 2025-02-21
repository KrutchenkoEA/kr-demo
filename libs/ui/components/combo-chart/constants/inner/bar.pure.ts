import { notNul } from './pure';
import { KruiChartBarTextPosition, KruiChartScale } from '../../models';

export const getBarTextPosition = (
  valuePosition: KruiChartBarTextPosition,
  valuesFontSizePx: number,
  secondaryAxis: KruiChartScale,
  d: number,
): number => {
  const pos = notNul(secondaryAxis(d));
  if (valuePosition === 'top') {
    return pos < 0 ? valuesFontSizePx : pos + valuesFontSizePx;
  } else if (valuePosition === 'bottom') {
    const bottom = secondaryAxis.range()[0] - valuesFontSizePx;
    return pos > bottom ? pos : bottom;
  } else if (valuePosition === 'over') {
    const over = pos - valuesFontSizePx / 2;
    return over > valuesFontSizePx ? over : valuesFontSizePx;
  } else {
    const start = secondaryAxis.range()[0];
    return start - (start - pos) / 2;
  }
};


export const getBarHorizontalTextPosition = (
  valuePosition: KruiChartBarTextPosition,
  valuesFontSizePx: number,
  secondaryAxis: KruiChartScale,
  d: number,
): number => {
  const pos = notNul(secondaryAxis(d));
  if (valuePosition === 'top') {
    const bottom = secondaryAxis.range()[1] - valuesFontSizePx;
    return pos < bottom ? pos - valuesFontSizePx : bottom;
  } else if (valuePosition === 'bottom') {
    return pos > 0 ? valuesFontSizePx : pos + valuesFontSizePx;
  } else if (valuePosition === 'over') {
    const bottom = secondaryAxis.range()[1] - valuesFontSizePx;
    return pos < bottom ? pos + valuesFontSizePx : bottom;
  } else {
    const start = secondaryAxis.range()[0];
    return start - (start - pos) / 2;
  }
  //
  // if (valuePosition === 'top') {
  //   return notNul(secondaryAxis(d)) + -valuesFontSizePx;
  // } else if (valuePosition === 'bottom') {
  //   const res = secondaryAxis.range()[0] + valuesFontSizePx;
  //   return res < valuesFontSizePx ? valuesFontSizePx : res;
  // } else if (valuePosition === 'over') {
  //   const pos = notNul(secondaryAxis(d)) + width * 0.02;
  //   return pos > width ? width * 0.98 : pos;
  // } else {
  //   const delta = secondaryAxis.range()[0] - notNul(secondaryAxis(d));
  //   const res = secondaryAxis.range()[0] - delta / 2;
  //   return res < valuesFontSizePx ? valuesFontSizePx : res;
  // }
};

export const getBarTextPositionStack = (
  valuePosition: KruiChartBarTextPosition,
  valuesFontSizePx: number,
  secondaryAxis: KruiChartScale,
  d: [number, number, number] | [number, number],
): number => {
  if (valuePosition === 'top') {
    return notNul(secondaryAxis(d[1])) + valuesFontSizePx;
  } else if (valuePosition === 'bottom') {
    return notNul(secondaryAxis(d[0])) - valuesFontSizePx;
  } else if (valuePosition === 'over') {
    return notNul(secondaryAxis(d[1]));
  } else {
    const center = notNul(secondaryAxis(d[0])) - notNul(secondaryAxis(d[1]));
    return center / 2 + notNul(secondaryAxis(d[1]));
  }
};

export const getBarHorizontalTextPositionStack = (
  valuePosition: KruiChartBarTextPosition,
  valuesFontSizePx: number,
  secondaryAxis: KruiChartScale,
  d: [number, number, number] | [number, number],
): number => {
  if (valuePosition === 'top') {
    return notNul(secondaryAxis(d[1])) - valuesFontSizePx;
  } else if (valuePosition === 'bottom') {
    return notNul(secondaryAxis(d[0])) + valuesFontSizePx;
  } else if (valuePosition === 'over') {
    return notNul(secondaryAxis(d[1]));
  } else {
    const center = notNul(secondaryAxis(d[0])) - notNul(secondaryAxis(d[1]));
    return center / 2 + notNul(secondaryAxis(d[1]));
  }
};
