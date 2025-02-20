import {Component, ElementRef, HostListener, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IKruiOptionsFormType, KRUI_CHART_FORM_CREATE_SERVICE, KruiChartFormCreateService} from '@kr-platform/ui';
import {KruiDataSourceFormType} from './model';
import {ComboChartService} from '@kr-platform/kit/pages/combo-charts/examples/combo-chart-graph/combo-chart.service';
import {filter, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

/** @title Настройки */

const DATA_PARAMS = {
  minValue: 2,
  maxValue: 50,
  dataLength: 50,
}

@Component({
  selector: 'combo-chart-graph',
  templateUrl: './combo-chart-graph.component.html',
  styleUrl: './combo-chart-graph.component.scss',
  standalone: false,
})
export class ComboChartGraphComponent implements OnInit, OnDestroy {
  @ViewChild('workArea', {read: ElementRef}) public workArea!: ElementRef;
  public subscriptions: Subscription[] = [];
  private readonly fb = inject(FormBuilder)

  public form!: FormGroup<{
    optionsForm: IKruiOptionsFormType,
    dataForm: FormGroup<{
      dataSources: FormArray<KruiDataSourceFormType>,
      dataParams: FormGroup<{
        minValue: FormControl;
        maxValue: FormControl;
        dataLength: FormControl;
      }>
    }>
  }>;

  private readonly formCreateService = inject<KruiChartFormCreateService>(KRUI_CHART_FORM_CREATE_SERVICE);
  public comboChartService = inject(ComboChartService)
  public autoRedraw: boolean = false;

  @HostListener('document:resize')
  public onResize(): void {
    this.checkWorkArea();
  }

  public ngOnDestroy(): void {
    this.subscriptions?.forEach((sub) => sub.unsubscribe());
    this.subscriptions = [];
  }

  public ngOnInit(): void {
    this.form = this.fb.group({
        optionsForm: this.formCreateService.createSettingFormDefault(),
        dataForm: this.fb.group({
          dataSources: this.fb.array<KruiDataSourceFormType>([]),
          dataParams: this.fb.group(DATA_PARAMS),
        }),
      },
    );

    const formSub = this.form.valueChanges
      .pipe(filter(() => this.autoRedraw), debounceTime(600))
      .subscribe(() => this.update())
    this.subscriptions.push(formSub)
  }

  public update(): void {
    //@ts-ignore
    this.comboChartService.update$.next(this.form.controls.optionsForm.value)
  }

  public reset(): void {
    this.comboChartService.reset$.next(null)
  }

  public autoRefresh(): void {
    this.comboChartService.autoRefresh$.next(!this.comboChartService.autoRefresh$.value)
  }

  public checkWorkArea(): void {
    this.comboChartService.chartSizeChanged$.next({
      width: this.workArea?.nativeElement?.clientWidth - 5,
      height: this.workArea?.nativeElement?.clientHeight - 2,
    });
  }
}
