import { Subject } from 'rxjs';
import { KruiChartZoomType } from '../chart-models/chart.model';

export abstract class KruiChartToolbarModel implements KruiChartToolbarInputs {
  abstract toolbar: boolean;
  abstract toolbarPosition: 'top' | 'bottom';
  abstract toolbarJustifyContent: KruiChartToolbarJustifyContent;
  abstract zoomType: KruiChartZoomType;
  abstract zoomTypeDefault: KruiChartZoomType;
  abstract zoomType$: Subject<KruiChartZoomType>;

  abstract toolbarZoomIn(): void;

  abstract toolbarZoomOut(): void;

  abstract toggleZoomType(type: KruiChartZoomType): void;

  abstract toolbarRefresh(): void;

  abstract print(): void;

  abstract savePng(): void;
}

export type KruiChartToolbarJustifyContent =
  'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface KruiChartToolbarInputs {
  toolbar: boolean;
  toolbarPosition: 'top' | 'bottom';
  toolbarJustifyContent: KruiChartToolbarJustifyContent;
}
