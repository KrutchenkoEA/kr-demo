import { ChangeDetectionStrategy, Component, OnInit, Optional } from '@angular/core';
import {
  IKruiOptionsFormType,
  KRUI_CHART_LINE_INTERPOLATE,
  KRUI_CHART_POINT_MARKERS,
  KRUI_CHART_POINT_MARKERS_CONFIG,
  KruiAccordionModule,
  KruiChartComboModule,
  KruiCheckboxModule,
  KruiFormFieldModule,
  KruiSliderModule,
} from '@kr-platform/ui';
import { FormGroupDirective, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'kr-app-combo-chart-settings',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgForOf,
    KruiAccordionModule,
    KruiFormFieldModule,
    KruiChartComboModule,
    KruiCheckboxModule,
    KruiSliderModule,
  ],
  templateUrl: './combo-chart-settings.component.html',
  styleUrl: './combo-chart-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ComboChartSettingsComponent implements OnInit {
  protected readonly interpolation = KRUI_CHART_LINE_INTERPOLATE;
  protected readonly markers = KRUI_CHART_POINT_MARKERS;
  protected readonly dataMarkers = KRUI_CHART_POINT_MARKERS_CONFIG;
  public optionsForm: IKruiOptionsFormType | undefined;

  constructor(
    private readonly parentForm: FormGroupDirective,
    @Optional() public formGroupName: FormGroupName,
  ) {
  }

  public ngOnInit(): void {
    this.optionsForm = (
      this.formGroupName?.name ? this.parentForm.form.controls[this.formGroupName.name] : this.parentForm.form
    ) as IKruiOptionsFormType;

    if (this.optionsForm.controls.legend.value.legendType === 'simple-style') {
      this.optionsForm.controls.legend.controls.legendLayer.disable();
      this.optionsForm.controls.legend.controls.legendAxis.disable();
    }
  }
}
