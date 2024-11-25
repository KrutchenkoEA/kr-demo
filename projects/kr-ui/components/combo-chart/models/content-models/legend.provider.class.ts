import { KruiChartLegendInputs, KruiChartLegendGroup, KruiChartLegendType } from './legend.model';
import { EventEmitter } from '@angular/core';

export abstract class KruiChartLegendProvider implements KruiChartLegendInputs {
  abstract legend: boolean;
  abstract legendPosition: 'top' | 'bottom';
  abstract legendLayer: boolean;
  abstract legendAxis: boolean;
  abstract legendTrend: boolean;
  abstract legendHoverEffect: boolean;
  abstract legendType: KruiChartLegendType;
  abstract legendGroupsEmitter: EventEmitter<KruiChartLegendGroup[]>;
  abstract legendGroups: KruiChartLegendGroup[];
  abstract legendGroupDiv: HTMLDivElement | null;
  abstract simpleLegendGroupDiv: HTMLDivElement | null;
  abstract customLegendGroupDiv: HTMLElement | null;
}
