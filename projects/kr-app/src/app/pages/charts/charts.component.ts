import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  IKruiChartSingleLayerInputModel,
  IKruiOptionsFormType,
  KRUI_CHART_FORM_CREATE_SERVICE, KruiAccordionModule,
  KruiChartComboModule,
  KruiChartFormCreateService,
} from '@kr-platform/ui';
import { BehaviorSubject } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { AsyncPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'kr-app-charts',
  imports: [
    KruiChartComboModule,
    ReactiveFormsModule,
    SvgIconComponent,
    AsyncPipe,
    NgForOf,
    KruiAccordionModule,
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsComponent {
  public optionsForm: IKruiOptionsFormType;

  public options: BehaviorSubject<{
    data: [any, number | null, any][]; view: IKruiChartSingleLayerInputModel;
  }> | undefined;

  constructor(@Inject(KRUI_CHART_FORM_CREATE_SERVICE) private readonly formCreateService: KruiChartFormCreateService) {
    this.optionsForm = this.formCreateService.createSettingFormDefault();
  }
}
