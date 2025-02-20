import { InjectionToken } from '@angular/core';

export enum DataItemTypeEnum {
  Line = 'line',
  Area = 'area',
  GradientArea = 'gradientArea',
  Bar = 'bar',
  BarHorizontal = 'barHorizontal',
  ComboBar = 'comboBar',
  ComboBarHorizontal = 'comboBarHorizontal',
  StackBar = 'stackBar',
  StackBarHorizontal = 'stackBarHorizontal',
}

export const ACTIVE_SHAPES_ITEM_OPTIONS = new InjectionToken<unknown>('active-shapes-options');
