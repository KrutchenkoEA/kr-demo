import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IKruiOptionsFormType, KRUI_CHART_FORM_CREATE_SERVICE, KruiChartFormCreateService } from '@kr-platform/ui';
import { KruiDataSourceFormType } from '../model';

/** @title Настройки */

@Component({
  selector: 'combo-chart-graph',
  templateUrl: './combo-chart-graph.component.html',
  styleUrl: './combo-chart-graph.component.scss',
  standalone: false,
})
export class ComboChartGraphComponent implements OnInit, OnDestroy {
  public form!: FormGroup<{
    optionsForm: IKruiOptionsFormType
    dataForm: FormGroup<{ dataSources: FormArray<KruiDataSourceFormType> }>
  }>;


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

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public update(): void {
    console.log('form', this.form.getRawValue());
  }
}
