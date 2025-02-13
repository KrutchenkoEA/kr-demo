import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  IKruiChartSingleLayerInputModel,
  IKruiOptionsFormType,
  KRUI_CHART_FORM_CREATE_SERVICE, KruiButtonModule,
  KruiChartFormCreateService,
  kruiChartRandomDateArray,
  kruiChartRdmNumberData,
} from '@kr-platform/ui';
import { BehaviorSubject, debounceTime, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { SplitAreaComponent, SplitComponent } from 'angular-split';
import { ComboChartGeneratorComponent } from './components/combo-chart-generator/combo-chart-generator.component';
import { ComboChartSettingsComponent } from './components/combo-chart-settings/combo-chart-settings.component';

@Component({
  selector: 'kr-app-charts',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SvgIconComponent,
    SplitComponent,
    SplitAreaComponent,
    ComboChartGeneratorComponent,
    ComboChartSettingsComponent,
    KruiButtonModule,
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsComponent implements OnInit, OnDestroy {
  public form!: FormGroup<{ optionsForm: IKruiOptionsFormType }>;

  public get optionsForm(): IKruiOptionsFormType {
    return this.form?.controls.optionsForm;
  }

  public options: BehaviorSubject<{
    data: [any, number | null, any][]; view: IKruiChartSingleLayerInputModel;
  }> | undefined;

  public subscription: Subscription | undefined;

  constructor(
    @Inject(KRUI_CHART_FORM_CREATE_SERVICE) private readonly formCreateService: KruiChartFormCreateService,
    private readonly fb: FormBuilder,
  ) {
    this.form = this.fb.group({
        optionsForm: this.formCreateService.createSettingFormDefault(),
      },
    );
  }


  public ngOnInit(): void {
    this.options = new BehaviorSubject(
      { data: kruiChartRandomDateArray(10) as [number, number | null, any][], view: this.optionsForm.getRawValue() },
    );
    this.subscription = this.optionsForm.valueChanges.pipe(debounceTime(300)).subscribe(() => this.update());
  }

  public ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }

  public update(): void {
    // @ts-ignore
    this.options!.next(null);
    setTimeout(() => this.options!.next({
      data: this.optionsForm.getRawValue().axisX.type === 'number'
        ? kruiChartRdmNumberData(10).map((v: [number, number, any] | [number, null, string], i: number) => {
          if (i === 2) {
            return [2, null, ''];
          }
          return v;
        })
        : kruiChartRandomDateArray(10),
      view: this.optionsForm.getRawValue(),
    }));
  }
}
