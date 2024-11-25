import {
  IKruiOptionsFormType,
  IKruiChartDataLayerLineInputs,
  IKruiChartSingleLayerInputModel,
  KruiChartAxisInputs,
  KruiChartDataLayerBarInputs,
  KruiChartDataLayerComboBarInputs,
  KruiChartDataLayerCommonInputs,
  KruiChartDataLayerStackBarInputs,
  KruiChartGridInputs,
  KruiChartLayerInputs,
  KruiChartLegendInputs,
  KruiChartToolbarInputs,
  KruiChartTooltipProviderInputs,
  KruiChartWrapperInputs
} from '../models';
import { Inject, Injectable } from '@angular/core';
import { KRUI_CHART_COLOR_PARSE_SERVICE } from '../injection-tokens';
import { KruiChartColorParseService } from './color-parse.service';
import { FormBuilder } from '@angular/forms';
import {
  axisXDefaultInputs,
  axisYDefaultInputs,
  barComboDefaultInputs,
  barDefaultCommon,
  barDefaultInputs,
  barStackDefaultInputs,
  getLineDefaultCommon,
  getLineDefaultInputs,
  getKruiAxisXDefaultInputs,
  getKruiAxisYDefaultInputs,
  getKruiBarComboDefaultInputs,
  getKruiBarDefaultComboCommon,
  getKruiBarDefaultCommon,
  getKruiBarDefaultInputs,
  getKruiBarStackDefaultInputs,
  getKruiGridXDefaultInputs,
  getKruiGridYDefaultInputs,
  getKruiLayerDefaultInputs,
  getKruiLegendDefaultInputs,
  getKruiToolbarDefaultInputs,
  getKruiTooltipDefaultInputs,
  getKruiWrapperDefaultInputs,
  gridXDefaultInputs,
  gridYDefaultInputs,
  layerDefaultInputs,
  legendDefaultInputs,
  lineDefaultCommon,
  lineDefaultInputs,
  toolbarDefaultInputs,
  tooltipDefaultInputs,
  wrapperDefaultInputs
} from '../constants';


@Injectable()
export class KruiChartFormCreateService {
  public optionsForm: IKruiOptionsFormType | undefined;

  constructor(
    @Inject(KRUI_CHART_COLOR_PARSE_SERVICE) public chartColorParseService: KruiChartColorParseService,
    public formBuilder: FormBuilder
  ) {
  }

  public createDefaultData(): IKruiChartSingleLayerInputModel {
    return {
      toolbar: getKruiToolbarDefaultInputs() as KruiChartToolbarInputs,
      tooltip: getKruiTooltipDefaultInputs() as KruiChartTooltipProviderInputs,
      wrapper: getKruiWrapperDefaultInputs() as KruiChartWrapperInputs,
      legend: getKruiLegendDefaultInputs() as KruiChartLegendInputs,
      resizeObserveType: 'hostListener',
      zoomType: 'scroll',
      axisX: getKruiAxisXDefaultInputs() as KruiChartAxisInputs,
      axisY: getKruiAxisYDefaultInputs() as KruiChartAxisInputs,
      gridX: getKruiGridXDefaultInputs() as KruiChartGridInputs,
      gridY: getKruiGridYDefaultInputs() as KruiChartGridInputs,
      layer: getKruiLayerDefaultInputs() as KruiChartLayerInputs,
      lineLayer: {
        config: getLineDefaultInputs() as IKruiChartDataLayerLineInputs,
        common: getLineDefaultCommon() as KruiChartDataLayerCommonInputs
      },
      barLayer: {
        config: getKruiBarDefaultInputs() as KruiChartDataLayerBarInputs,
        common: getKruiBarDefaultCommon() as KruiChartDataLayerCommonInputs
      },
      comboBarLayer: {
        config: getKruiBarComboDefaultInputs() as KruiChartDataLayerComboBarInputs,
        common: getKruiBarDefaultComboCommon() as KruiChartDataLayerCommonInputs
      },
      stackBarLayer: {
        config: getKruiBarStackDefaultInputs() as KruiChartDataLayerStackBarInputs,
        common: getKruiBarDefaultCommon() as KruiChartDataLayerCommonInputs
      }
    };
  }

  public createSettingFormDefault(): IKruiOptionsFormType {
    return this.createSettingForm(this.createDefaultData());
  }

