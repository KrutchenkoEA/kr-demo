import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {
  IKruiChartSingleLayerInputModel,
  IKruiOptionsFormType,
  KRUI_CHART_FORM_CREATE_SERVICE,
  KRUI_CHART_LINE_INTERPOLATE,
  KRUI_CHART_POINT_MARKERS,
  KRUI_CHART_POINT_MARKERS_CONFIG,
  KruiChartFormCreateService,
  kruiChartRandomDateStackArray,
  kruiChartRangeBarMock1,
  kruiChartRangeBarMock2,
  kruiChartRangeBarStackMock,
  kruiChartRdmNumberStackData,
} from '@kr-platform/ui';


/** @title Настройки */

@Component({
  selector: 'chart-range-bar-setting',
  templateUrl: './chart-range-bar-setting.component.html',
  styleUrls: ['./chart-range-bar-setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartRangeBarSettingComponent {
  public data = kruiChartRangeBarMock1;
  public data2 = kruiChartRangeBarMock2;
  public data3 = kruiChartRangeBarStackMock;


  public interpolation = KRUI_CHART_LINE_INTERPOLATE;
  public markers = KRUI_CHART_POINT_MARKERS;
  public dataMarkers = KRUI_CHART_POINT_MARKERS_CONFIG;
  public optionsForm: IKruiOptionsFormType;
  public isChartHorizontal = new FormControl<boolean>(false);

  public bgColor = '#4b66c2';
  public brColor = '#bb5362';
  public brColor2 = 'rgb(242,171,171)';
  public bgColor2 = 'rgb(237,112,112)';

  public options: BehaviorSubject<{
    data: [any, any, any][][]; view: IKruiChartSingleLayerInputModel;
  }> | undefined;

  public subscription: Subscription[] = [];

  constructor(@Inject(KRUI_CHART_FORM_CREATE_SERVICE) private readonly formCreateService: KruiChartFormCreateService) {
    this.optionsForm = this.formCreateService.createSettingFormDefault();
  }

  public ngOnInit(): void {
    this.optionsForm.patchValue({
      tooltip: { tooltip: false },
      comboBarLayer: {
        common: {
          showValues: true,
        },
        config: {
          tooltipHoverEffect: true,
          barBorder: true,
        },
      },
    });

    this.options = new BehaviorSubject({
      data: [
        kruiChartRandomDateStackArray(10, 10, 100, new Date('2022-09-01T00:00:00.0000000Z')),
        kruiChartRandomDateStackArray(10, 10, 100, new Date('2022-09-01T00:00:00.0000000Z')),
      ],
      view: this.optionsForm.getRawValue(),
    });

    const sub1 = this.optionsForm.valueChanges.pipe(debounceTime(300)).subscribe(() => this.update());

    const sub2 = this.isChartHorizontal.valueChanges.pipe(debounceTime(300)).subscribe((v) => {
      if (v) {
        this.optionsForm.patchValue({
          tooltip: { chartOrientation: 'horizontal', tooltipMarkerType: 'none' },
          axisX: { primary: false, type: 'number' },
          axisY: { primary: true, type: 'number' },
        });
      } else {
        this.optionsForm.patchValue({
          tooltip: { chartOrientation: 'vertical', tooltipMarkerType: 'none' },
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
        [kruiChartRdmNumberStackData(10), kruiChartRdmNumberStackData(10)] :
        [
          kruiChartRandomDateStackArray(10, 10, 100, new Date('2022-09-01T00:00:00.0000000Z')),
          kruiChartRandomDateStackArray(10, 10, 100, new Date('2022-09-01T00:00:00.0000000Z')),
        ],
      view: this.optionsForm.getRawValue(),
    }));
  }
}
