import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {BehaviorSubject, delay} from 'rxjs';
import {
  IKruiChartSingleLayerInputModel,
  KRUI_CHART_FORM_CREATE_SERVICE,
  KruiChartFormCreateService,
} from '@kr-platform/ui';
import {IComboChartRenderingOptions, IDashboardItemOptions} from '../combo-chart-view/model';
import {ComboChartViewService} from './combo-chart-view.service';
import {DataItemTypeEnum} from '../combo-chart-graph/model';
import {ComboChartService} from '@kr-platform/kit/pages/combo-charts/examples/combo-chart-graph/combo-chart.service';


const CHART_COMBO_KEYS: DataItemTypeEnum[] = Array.from([
  DataItemTypeEnum.ComboBar,
  DataItemTypeEnum.ComboBarHorizontal,
  DataItemTypeEnum.StackBar,
  DataItemTypeEnum.StackBarHorizontal,
]);

@Component({
  selector: 'combo-chart-view',
  templateUrl: './combo-chart-view.component.html',
  styleUrl: './combo-chart-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [ComboChartViewService]
})
export class ComboChartViewComponent {
  public typeOptions = DataItemTypeEnum;
  private readonly formCreateService = inject<KruiChartFormCreateService>(KRUI_CHART_FORM_CREATE_SERVICE);

  public comboChartService = inject(ComboChartService)
  public setterService = inject(ComboChartViewService);

  private chartOptionsString: string = '';
  private readonly chartOptions$$ = new BehaviorSubject<unknown>(null);
  public chartOptions$ = this.chartOptions$$.asObservable().pipe(delay(0));


  @Input() set options(options: IDashboardItemOptions) {
    if (!options) return
    console.log('set options', options);
    const data = options?.data?.filter(
      (t) =>
        t.type === DataItemTypeEnum.Line ||
        t.type === DataItemTypeEnum.Area ||
        t.type === DataItemTypeEnum.GradientArea ||
        t.type === DataItemTypeEnum.Bar ||
        t.type === DataItemTypeEnum.BarHorizontal,
    );

    const comboData = this.setterService.createComboData(CHART_COMBO_KEYS);
    CHART_COMBO_KEYS.forEach((key) => {
      options?.data
        ?.filter((t) => t.type === key)
        // @ts-ignore
        ?.forEach((c) => comboData[key] = this.setterService.setData(comboData[key], c));
    });

    // @ts-ignore
    this.setOptions(options.view as IKruiChartSingleLayerInputModel, data, comboData);
  }

  public ngOnInit(): void {

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
    console.log('options', options);
    const optionsString = JSON.stringify(options);
    if (this.chartOptionsString !== optionsString) {
      this.chartOptionsString = optionsString;
      this.chartOptions$$.next(null);
      this.chartOptions$$.next(options);
    }
  }
}