  public createSettingForm(data: IKruiChartSingleLayerInputModel): IKruiOptionsFormType {
    // @ts-ignore
    this.optionsForm = this.formBuilder.group({
      toolbar: this.formBuilder.group<Partial<KruiChartToolbarInputs>>(
        this.createFormObject<Partial<KruiChartToolbarInputs>>(data?.toolbar, toolbarDefaultInputs)
      ),
      tooltip: this.formBuilder.group<Partial<KruiChartTooltipProviderInputs>>(this.createFormObject<Partial<KruiChartTooltipProviderInputs>>(data?.tooltip, tooltipDefaultInputs)),
      wrapper: this.formBuilder.group<Partial<KruiChartWrapperInputs>>(this.createFormObject<Partial<KruiChartWrapperInputs>>(data?.wrapper, wrapperDefaultInputs)),
      legend: this.formBuilder.group<Partial<KruiChartLegendInputs>>(this.createFormObject<Partial<KruiChartLegendInputs>>(data?.legend, legendDefaultInputs)),
      resizeObserveType: data?.resizeObserveType ?? 'hostListener',
      zoomType: data?.zoomType ?? 'scroll',
      axisX: this.formBuilder.group<Partial<KruiChartAxisInputs>>(this.createFormObject<Partial<KruiChartAxisInputs>>(data?.axisX, axisXDefaultInputs)),
      axisY: this.formBuilder.group<Partial<KruiChartAxisInputs>>(this.createFormObject<Partial<KruiChartAxisInputs>>(data?.axisY, axisYDefaultInputs)),
      gridX: this.formBuilder.group<Partial<KruiChartGridInputs>>(this.createFormObject<Partial<KruiChartGridInputs>>(data?.gridX, gridXDefaultInputs)),
      gridY: this.formBuilder.group<Partial<KruiChartGridInputs>>(this.createFormObject<Partial<KruiChartGridInputs>>(data?.gridY, gridYDefaultInputs)),
      layer: this.formBuilder.group<Partial<KruiChartLayerInputs>>(this.createFormObject<Partial<KruiChartLayerInputs>>(data?.layer, layerDefaultInputs)),
      lineLayer: this.formBuilder.group({
        config: this.formBuilder.group<Partial<IKruiChartDataLayerLineInputs>>(
          this.createFormObject<Partial<IKruiChartDataLayerLineInputs>>(data?.lineLayer?.config, lineDefaultInputs)),
        common: this.formBuilder.group<Partial<KruiChartDataLayerCommonInputs>>(this.createFormObject<Partial<KruiChartDataLayerCommonInputs>>(data?.lineLayer?.common, lineDefaultCommon))
      }),
      barLayer: this.formBuilder.group({
        config: this.formBuilder.group<Partial<KruiChartDataLayerBarInputs>>(this.createFormObject<Partial<KruiChartDataLayerBarInputs>>(data?.barLayer?.config, barDefaultInputs)),
        common: this.formBuilder.group<Partial<KruiChartDataLayerCommonInputs>>(this.createFormObject<Partial<KruiChartDataLayerCommonInputs>>(data?.barLayer?.common, barDefaultCommon))
      }),
      comboBarLayer: this.formBuilder.group({
        config: this.formBuilder.group<Partial<KruiChartDataLayerComboBarInputs>>(this.createFormObject<Partial<KruiChartDataLayerComboBarInputs>>(data?.comboBarLayer?.config, barComboDefaultInputs)),
        common: this.formBuilder.group<Partial<KruiChartDataLayerCommonInputs>>(this.createFormObject<Partial<KruiChartDataLayerCommonInputs>>(data?.comboBarLayer?.common, barDefaultCommon))
      }),
      stackBarLayer: this.formBuilder.group({
        config: this.formBuilder.group<Partial<KruiChartDataLayerComboBarInputs>>(this.createFormObject<Partial<KruiChartDataLayerStackBarInputs>>(data?.stackBarLayer?.config, barStackDefaultInputs)),
        common: this.formBuilder.group<Partial<KruiChartDataLayerCommonInputs>>(this.createFormObject<Partial<KruiChartDataLayerCommonInputs>>(data?.stackBarLayer?.common, barDefaultCommon))
      })
    });
    return this.optionsForm!;
  }

  public patchSettingForm(data: IKruiChartSingleLayerInputModel): IKruiOptionsFormType {
    this.optionsForm?.patchValue(this.createFormObjects(data));
    return this.getSettingForm();
  }

  public getSettingForm(): IKruiOptionsFormType {
    if (!this.optionsForm) {
      return this.createSettingFormDefault();
    }
    return this.optionsForm!;
  }

