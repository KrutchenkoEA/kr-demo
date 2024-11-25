import { KruiChartTooltipProviderInputs } from '../wrapper-models/tooltip-provider.model';
import { KruiChartWrapperInputs } from '../wrapper-models/wrapper.model';
import { KruiChartToolbarInputs } from '../wrapper-models/toolbar.model';
import { KruiChartGridInputs } from '../content-models/grid.model';
import { KruiChartLegendInputs } from '../content-models/legend.model';
import { KruiChartAxisInputs } from '../content-models/axis.model';
import { KruiChartLayerInputs } from '../content-models/layer.model';
import { KruiChartZoomType } from '../chart-models/chart.model';
import { KruiChartDataLayerCommonInputs } from '../content-models/data-layer.model';
import { IKruiChartDataLayerLineInputs } from '../data-models/line.model';
import { KruiChartDataLayerBarInputs } from '../data-models/bar.model';
import { KruiChartDataLayerStackBarInputs } from '../data-models/stack-bar.model';
import { KruiChartDataLayerComboBarInputs } from '../data-models/combo-bar.model';
import { FormControl, FormGroup } from '@angular/forms';

export interface IKruiChartSingleLayerInputModel {
  toolbar: KruiChartToolbarInputs;
  tooltip: KruiChartTooltipProviderInputs;
  wrapper: KruiChartWrapperInputs;
  legend: KruiChartLegendInputs;
  resizeObserveType: 'hostListener' | 'resizeObserver';
  zoomType: KruiChartZoomType;
  axisX: KruiChartAxisInputs;
  axisY: KruiChartAxisInputs;
  gridX: KruiChartGridInputs;
  gridY: KruiChartGridInputs;
  layer: KruiChartLayerInputs;
  lineLayer: {
    config: IKruiChartDataLayerLineInputs
    common: KruiChartDataLayerCommonInputs
  };
  barLayer: {
    config: KruiChartDataLayerBarInputs
    common: KruiChartDataLayerCommonInputs
  };
  comboBarLayer: {
    config: KruiChartDataLayerComboBarInputs
    common: KruiChartDataLayerCommonInputs
  };
  stackBarLayer: {
    config: KruiChartDataLayerStackBarInputs
    common: KruiChartDataLayerCommonInputs
  };
}


export type ToFormControls<T> = {
  [K in keyof T]: FormControl<T[K]>;
};


export type IKruiOptionsFormType = FormGroup<{
  toolbar: FormGroup<ToFormControls<KruiChartToolbarInputs>>;
  tooltip: FormGroup<ToFormControls<KruiChartTooltipProviderInputs>>;
  wrapper: FormGroup<ToFormControls<KruiChartWrapperInputs>>;
  legend: FormGroup<ToFormControls<KruiChartLegendInputs>>;
  resizeObserveType: FormControl<'hostListener' | 'resizeObserver'>;
  zoomType: FormControl<KruiChartZoomType>;
  axisX: FormGroup<ToFormControls<KruiChartAxisInputs>>;
  axisY: FormGroup<ToFormControls<KruiChartAxisInputs>>;
  gridX: FormGroup<ToFormControls<KruiChartGridInputs>>;
  gridY: FormGroup<ToFormControls<KruiChartGridInputs>>;
  layer: FormGroup<ToFormControls<KruiChartLayerInputs>>;
  lineLayer: FormGroup<{
    config: FormGroup<ToFormControls<IKruiChartDataLayerLineInputs>>;
    common: FormGroup<ToFormControls<KruiChartDataLayerCommonInputs>>;
  }>
  barLayer: FormGroup<{
    config: FormGroup<ToFormControls<KruiChartDataLayerBarInputs>>;
    common: FormGroup<ToFormControls<KruiChartDataLayerCommonInputs>>;
  }>
  comboBarLayer: FormGroup<{
    config: FormGroup<ToFormControls<KruiChartDataLayerComboBarInputs>>;
    common: FormGroup<ToFormControls<KruiChartDataLayerCommonInputs>>;
  }>
  stackBarLayer: FormGroup<{
    config: FormGroup<ToFormControls<KruiChartDataLayerStackBarInputs>>;
    common: FormGroup<ToFormControls<KruiChartDataLayerCommonInputs>>;
  }>
}>
