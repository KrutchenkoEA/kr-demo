import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { KRUI_CHART_LINE_INTERPOLATE, kruiChartRandomDateArray, kruiChartRdmNumberData } from '@kr-platform/ui';
import { DataItemTypeEnum, KruiDataSourceFormType } from '../combo-chart-graph/model';
import { BehaviorSubject } from 'rxjs';

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

@Component({
  selector: 'combo-chart-generator',
  templateUrl: './combo-chart-generator.component.html',
  styleUrl: './combo-chart-generator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ComboChartGeneratorComponent {
  protected readonly interpolation = KRUI_CHART_LINE_INTERPOLATE;
  public dataForm!: FormGroup<{ dataSources: FormArray<KruiDataSourceFormType> }>;
  public dataParamsForm!: FormGroup<{
    minValue: FormControl;
    maxValue: FormControl;
    dataLength: FormControl;
  }>;
  public isChartHorizontal = new FormControl<boolean>(false);

  public typeOptions = DataItemTypeEnum;
  public typeOptionsParsed$: BehaviorSubject<{ name: string; value: string }[]> = new BehaviorSubject<
    { name: string; value: string }[]
  >(this.parseEnum(KruiDataItemTypeEnumVertical));

  get dataSources(): FormArray<KruiDataSourceFormType> {
    return this.dataForm.controls.dataSources as FormArray;
  }

  constructor(
    private readonly parentForm: FormGroupDirective,
    @Optional() public formGroupName: FormGroupName,
    private readonly fb: FormBuilder,
  ) {
    this.dataParamsForm = fb.group({
      minValue: 2,
      maxValue: 50,
      dataLength: 50,
    });
  }

  public ngOnInit(): void {
    this.dataForm =
      (this.formGroupName?.name ?
        this.parentForm.form.controls[this.formGroupName.name] :
        this.parentForm.form) as FormGroup<{ dataSources: FormArray<KruiDataSourceFormType> }>;

    this.isChartHorizontal.valueChanges.subscribe((v) => {
      this.typeOptionsParsed$.next(
        v ? this.parseEnum(KruiDataItemTypeEnumHorizontal) : this.parseEnum(KruiDataItemTypeEnumVertical),
      );

      setTimeout(() => {
        this.dataSources.controls.forEach((control) => {
          control.patchValue({ type: v ? DataItemTypeEnum.BarHorizontal : DataItemTypeEnum.Line });
        });
      });
    });

    this.addDataSource('test1');
    this.addDataSource('test2');
  }

  public addDataSource(name: string = this.getRandomColor()): void {
    const color = this.getRandomColor();
    const dataSourceForm: KruiDataSourceFormType = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      color: new FormControl(color, [Validators.required]),
      type: new FormControl(DataItemTypeEnum.Line, [Validators.required]),
      palette: new FormControl([
        this.getRandomColor(), this.getRandomColor(), this.getRandomColor(),
      ], [Validators.required]),
      interpolation: new FormControl('curveBasis'),
      secondColor: new FormControl(color),
      opacity: new FormControl(1),
      chartData: new FormControl(this.generateData()),
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
    const dataLength = this.dataParamsForm.value.dataLength ?? 50;
    const minValue = this.dataParamsForm.value.minValue ?? 2;
    const maxValue = this.dataParamsForm.value.maxValue ?? 50;
    return this.parentForm.form.controls['optionsForm'].getRawValue().axisX.type === 'number'
      ? kruiChartRdmNumberData(dataLength, minValue, maxValue)
      : kruiChartRandomDateArray(dataLength, minValue, maxValue, new Date('2022-09-01T00:00:00.0000000Z'));

  }
}
