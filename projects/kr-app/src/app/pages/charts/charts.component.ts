import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  IKruiChartSingleLayerInputModel,
  IKruiOptionsFormType,
  KRUI_CHART_FORM_CREATE_SERVICE,
  KRUI_CHART_LINE_INTERPOLATE,
  KRUI_CHART_POINT_MARKERS,
  KRUI_CHART_POINT_MARKERS_CONFIG,
  KruiAccordionModule, KruiButtonModule,
  KruiChartComboModule,
  KruiChartFormCreateService,
  kruiChartRandomDateArray,
  kruiChartRdmNumberData,
  KruiCheckboxModule,
  KruiFormFieldModule,
  KruiSliderModule,
} from '@kr-platform/ui';
import { BehaviorSubject, debounceTime, Subscription } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { AsyncPipe, NgForOf } from '@angular/common';
import { SplitAreaComponent, SplitComponent } from 'angular-split';

@Component({
  selector: 'kr-app-charts',
  imports: [
    KruiChartComboModule,
    ReactiveFormsModule,
    SvgIconComponent,
    AsyncPipe,
    NgForOf,
    KruiAccordionModule,
    KruiFormFieldModule,
    KruiCheckboxModule,
    KruiSliderModule,
    KruiButtonModule,
    SplitComponent,
    SplitAreaComponent,
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsComponent implements OnInit, OnDestroy {
  public interpolation = KRUI_CHART_LINE_INTERPOLATE;
  public markers = KRUI_CHART_POINT_MARKERS;
  public dataMarkers = KRUI_CHART_POINT_MARKERS_CONFIG;
  public optionsForm: IKruiOptionsFormType;

  public options: BehaviorSubject<{
    data: [any, number | null, any][]; view: IKruiChartSingleLayerInputModel;
  }> | undefined;

  public subscription: Subscription | undefined;

  constructor(@Inject(KRUI_CHART_FORM_CREATE_SERVICE) private readonly formCreateService: KruiChartFormCreateService) {
    this.optionsForm = this.formCreateService.createSettingFormDefault();
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
