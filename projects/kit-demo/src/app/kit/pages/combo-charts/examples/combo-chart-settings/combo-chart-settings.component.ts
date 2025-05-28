import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  IKruiOptionsFormType,
  KRUI_CHART_LINE_INTERPOLATE,
  KRUI_CHART_POINT_MARKERS,
  KRUI_CHART_POINT_MARKERS_CONFIG,
} from '@kr-platform/ui';
import { FormGroupDirective, FormGroupName } from '@angular/forms';
import { ComboChartService } from '../combo-chart-graph/combo-chart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'combo-chart-settings',
  templateUrl: './combo-chart-settings.component.html',
  styleUrl: './combo-chart-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ComboChartSettingsComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  private readonly comboChartService = inject(ComboChartService);
  private readonly parentForm = inject(FormGroupDirective);
  public formGroupName = inject(FormGroupName, { optional: true });

  protected readonly interpolation = KRUI_CHART_LINE_INTERPOLATE;
  protected readonly markers = KRUI_CHART_POINT_MARKERS;
  protected readonly dataMarkers = KRUI_CHART_POINT_MARKERS_CONFIG;
  public optionsForm: IKruiOptionsFormType | undefined;

  public ngOnInit(): void {
    this.optionsForm = (
      this.formGroupName?.name ? this.parentForm.form.controls[this.formGroupName.name] : this.parentForm.form
    ) as IKruiOptionsFormType;

    if (this.optionsForm.controls.legend.value.legendType === 'simple-style') {
      this.optionsForm.controls.legend.controls.legendLayer.disable();
      this.optionsForm.controls.legend.controls.legendAxis.disable();
    }

    const isChartHorSub = this.comboChartService.isChartHorizontal$.subscribe(v => {
      if (v) {
        this.optionsForm!.patchValue({
          tooltip: { chartOrientation: 'horizontal', tooltipMarkerType: 'horizontal-line' },
          axisX: { primary: false, type: 'number' },
          axisY: { primary: true },
        });
      } else {
        this.optionsForm!.patchValue({
          tooltip: { chartOrientation: 'vertical', tooltipMarkerType: 'line' },
          axisX: { primary: true, type: 'time' },
          axisY: { primary: false },
        });
      }
    });
    this.subscriptions.push(isChartHorSub);
  }

  public ngOnDestroy(): void {
    this.subscriptions?.forEach((sub) => sub.unsubscribe());
    this.subscriptions = [];
  }
}