  public compareAndDeleteKey(
    data: IKruiChartSingleLayerInputModel,
    isDarkTheme: boolean = true
  ): IKruiChartSingleLayerInputModel {
    const defaultData = this.createDefaultData();

    const compareAndDelete = (item: object | null, item2: object | null): void => {
      if (item === null || item === undefined || item2 === null || item2 === undefined) {
        return;
      }
      for (const key in item) {
        // @ts-ignore
        const val = item[key];
        // @ts-ignore
        const val2 = item2[key];

        if (typeof val === 'object') {
          compareAndDelete(val, val2);
        } else if (typeof val !== 'object') {
          if (val2 === null && val2 === undefined) {
            // @ts-ignore
            delete item2[key];
          }

          if (val === val2) {
            // @ts-ignore
            delete item2[key];
          } else {
            const isCssVar = /var(.*)/i.test(val);

            if (isCssVar) {
              const newVal = this.chartColorParseService.changeColor(val, isDarkTheme);
              if (newVal === val2) {
                // @ts-ignore
                delete item2[key];
              }
            }
          }
        }
        // @ts-ignore
        if (typeof item2[key] === 'object' && !!item2[key] && Object.keys(item2[key]).length === 0) {
          // @ts-ignore
          delete item2[key];
        }
      }
    };

    compareAndDelete(defaultData, data);
    return data;
  }

  public createFormObjects(data: IKruiChartSingleLayerInputModel): IKruiChartSingleLayerInputModel {
    return {
      toolbar: this.createFormObject<Partial<KruiChartToolbarInputs>>(data?.toolbar, toolbarDefaultInputs),
      tooltip: this.createFormObject<Partial<KruiChartTooltipProviderInputs>>(data?.tooltip, tooltipDefaultInputs),
      wrapper: this.createFormObject<Partial<KruiChartWrapperInputs>>(data?.wrapper, wrapperDefaultInputs),
      legend: this.createFormObject<Partial<KruiChartLegendInputs>>(data?.legend, legendDefaultInputs),
      resizeObserveType: data?.resizeObserveType ?? 'hostListener',
      zoomType: data?.zoomType ?? 'scroll',
      axisX: this.createFormObject<Partial<KruiChartAxisInputs>>(data?.axisX, axisXDefaultInputs),
      axisY: this.createFormObject<Partial<KruiChartAxisInputs>>(data?.axisY, axisYDefaultInputs),
      gridX: this.createFormObject<Partial<KruiChartGridInputs>>(data?.gridX, gridXDefaultInputs),
      gridY: this.createFormObject<Partial<KruiChartGridInputs>>(data?.gridY, gridYDefaultInputs),
      layer: this.createFormObject<Partial<KruiChartLayerInputs>>(data?.layer, layerDefaultInputs),
      lineLayer: {
        config: this.createFormObject<Partial<IKruiChartDataLayerLineInputs>>(data?.lineLayer?.config, lineDefaultInputs),
        common: this.createFormObject<Partial<KruiChartDataLayerCommonInputs>>(data?.lineLayer?.common, lineDefaultCommon)
      },
      barLayer: {
        config: this.createFormObject<Partial<KruiChartDataLayerBarInputs>>(data?.barLayer?.config, barDefaultInputs),
        common: this.createFormObject<Partial<KruiChartDataLayerCommonInputs>>(data?.barLayer?.common, barDefaultCommon)
      },
      comboBarLayer: {
        config: this.createFormObject<Partial<KruiChartDataLayerComboBarInputs>>(data?.comboBarLayer?.config, barComboDefaultInputs),
        common: this.createFormObject<Partial<KruiChartDataLayerCommonInputs>>(data?.comboBarLayer?.common, barDefaultCommon)
      },
      stackBarLayer: {
        config: this.createFormObject<Partial<KruiChartDataLayerStackBarInputs>>(data?.stackBarLayer?.config, barStackDefaultInputs),
        common: this.createFormObject<Partial<KruiChartDataLayerCommonInputs>>(data?.stackBarLayer?.common, barDefaultCommon)
      }
    } as IKruiChartSingleLayerInputModel;
  }

  public createFormObject<T extends Record<string, any>>(data: T, object: Record<string, any>): object {
    if (data === null || data === undefined) return object;
    const newObject = {};
    for (const key in object) {
      if (data?.[key] === null || data?.[key] === undefined) {
        // @ts-ignore
        newObject[key] = object[key];
      } else {
        // @ts-ignore
        newObject[key] = data[key];
      }
    }
    return newObject;
  }
}
