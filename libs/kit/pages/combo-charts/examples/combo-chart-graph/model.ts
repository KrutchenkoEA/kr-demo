import {FormGroup} from '@angular/forms';
import {ToFormControls} from '@kr-platform/ui';

export interface KruiGeneratorForm {
  name: string;
  type: DataItemTypeEnum;
  color: string;
  chartData?: any;
}

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

export type KruiDataSourceFormType = FormGroup<ToFormControls<KruiGeneratorForm>>;
