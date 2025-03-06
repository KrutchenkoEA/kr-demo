import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, FormGroupName, Validators } from '@angular/forms';
import {
  IKruiChartSingleLayerInputModel,
  KRUI_CHART_LINE_INTERPOLATE,
  kruiChartRandomDateArray,
  kruiChartRandomValue,
  kruiChartRdmNumberData,
} from '@kr-platform/ui';
import { DataItemTypeEnum, KruiDataSourceFormType, KruiGeneratorForm } from '../combo-chart-graph/model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ComboChartService } from '../combo-chart-graph/combo-chart.service';

enum KruiDataItemTypeEnumVertical {
  Line = 'line',
  Area = 'area',
  GradientArea = 'gradientArea',
  Bar = 'bar',
  ComboBar = 'comboBar',
  StackBar = 'stackBar',
}

enum KruiDataItemTypeEnumHorizontal {
  BarHorizontal = 'barHorizontal',
  ComboBarHorizontal = 'comboBarHorizontal',
  StackBarHorizontal = 'stackBarHorizontal',
}

type generatorFormType = FormGroup<{
  dataSources: FormArray<KruiDataSourceFormType>,
  dataParams: FormGroup<{
    minValue: FormControl;
    maxValue: FormControl;
    dataLength: FormControl;
  }>
}>

@Component({
  selector: 'combo-chart-generator',
  templateUrl: './combo-chart-generator.component.html',
  styleUrl: './combo-chart-generator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ComboChartGeneratorComponent implements OnDestroy {
  public subscriptions: Subscription[] = [];
  private readonly comboChartService = inject(ComboChartService);
  private readonly parentForm = inject(FormGroupDirective);
  private readonly formGroupName = inject(FormGroupName, { optional: true });
  private readonly cdr = inject(ChangeDetectorRef);

  protected readonly interpolation = KRUI_CHART_LINE_INTERPOLATE;
  public dataForm!: generatorFormType;
  public isChartHorizontal = new FormControl<boolean>(false);

  public typeOptions = DataItemTypeEnum;
  public typeOptionsParsed$: BehaviorSubject<{ name: string; value: string }[]> = new BehaviorSubject<
    { name: string; value: string }[]
  >(this.parseEnum(KruiDataItemTypeEnumVertical));

  public customInterval: any = null;
  public customRefreshTime: number = 3000;

  get dataSources(): FormArray<KruiDataSourceFormType> {
    return this.dataForm.controls.dataSources as FormArray;
  }

  public ngOnDestroy(): void {
    this.subscriptions?.forEach((sub) => sub.unsubscribe());
    this.subscriptions = [];
  }

  public ngOnInit(): void {
    this.dataForm =
      (this.formGroupName?.name ?
        this.parentForm.form.controls[this.formGroupName.name] :
        this.parentForm.form) as generatorFormType;

    const isChartHorizontalSub = this.isChartHorizontal.valueChanges.subscribe((v) => {
      this.comboChartService.isChartHorizontal$.next(v ?? false);

      this.typeOptionsParsed$.next(
        v ? this.parseEnum(KruiDataItemTypeEnumHorizontal) : this.parseEnum(KruiDataItemTypeEnumVertical),
      );

      this.dataSources.controls.forEach((control) => {
        control.patchValue({ type: v ? DataItemTypeEnum.BarHorizontal : DataItemTypeEnum.Line });
      });

      this.cdr.markForCheck();
    });

    this.addDataSource('Пример 1');
    this.addDataSource('Пример 2');

    const updateSub = this.comboChartService.update$.subscribe((v) => {
      this.comboChartService.chartOptions$.next({
        data: this.dataForm.value.dataSources?.map(v => {
          v.chartData = this.generateData();
          v.chartData$.next(this.generateData());
          return v;
        }) as KruiGeneratorForm[],
        view: v as IKruiChartSingleLayerInputModel,
      });
    });

    const realtimeUpdateSub = this.comboChartService.autoRefresh$.subscribe((v) => {
      if (v) {
        this.customInterval = setInterval(() => this.addData(), this.customRefreshTime);
      } else {
        clearInterval(this.customInterval);
      }
    });

    this.subscriptions.push(updateSub);
    this.subscriptions.push(isChartHorizontalSub);
    this.subscriptions.push(realtimeUpdateSub);
  }

  public addDataSource(name: string = this.getRandomColor()): void {
    const chartData = this.generateData();
    const color = this.getRandomColor();
    const dataSourceForm: KruiDataSourceFormType = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      color: new FormControl(color, [Validators.required]),
      type: new FormControl(this.isChartHorizontal.value ?
        DataItemTypeEnum.BarHorizontal :
        DataItemTypeEnum.Line, [Validators.required]),
      palette: new FormControl([
        this.getRandomColor(), this.getRandomColor(), this.getRandomColor(),
      ], [Validators.required]),
      chartData: new FormControl(chartData),
      chartData$: new FormControl(new BehaviorSubject(chartData)),
    }) as unknown as KruiDataSourceFormType;
    this.dataSources.push(dataSourceForm);
  }

  public deleteDataSource(index: number): void {
    this.dataSources.removeAt(index);
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 32)];
    }
    return color;
  }

  private getEnumKeyByValue(object: Record<string, unknown>, value: string): string {
    const index = Object.values(object).indexOf(value);
    return Object.keys(object)[index];
  }

  private parseEnum(object: Record<string, unknown>): { name: string; value: string }[] {
    // @ts-ignore
    return Object.values(object).map((item: string) => {
      return {
        name: item,
        value: this.getEnumKeyByValue(object, item),
      };
    });
  }

  private generateData(): any {
    const paramsValue = this.dataForm.controls.dataParams.value;
    const dataLength = paramsValue.dataLength;
    const minValue = paramsValue.minValue;
    const maxValue = paramsValue.maxValue;
    return this.parentForm.form.controls['optionsForm'].getRawValue().axisX.type === 'number'
      ? kruiChartRdmNumberData(dataLength, minValue, maxValue)
      : kruiChartRandomDateArray(dataLength, minValue, maxValue, new Date('2022-09-01T00:00:00.0000000Z'));
  }

  private addData(): void {
    const paramsValue = this.dataForm.controls.dataParams.value;
    const minValue = paramsValue.minValue;
    const maxValue = paramsValue.maxValue;
    const isNumber = this.parentForm.form.controls['optionsForm'].getRawValue().axisX.type === 'number';

    // @ts-ignore
    this.comboChartService.chartDataUpdate$.next(this.dataForm.value.dataSources?.map(v => {
      const newValue = kruiChartRandomValue(minValue, maxValue);
      const existData = v.chartData$.value;

      if (isNumber) {
        v.chartData = [...existData, [existData?.length, newValue]];
      } else {
        const lastDate = new Date(existData[existData?.length - 1][0]);
        const newDate = new Date(lastDate.setDate(lastDate.getDate() + 1));
        v.chartData = [...existData, [newDate, newValue]];
      }
      v.chartData$.next(v.chartData);

      return v;
    }));
  }
}
