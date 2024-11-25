import { Directive, Input } from '@angular/core';
import { KruiChartGridInputs, KruiChartGridProvider } from '../models';
import { KRUI_CHART_GRID_TOKEN } from '../injection-tokens';

@Directive({
  selector: 'krui-chart-grid',
  exportAs: 'kruiChartGrid',
  providers: [
    {
      provide: KruiChartGridProvider, useExisting: KruiChartGridDirective
    },
    {
      provide: KRUI_CHART_GRID_TOKEN, useExisting: KruiChartGridDirective
    }
  ]
})

export class KruiChartGridDirective implements KruiChartGridProvider, KruiChartGridInputs {
  @Input()
  axis!: string;

  @Input()
  color: string = '';

  @Input()
  drawGrid: boolean = true;
}
