import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import {
  IKruiChartSingleLayerInputModel,
  IKruiOptionsFormType,
  KRUI_CHART_FORM_CREATE_SERVICE,
  KRUI_CHART_LINE_INTERPOLATE,
  KRUI_CHART_POINT_MARKERS,
  KRUI_CHART_POINT_MARKERS_CONFIG,
  KruiChartFormCreateService,
  kruiChartRandomDateArray,
  kruiChartRdmNumberData,
} from '@kr-platform/ui';

/** @title Настройки */

@Component({
  selector: 'chart-setting-bar',
  templateUrl: './chart-setting-bar.component.html',
  styleUrls: ['./chart-setting-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartSettingBarComponent implements OnInit, OnDestroy {
  public interpolation = KRUI_CHART_LINE_INTERPOLATE;
  public markers = KRUI_CHART_POINT_MARKERS;
  public dataMarkers = KRUI_CHART_POINT_MARKERS_CONFIG;
  public optionsForm: IKruiOptionsFormType;
  public isChartHorizontal = new FormControl<boolean>(false);

  public options: BehaviorSubject<{
    data: [any, number, any][]; view: IKruiChartSingleLayerInputModel;
  }> | undefined;

  public subscription: Subscription[] = [];

  constructor(@Inject(KRUI_CHART_FORM_CREATE_SERVICE) private readonly formCreateService: KruiChartFormCreateService) {
    this.optionsForm = this.formCreateService.createSettingFormDefault();
  }

  public ngOnInit(): void {
    this.options = new BehaviorSubject(
      { data: kruiChartRandomDateArray(10), view: this.optionsForm.getRawValue() },
    );
    const sub1 = this.optionsForm.valueChanges.pipe(debounceTime(300)).subscribe(() => this.update());

    const sub2 = this.isChartHorizontal.valueChanges.pipe(debounceTime(300)).subscribe((v) => {
      if (v) {
        this.optionsForm.patchValue({
          tooltip: { chartOrientation: 'horizontal', tooltipMarkerType: 'horizontal-line' },
          axisX: { primary: false, type: 'number' },
          axisY: { primary: true, type: 'number' },
        });
      } else {
        this.optionsForm.patchValue({
          tooltip: { chartOrientation: 'vertical', tooltipMarkerType: 'line' },
          axisX: { primary: true, type: 'time' },
          axisY: { primary: false, type: 'number' },
        });
      }
    });

    this.subscription = [sub1, sub2];
  }

  public ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  public update(): void {
    // @ts-ignore
    this.options!.next(null);
    setTimeout(() => this.options!.next({
      data: this.optionsForm.getRawValue().axisX.type === 'number' ?
        kruiChartRdmNumberData(10) :
        kruiChartRandomDateArray(10),
      view: this.optionsForm.getRawValue(),
    }));
  }
}
