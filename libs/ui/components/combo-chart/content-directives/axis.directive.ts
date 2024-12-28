import { KruiChartAxisInputs, KruiChartAxisPosition, KruiChartAxisProvider, KruiChartAxisType } from '../models';
import { Directive, Input } from '@angular/core';
import { KRUI_CHART_AXIS_TOKEN } from '../injection-tokens';

@Directive({
    selector: 'krui-chart-axis',
    exportAs: 'kruiChartAxis',
    providers: [
        {
            provide: KruiChartAxisProvider, useExisting: KruiChartAxisDirective
        },
        {
            provide: KRUI_CHART_AXIS_TOKEN, useExisting: KruiChartAxisDirective
        }
    ],
    standalone: false
})
export class KruiChartAxisDirective implements KruiChartAxisProvider, KruiChartAxisInputs {
  @Input()
  type: KruiChartAxisType = 'number';

  @Input()
  position!: KruiChartAxisPosition;

  @Input()
  min!: number;

  @Input()
  max!: number;

  @Input()
  ticks!: number;

  @Input()
  fontSize: number = 10;

  @Input()
  fontFamily: string = 'Tahoma';

  @Input()
  fontColor: string = '';

  @Input()
  name!: string;

  @Input()
  primary: boolean = false;

  @Input()
  color: string = '';

  @Input()
  drawAxisLabel: boolean = true;

  @Input()
  drawAxisLabelLine: boolean = true;
}
