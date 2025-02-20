import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IKruiOptionsFormType, KRUI_CHART_FORM_CREATE_SERVICE, KruiChartFormCreateService } from '@kr-platform/ui';
import { KruiDataSourceFormType } from './model';
import { BehaviorSubject } from 'rxjs';
import { IDashboardItemOptions } from '@kr-platform/kit/pages/combo-charts/examples/combo-chart-view/model';

/** @title Настройки */

@Component({
  selector: 'combo-chart-graph',
  templateUrl: './combo-chart-graph.component.html',
  styleUrl: './combo-chart-graph.component.scss',
  standalone: false,
})
export class ComboChartGraphComponent implements OnInit, OnDestroy, AfterViewInit {
  public form!: FormGroup<{
    optionsForm: IKruiOptionsFormType
    dataForm: FormGroup<{ dataSources: FormArray<KruiDataSourceFormType> }>
  }>;


  public chartOptions = new BehaviorSubject<IDashboardItemOptions | null>(null);

  constructor(
    @Inject(KRUI_CHART_FORM_CREATE_SERVICE) private readonly formCreateService: KruiChartFormCreateService,
    private readonly fb: FormBuilder,
  ) {
    this.form = this.fb.group({
        optionsForm: this.formCreateService.createSettingFormDefault(),
        dataForm: this.fb.group({ dataSources: this.fb.array<KruiDataSourceFormType>([]) }),
      },
    );
  }

  public ngAfterViewInit(): void {
    this.update();
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
  }

  public update(): void {
    const formValue = this.form.getRawValue();
    console.log('form', formValue);

    this.chartOptions.next({
      exampleView: false,
      data: formValue.dataForm.dataSources,
      view: formValue.optionsForm,
    });
  }

  public reset(): void {

  }

  public autoRefresh(): void {


  }
}
