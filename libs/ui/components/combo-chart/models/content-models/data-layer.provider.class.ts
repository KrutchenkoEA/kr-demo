import {
  IKruiChartDataLayerAnimationInputs,
  IKruiChartDataLayerColorInputs,
  IKruiChartDataLayerDrawConfigInputs,
  IKruiChartDataLayerValueShowerInputs,
} from './data-layer.model';
import { KruiChartAxisType } from './axis.model';
import { KruiChartLegendLabelData } from './legend.model';
import { KruiChartLayerDrawContext, KruiChartRenderTarget } from '../chart-models/base.model';
import { KruiChartLineDataPointType, KruiChartPointDataOptions } from '../data-models/line.model';
import { KruiChartTooltipType } from '../wrapper-models/tooltip-provider.model';
import { KruiChartTooltipDataRow } from './tooltip.model';
import { KruiChartWorkgroundPadding } from '../chart-models/chart.model';


export abstract class KruiChartDataLayerColorProvider implements IKruiChartDataLayerColorInputs {
  abstract _defaultColor: string;

  abstract _color: string;

  abstract set color(v: string | null | undefined) ;

  abstract _colors: string[];

  abstract set colors(v: string[] | null | undefined);

  abstract getColor(i?: number): string;
}

export abstract class KruiChartDataLayerValueShower implements IKruiChartDataLayerValueShowerInputs {
  abstract showValues: boolean;
  abstract valuesColor: string;
  abstract valuesFontSizePx: number;
  abstract valuesFontFamily: string;
  abstract captions: (string | number | Date)[];
  abstract engUnits: string[];
}

export abstract class KruiChartDataLayerAnimated implements IKruiChartDataLayerAnimationInputs {
  abstract durationAnimation: number;
  abstract durationToggleAnimation: number;
  abstract animation: boolean;
}

export abstract class KruiChartDataLayerProvider<U, V> implements IKruiChartDataLayerDrawConfigInputs {
  abstract state: Map<number, boolean>;
  abstract reRangeThenLegendClick: boolean;
  abstract reRangeThenDataChange: boolean;
  abstract useDefaultCheck: boolean;
  abstract workgroundPadding: KruiChartWorkgroundPadding;
  abstract withMinMaxCoef: boolean;
  abstract _minValue: number;
  abstract _maxValueCurrent: number;
  abstract _maxValueAbsolute: number;

  abstract getDomain(axisType: KruiChartAxisType | null): U[];

  abstract getRange(): V[];

  abstract _getMin(): void

  abstract _getMaxAbsolute(): void

  abstract _getMaxCurrent(): void

  abstract getWorkgroundPadding(axisType: KruiChartAxisType): KruiChartWorkgroundPadding;

  abstract getLegendData(): KruiChartLegendLabelData[] | null;
}

export abstract class KruiChartDataLayerRenderer {
  abstract _target: KruiChartRenderTarget;
  abstract _context: KruiChartLayerDrawContext;
  abstract _id: string;
  abstract _zoomK: number;

  abstract toggleState(trendIndex: number, hidden: boolean, durationToggleAnimation?: number): void;

  abstract toggleOpacity(trendIndex: number, hidden: boolean): void;

  abstract renderOpacity(active: boolean): void;

  abstract render(
    target: KruiChartRenderTarget,
    context: KruiChartLayerDrawContext,
    layerId: string,
  ): void;

  abstract reScale(
    target: KruiChartRenderTarget,
    context: KruiChartLayerDrawContext,
    event: any,
    zoomXEnable: boolean,
    zoomYEnable: boolean,
    animation: boolean,
  ): void;
}

export abstract class KruiChartDataPointProvider {
  abstract _pointMap: Map<string, [number, number][]>;
  abstract _pointMapSettings: Map<string, KruiChartPointDataOptions>;
  abstract _pointData: any[];
  /** Если `all` - на каждую точку проставляется метка, если `partial` -это для конкретных точек надо прописать `[4, 60, 'dataPoint']` или `[4, 60, 'dataFillPoint']` */
  abstract dataPointType: 'all' | 'partial';
  abstract dataPointColor: string | null;
  abstract dataPointStrokeColor: string | null;
  abstract breakPointType: 'auto' | 'config';
  abstract breakPoint: boolean;
  abstract breakPointColor: string;
  abstract breakPointStrokeColor: string;
  abstract breakPointSize: number;
  abstract breakPointStrokeSize: number;
  abstract breakPointLimit: number;
  abstract breakPointMarker: KruiChartLineDataPointType;
  abstract endPoint: boolean;
  abstract endPointSize: number;
  abstract endPointStrokeSize: number;

  abstract set setPointMapSettings(val: { key: string, opt: KruiChartPointDataOptions }[])
}

export abstract class KruiChartDataLayerTooltipProvider<U> {
  abstract _hoveredTooltipEnumBar: HTMLElement | null;
  abstract _enumTooltipTimeout: any;
  abstract _bandwidth: number | undefined;

  abstract getTooltipData(
    value: U,
    tooltipType: KruiChartTooltipType,
    axisType: KruiChartAxisType,
  ): KruiChartTooltipDataRow[];

  abstract getTooltipTitleEnum(): string | null;

  abstract getTooltipDataEnum(value: U): KruiChartTooltipDataRow[];

  abstract triggerEnumTooltipTimeout(): void

  abstract getBandWidth(): number;
}
