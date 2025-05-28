import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import {
  IKruiChartSingleLayerInputModel,
  KRUI_CHART_FORM_CREATE_SERVICE,
  KruiChartFormCreateService,
} from '@kr-platform/ui';
import { IComboChartComboData, IComboChartRenderingOptions, IDashboardItemOptions } from '../combo-chart-view/model';
import { ComboChartViewService } from './combo-chart-view.service';
import { DataItemTypeEnum, DataItemTypeEnumComboKey } from '../combo-chart-graph/model';
import { ComboChartService } from '../combo-chart-graph/combo-chart.service';


const CHART_COMBO_KEYS: DataItemTypeEnumComboKey[] = Array.from([
  DataItemTypeEnumComboKey.ComboBar,
  DataItemTypeEnumComboKey.ComboBarHorizontal,
  DataItemTypeEnumComboKey.StackBar,
  DataItemTypeEnumComboKey.StackBarHorizontal,
]);

@Component({
  selector: 'combo-chart-view',
  templateUrl: './combo-chart-view.component.html',
  styleUrl: './combo-chart-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [ComboChartViewService],
})
export class ComboChartViewComponent {
  public typeOptions = DataItemTypeEnum;
  private readonly formCreateService = inject<KruiChartFormCreateService>(KRUI_CHART_FORM_CREATE_SERVICE);

  public comboChartService = inject(ComboChartService);
  public setterService = inject(ComboChartViewService);

  private readonly chartOptions$$ = new BehaviorSubject<unknown>(null);
  public chartOptions$ = this.chartOptions$$.asObservable().pipe(delay(0));

  @Input() set options(options: IDashboardItemOptions) {
    if (!options) return;
    const data = options?.data?.filter(
      (t) =>
        t.type === DataItemTypeEnum.Line ||
        t.type === DataItemTypeEnum.Area ||
        t.type === DataItemTypeEnum.Bar ||
        t.type === DataItemTypeEnum.BarHorizontal,
    );

    const comboData: IComboChartComboData = this.setterService.createComboData(CHART_COMBO_KEYS);
    CHART_COMBO_KEYS.forEach((key: DataItemTypeEnumComboKey) => {
      options?.data
        ?.filter((t) => (t.type as unknown as DataItemTypeEnumComboKey) === key)
        ?.forEach((c) => comboData[key] = this.setterService.setData(comboData[key], c));
      comboData[key]['chartData$'].next(comboData[key]['chartData']);
    });

    this.setOptions(options.view as IKruiChartSingleLayerInputModel, data as IComboChartRenderingOptions['data'], comboData);
  }

  @Input() set dataUpdate(data: IDashboardItemOptions['data']) {
    if (!data) return;
    const existValue = (this.chartOptions$$.value as IComboChartRenderingOptions).comboData;
    CHART_COMBO_KEYS.forEach((key: DataItemTypeEnumComboKey) => {
      existValue[key]['chartData'] = [];
      existValue[key]['caption'] = [];
      existValue[key]['palette'] = [];
      data
        ?.filter((t) => (t.type as unknown as DataItemTypeEnumComboKey) === key)
        ?.forEach((c) => existValue[key] = this.setterService.setData(existValue[key], c));
      existValue[key]['chartData$'].next(existValue[key]['chartData']);
    });
  }

  private setOptions(
    view: IComboChartRenderingOptions['view'],
    data: IComboChartRenderingOptions['data'],
    comboData: IComboChartRenderingOptions['comboData'],
  ): void {
    const options: IComboChartRenderingOptions = {
      view: this.formCreateService.createFormObjects(view),
      data,
      comboData,
    };
    this.chartOptions$$.next(null);
    this.chartOptions$$.next(options);
  }
}
