import { FormGroup } from '@angular/forms';
import { ToFormControls } from '@kr-platform/ui';

export interface KruiGeneratorForm {
  name: string;
  color: string;
  type: KruiDataItemTypeEnum;
  palette?: string[];
  interpolation?:string;
  secondColor?: string;
  opacity?: number;
  chartData?: any;
}

export enum KruiDataItemTypeEnum {
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

export type KruiDataSourceFormType = FormGroup<ToFormControls<KruiGeneratorForm>>;
