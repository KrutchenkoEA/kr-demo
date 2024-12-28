import { Directive, Host, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { ZoomTransform } from 'd3';
import { adaptiveFixed, transformCaption } from '../constants/inner/function';
import { customXSymbol } from '../constants/inner/line.const';
import { getKruiChartPointMapSettings, getLineDefaultCommon, getLineDefaultInputs } from '../constants';
import { axisIsEnum, notNul } from '../constants/inner/pure';
import { KruiChartLayerDirective } from '../content-directives/layer.directive';
import { KRUI_CHART_LAYER_TOKEN, KRUI_CHART_PALETTE_PROVIDER_TOKEN, KRUI_CHART_WRAP_TOKEN } from '../injection-tokens';
import {
  IKruiChartDataLayerLineInputs,
  KruiChartAxisType,
  KruiChartDataLayerAnimated,
  KruiChartDataLayerColorProvider,
  KruiChartDataLayerProvider,
  KruiChartDataLayerRenderer,
  KruiChartDataLayerTooltipProvider,
  KruiChartDataLayerValueShower,
  KruiChartDataPointProvider,
  KruiChartLayerDrawContext,
  KruiChartLegendLabelData,
  KruiChartLineData,
  KruiChartLineDataPointConfigType,
  KruiChartLineDataPointType,
  KruiChartLineDynamics,
  KruiChartLineInputData,
  KruiChartPaletteProvider,
  KruiChartPointDataOptions,
  KruiChartRenderTarget,
  KruiChartScale,
  KruiChartScaleLinear,
  KruiChartTooltipDataRow,
  KruiChartTooltipType,
  KruiChartWorkgroundPadding,
} from '../models';
import { KruiChartWrapperDirective } from '../wrapper-directives/wrapper.directive';


@Directive({
  selector: '[kruiChartLine]',
  exportAs: 'kruiChartLine',
  providers: [
    {
      provide: KruiChartDataLayerColorProvider,
      useExisting: KruiChartLineDirective,
    },
    {
      provide: KruiChartDataLayerValueShower,
      useExisting: KruiChartLineDirective,
    },
    {
      provide: KruiChartDataLayerAnimated,
      useExisting: KruiChartLineDirective,
    },
    {
      provide: KruiChartDataLayerProvider,
      useExisting: KruiChartLineDirective,
    },
    {
      provide: KruiChartDataPointProvider,
      useExisting: KruiChartLineDirective,
    },
    {
      provide: KruiChartDataLayerRenderer,
      useExisting: KruiChartLineDirective,
    },
    {
      provide: KruiChartDataLayerTooltipProvider,
      useExisting: KruiChartLineDirective,
    },
  ],
  standalone: false,
})
export class KruiChartLineDirective implements OnInit,
  OnChanges,
  KruiChartDataLayerColorProvider,
  KruiChartDataLayerValueShower,
  KruiChartDataLayerAnimated,
  KruiChartDataLayerProvider<number | string, number>,
  KruiChartDataPointProvider,
  KruiChartDataLayerRenderer,
  KruiChartDataLayerTooltipProvider<number | string>,
  IKruiChartDataLayerLineInputs {

  // region definition

  public _defaultColor!: string;

  @Input() public showValues: boolean = false;
  @Input() public valuesColor!: string;
  @Input() public valuesFontSizePx: number = 12;
  @Input() public valuesFontFamily: string = 'Tahoma';
  @Input() public captions: (string | number | Date)[] = [''];
  @Input() public engUnits: string[] = [''];

  @Input() public animation: boolean = true;
  @Input() public durationAnimation: number = 2000;
  @Input() public durationToggleAnimation: number = 500;

  public state: Map<number, boolean> = new Map<number, boolean>();
  public opacityState: Map<number, boolean> = new Map<number, boolean>();

  /** Перерисовка осей графика по клику на легенду */
  @Input() public reRangeThenLegendClick: boolean = true;
  @Input() public reRangeThenDataChange: boolean = true;
  @Input() public workgroundPadding: KruiChartWorkgroundPadding = { top: 5, right: 10, left: 10, bottom: 5 };
  @Input() public useDefaultCheck: boolean = true;
  public _minValue: number = 0;
  public _maxValueCurrent: number = 0;
  public _maxValueAbsolute: number = 0;

  public _target!: KruiChartRenderTarget;
  public _context!: KruiChartLayerDrawContext;
  public _id!: string;
  public _zoomK: number = 1;
  public _zoomTransform: ZoomTransform = d3.zoomIdentity;

  @Input() public interpolateEnable: boolean = false;
  @Input() public extendStep: number = 10;

  public _pointMap: Map<string, [number, number][]> = new Map<string, [number, number][]>();
  public _pointMapSettings: Map<string, KruiChartPointDataOptions> = new Map(getKruiChartPointMapSettings());
  public _pointData: any[] = [];
  /** Если `all` - на каждую точку проставляется метка, если `partial` -это для конкретных точек надо прописать `[4, 60, 'dataPoint']` или `[4, 60, 'dataFillPoint']` */
  @Input() dataPointType: 'all' | 'partial' = 'partial';
  @Input() dataPointColor!: string | null;
  @Input() dataPointStrokeColor!: string | null;
  @Input() dataPointMarker: KruiChartLineDataPointConfigType = 'dataPoint';
  /**
   * Если используется 'auto', то точки определяются по второму значению точки данных, равному null: `[4, null]`.
   * Eсли 'config', то в точку данных нужно передать   `[4, 60, 'breakPoint']`
   */
  @Input() breakPointType: 'auto' | 'config' = 'auto';
  @Input() breakPoint: boolean = true;
  @Input() breakPointColor!: string;
  @Input() breakPointStrokeColor!: string;
  @Input() breakPointSize: number = 4;
  @Input() breakPointStrokeSize: number = 0;
  @Input() breakPointLimit: number = 50;
  @Input() breakPointMarker: KruiChartLineDataPointType = 'symbolX';
  @Input() endPoint: boolean = true;
  @Input() endPointSize: number = 2;
  @Input() endPointStrokeSize: number = 7;

  public _hoveredTooltipEnumBar: HTMLElement | null = null;
  public _enumTooltipTimeout: any;
  public _bandwidth: number | undefined;

  @Input() public lineType: 'line' | 'area' = 'line';
  @Input() public lineDynamics: KruiChartLineDynamics = 'curveLinear';
  @Input() public lineOpacity: number = 1;
  @Input() public lineWidth: number = 2;

  private _tempDurationAnimation: number = 0;
  private _data!: KruiChartLineData[];
  private _initialData!: KruiChartLineData[];
  private _extendedData: [number, number | null, string | null, string | null][] = [];
  private _d3PathLine: any;
  private _d3PathArea: any;

  // endregion

  constructor(
    @Inject(KRUI_CHART_PALETTE_PROVIDER_TOKEN) @Host() public paletteProvider: KruiChartPaletteProvider,
    @Inject(KRUI_CHART_WRAP_TOKEN) @Host() public wrap: KruiChartWrapperDirective,
    @Inject(KRUI_CHART_LAYER_TOKEN) @Host() public layerDirective: KruiChartLayerDirective,
  ) {
    this._defaultColor = this.paletteProvider.nextColor();
  }

  // region colors

  /** Стандартные значения доступны по ключам: dataPoint, dataFillPoint, dataPointReWrite, dataFillPointReWrite, breakPoint, breakPointTransparentBg, reWritePoint. */
  @Input()
  set setPointMapSettings(val: { key: string, opt: KruiChartPointDataOptions }[]) {
    if (!!val?.length) {
      val.forEach(v => this._pointMapSettings.set(v.key, Object.assign({}, v.opt)));
    }
  }

  public _color!: string;

  get color(): string {
    return this._color;
  }

  @Input() set color(color: string | null | undefined) {
    if (!color) {
      this._color = this._defaultColor;
    } else {
      this._color = color;
    }
  }

  public _colors!: string[];

  get colors(): string[] {
    return this._colors;
  }

  /** Для создания градиента передать несколько цветов */
  @Input() set colors(colors: string[] | null | undefined) {
    if (!colors) {
      this._colors = [this._defaultColor];
    } else {
      this._colors = colors;
    }
  }

  // endregion

  // region data

  @Input('data') set inputData(value: KruiChartLineInputData[]) {
    if (!value?.length) {
      this._data = [];
      this._extendedData = [];
      this._initialData = [];
      this._pointData = [];
      return;
    }

    let newValue: KruiChartLineData[] = [];
    switch (Object.prototype.toString.call(value[0]?.[0])) {
      case '[object Date]':
        newValue = value
          .map((d) => [(d[0] as Date).getTime(), d[1], d[2] ?? null, d[3] ?? null])
          ?.sort() as KruiChartLineData[];

        this._initialData = value
          .map((d) => [(d[0] as Date).getTime(), d[1], d[2] ?? null, d[3] ?? null])
          ?.sort() as KruiChartLineData[];

        this._pointData = value.map((d) => [
          (d[0] as Date).getTime(), d[1], d[2] ?? null, d[3] ?? null,
        ]) as KruiChartLineData[];
        this._pointData?.sort();

        break;
      case '[object String]':
        newValue = value
          .map((d) => [new Date(d[0]).getTime(), d[1], d[2] ?? null, d[3] ?? null])
          ?.sort((a, b) => ((a[0] as number) - (b[0] as number)) >= 0 ? 1 : 0) as KruiChartLineData[];

        this._initialData = value
          .map((d) => [new Date(d[0]).getTime(), d[1], d[2] ?? null, d[3] ?? null])
          ?.sort((a, b) => ((a[0] as number) - (b[0] as number)) >= 0 ? 1 : 0) as KruiChartLineData[];

        this._pointData = value.map((d) => [
          new Date(d[0]).getTime(), d[1], d[2] ?? null, d[3] ?? null,
        ]) as KruiChartLineData[];
        this._pointData?.sort((a, b) => ((a[0] as number) - (b[0] as number)) >= 0 ? 1 : 0);

        break;
      case '[object Number]':
        newValue = value
          .map((d) => [d[0] as number, d[1], d[2] ?? null, d[3] ?? null])
          ?.sort((a, b) => ((a[0] as number) - (b[0] as number)) >= 0 ? 1 : 0) as KruiChartLineData[];

        this._initialData = value
          .map((d) => [d[0] as number, d[1], d[2] ?? null, d[3] ?? null])
          ?.sort((a, b) => ((a[0] as number) - (b[0] as number)) >= 0 ? 1 : 0) as KruiChartLineData[];

        this._pointData = value.map((d) => [d[0] as number, d[1], d[2] ?? null, d[3] ?? null]) as KruiChartLineData[];
        this._pointData?.sort((a, b) => ((a[0] as number) - (b[0] as number)) >= 0 ? 1 : 0);

        break;
    }
    this._data = newValue.slice(0);

    if (newValue?.length < 10000) {
      this._extendedData = [];
      newValue?.forEach((d, i, a) => {
        if (!a[i + 1]) return;

        let sx;
        let ex;
        const sy = a[i][1];
        const ey = a[i + 1][1];
        sx = a[i][0];
        ex = a[i + 1][0];

        const dx = (ex - sx) / this.extendStep;
        const dy = (ey - sy) / this.extendStep;
        let ix = dx;
        let iy = dy;

        while (ix <= (ex - sx)) {
          if (ix === 0 && (ex - sx) === 0) {
            break;
          }
          if (sy === null || ey === null) {
            this._extendedData.push([sx + ix, null, d[2] ?? null, d[3] ?? null]);
          } else {
            this._extendedData.push([sx + ix, sy + iy, d[2] ?? null, d[3] ?? null]);
          }
          ix = +(ix + dx).toFixed(2);
          iy = iy + dy;
        }
      });
    } else {
      this._extendedData = newValue.slice();
    }

    this._getMin();
    this._getMaxAbsolute();
  }

  // endregion

  public ngOnInit(): void {

    if (!this._color) {
      this.color = null;
    }

    if (!this._colors) {
      this.colors = null;
    }

    if (!this.valuesColor) {
      this.valuesColor = this.color;
    }

    const defColor = this.getColor();

    if (!this.breakPointColor) this.breakPointColor = defColor;
    if (!this.breakPointStrokeColor) this.breakPointStrokeColor = defColor;

    if (this.useDefaultCheck) {
      Object.entries(getLineDefaultCommon())?.forEach(([key, value]) => {
        // @ts-ignore
        if (this[key] === null || this[key] === undefined) {
          // @ts-ignore
          this[key] = value;
        }
      });

      Object.entries(getLineDefaultInputs())?.forEach(([key, value]) => {
        // @ts-ignore
        if (this[key] === null || this[key] === undefined) {
          // @ts-ignore
          this[key] = value;
        }
      });
    }

    for (let [key, opt] of this._pointMapSettings.entries()) {
      if (!opt?.['pointColor'] || opt?.['pointColor'] == 'auto') {
        opt['pointColor'] = defColor;
      }
      if (!opt?.['pointStrokeColor'] || opt?.['pointStrokeColor'] == 'auto') {
        opt['pointStrokeColor'] = defColor;
      }
      if (opt?.['pointColor'] == 'wrapBg') {
        opt['pointColor'] = this.wrap.bgColor;
      }
      if (opt?.['pointStrokeColor'] == 'wrapBg') {
        opt['pointStrokeColor'] = this.wrap.bgColor;
      }

      if (key === 'dataPoint' || key === 'dataFillPoint' || key === 'dataPointReWrite' || key === 'dataFillPointReWrite') {
        if (!!this.dataPointColor) {
          opt['pointColor'] = this.dataPointColor;
        }
        if (!!this.dataPointStrokeColor) {
          opt['pointStrokeColor'] = this.dataPointStrokeColor;
        }
      }
    }

    this._d3PathLine = d3
      .line()
      .curve(d3[this.lineDynamics])
      .x(([a]) => a)
      .y(([, b]) => b)
      .defined((d, i) => d[0] != this._minValue && d[1] != this._minValue);

    if (this.lineType === 'area') {
      this._d3PathArea = d3
        .area()
        .curve(d3[this.lineDynamics])
        .x(([a]) => a)
        .y0(() => this._context.secondaryAxis.d3Scale.range()[0])
        .y1(([, b]) => b)
        .defined((d, i) => d[0] != this._minValue && d[1] != this._minValue);
    }
  }

  public ngOnChanges({ inputData }: SimpleChanges): void {
    if (!inputData?.isFirstChange()) {
      this.layerDirective.reDraw(null, false, true);
    }
    const defColor = this.getColor();
    for (let [key, opt] of this._pointMapSettings.entries()) {
      if (!opt?.['pointColor'] || opt?.['pointColor'] == 'auto') {
        opt['pointColor'] = defColor;
      }
      if (!opt?.['pointStrokeColor'] || opt?.['pointStrokeColor'] == 'auto') {
        opt['pointStrokeColor'] = defColor;
      }
      if (opt?.['pointColor'] == 'wrapBg') {
        opt['pointColor'] = this.wrap.bgColor;
      }
      if (opt?.['pointStrokeColor'] == 'wrapBg') {
        opt['pointStrokeColor'] = this.wrap.bgColor;
      }
    }

    this._tempDurationAnimation = this.durationAnimation;
  }

  // region get functions

  public getColor(i = 0): string {
    if (this.lineType === 'area') {
      return this.colors?.[i] ?? this.color;
    }
    return this.color;
  }

  public getDomain(axisType: KruiChartAxisType | null): number[] | string[] {
    if (axisType && axisType === 'enum') {
      return this._data?.map((line) => line[3] ?? line[0]?.toString());
    }
    return this._data?.map((line) => notNul(line[0]));
  }

  public getRange(): number[] {
    return [
      this._minValue,
      (this.reRangeThenLegendClick || this.reRangeThenDataChange) ? this._maxValueCurrent : this._maxValueAbsolute,
    ];
  }

  public _getMin(): void {
    let min = Number.POSITIVE_INFINITY;
    this._data?.forEach(([a, b]) => {
      if (b != null) {
        min = Math.min(min, b);
      }
    });
    if (min === 0) {
      this._minValue = 0.001;
    } else {
      this._minValue = min > 0 ? this.getCoefficient(min, '0') * min : this.getCoefficient(min, '1') * min;
    }
  }

  public _getMaxAbsolute(): void {
    let max = Number.NEGATIVE_INFINITY;
    this._data?.forEach(([, b], index) => {
      if (b != null) {
        max = Math.max(max, b);
      } else {
        max = Math.max(max, this._minValue);
      }
    });
    this._maxValueAbsolute = max > 0 ? this.getCoefficient(max, '1') * max : this.getCoefficient(max, '0') * max;
    this._maxValueCurrent = max > 0 ? this.getCoefficient(max, '1') * max : this.getCoefficient(max, '0') * max;
  }

  public _getMaxCurrent(): void {
    if (this.state.get(0)) {
      this._maxValueCurrent = this._minValue;
      return;
    }
    let max = Number.NEGATIVE_INFINITY;
    this._data?.forEach(([, b], index) => {
      if (b != null) {
        max = Math.max(max, b);
      } else {
        max = Math.max(max, this._minValue);
      }
    });
    this._maxValueCurrent = max > 0 ? this.getCoefficient(max, '1') * max : this.getCoefficient(max, '0') * max;
  }

  public getWorkgroundPadding(): KruiChartWorkgroundPadding {
    return this.workgroundPadding;
  }

  public getLegendData(): KruiChartLegendLabelData[] {
    return [
      {
        title: transformCaption(this.captions[0]),
        color: this.getColor(),
        inactive: this.state.get(0) ?? false,
        type: 'single',
        disabled: !this._initialData?.length,
        hovered: this.opacityState.get(0) ?? false,
      },
    ];
  }

  // endregion

  // region toggle

  public toggleState(
    trendIndex: number,
    hidden: boolean,
    durationToggleAnimation: number,
  ): void {
    this.state.set(trendIndex, hidden);
    this._hoveredTooltipEnumBar = null;
    this._getMaxCurrent();
    durationToggleAnimation = this.animation ? this.durationToggleAnimation : 0;

    if (hidden) {
      const translateValue = this.wrap.height;
      const points: [number, number, string | null, string | null][] = [
        [this._context.primaryAxis.d3Scale.range()[0], this._context.secondaryAxis.d3Scale.range()[0], null, null],
      ];

      this._target
        .select(`#${this._id}--points-container`)
        .transition()
        .duration(durationToggleAnimation)
        .attr('transform', `translate(0, ${translateValue})`);
      this._target
        .select(`#${this._id}--labels-container`)
        .transition()
        .duration(durationToggleAnimation)
        .attr('transform', `translate(0, ${translateValue})`);

      this._target!.select(`#${this._id}--line`)
        .transition()
        .duration(durationToggleAnimation)
        .attr('d', this._d3PathLine(points))
        .attr('opacity', 0);

      if (this.lineType === 'area') {
        this._target!.select(`#${this._id}--line-area`)
          .transition()
          .duration(durationToggleAnimation)
          .attr('d', this._d3PathArea(points));
      }
    } else {

      this._target!.select(`#${this._id}--line`)
        .attr('opacity', 1);

      this.reScale(this._target, this._context, this._zoomTransform, true, true, true);
    }
  }


  public toggleOpacity(
    trendIndex: number,
    hidden: boolean,
  ): void {
    this.opacityState.set(trendIndex, hidden);
  }

  public renderOpacity(active: boolean): void {
    if (this.opacityState.get(0)) return;

    if (active) {
      this._target.attr('class', 'krui-chart-data-layer krui-chart-data-layer--opacity');
    } else {
      this._target.attr('class', 'krui-chart-data-layer');
    }
  }

  // endregion

  // region render

  public render(
    target: KruiChartRenderTarget,
    context: KruiChartLayerDrawContext,
    id: string,
  ): void {
    if (!this._initialData?.length) return;

    this._context = context;
    this._target = target;
    this._id = id;
    const x = context.primaryAxis.d3Scale as KruiChartScale;
    const y = context.secondaryAxis.d3Scale as KruiChartScale;

    this.renderPath(target, context, x, y);
  }

  public reScale(
    target: KruiChartRenderTarget,
    context: KruiChartLayerDrawContext,
    zoomTransform: ZoomTransform,
    zoomXEnable: boolean,
    zoomYEnable: boolean,
    animation: boolean,
  ): void {
    if (!this._initialData?.length) return;

    this._context = context;
    this._target = target;
    this._zoomTransform = zoomTransform;

    if ((zoomTransform.k !== this._zoomK)) {
      this._zoomK = zoomTransform.k;
    }

    if (this.state.get(0)) {
      return;
    }

    if (this.interpolateEnable) {
      this.interpolateData(zoomTransform.k);
    }

    const type = context.primaryAxis.type;
    let primaryAxis = context!.primaryAxis.d3Scale as KruiChartScaleLinear;
    let secondaryAxis = context!.secondaryAxis.d3Scale as KruiChartScaleLinear;

    if (type === 'time' || type === 'number') {
      if (zoomXEnable) {
        primaryAxis = zoomTransform.rescaleX(primaryAxis);
      }
      if (zoomYEnable) {
        secondaryAxis = zoomTransform.rescaleY(secondaryAxis);
      }
    } else if (type === 'enum') {
      this._bandwidth = (primaryAxis as unknown as d3.ScaleBand<any>)?.bandwidth();
    }

    const tempDurationAnimation = animation ? this.durationToggleAnimation : 0;

    const points = this.getPoints(primaryAxis, secondaryAxis, [], axisIsEnum(primaryAxis, type));
    this.getTypesPoints(primaryAxis, secondaryAxis);

    target!.select(`#${this._id}--line`)
      .transition()
      .duration(tempDurationAnimation)
      .attr('d', this._d3PathLine(points));

    if (this.lineType === 'area') {
      target!.select(`#${this._id}--line-area`)
        .transition()
        .duration(tempDurationAnimation)
        .attr('d', this._d3PathArea(points));
    }

    if (type === 'enum') {
      (target.selectAll('.krui-chart-tooltip-bar') as d3.Selection<SVGTextElement, KruiChartLineData, SVGTextElement, unknown>)
        .attr('width', () => notNul(this._bandwidth))
        .attr('transform', d => {
          // @ts-ignore
          return `translate(${notNul(primaryAxis(d[3]))}, 0)`;
        });
    }

    if (points.length) {
      this.drawPoints(target, points);
    }
    if (this.showValues) {
      this.drawValues(target, points);
    }
  }

  public getTooltipData(
    event: number,
    tooltipType: KruiChartTooltipType,
    axisType: KruiChartAxisType,
  ): KruiChartTooltipDataRow[] {
    const nullObject = [
      {
        valueTitle: '',
        color: '',
        hidden: true,
        index: 0,
        title: '',
        value: null,
        engUnits: '',
        type: this.lineType,
      },
    ];
    if (!this._initialData?.length) return nullObject;

    const data: any = (tooltipType === 'dataPoint') ? this._initialData : this._extendedData;

    const bisectData = d3.bisector((d: any[]) => d[0]).center;
    const index = bisectData(data, event);

    if (index === undefined || index === null) return nullObject;

    if (tooltipType === 'fullLine') {
      if (data.length === 0) return nullObject;
      const equal = (event - (data[index + 1]?.[0] ?? data[index]?.[0])) / ((data[index + 1]?.[0] ?? data[index]?.[0] + 0.1) - data[index]?.[0]);
      if (equal > 1 || equal < -2.5 || isNaN(equal)) return nullObject;
    }

    return [
      {
        value: data[index]?.[1],
        valueTitle: data[index]?.[0],
        title: transformCaption(this.captions[0]),
        color: this.getColor(),
        hidden: this.state.get(0) ?? false,
        index,
        engUnits: this.engUnits[0],
        type: this.lineType,
      },
    ];
  }

  public getTooltipTitleEnum(): string | null {
    return !this.state.get(0)
      ? this._hoveredTooltipEnumBar?.getAttribute('tooltipData') ?? null
      : null;
  }

  public getTooltipDataEnum(value: string): KruiChartTooltipDataRow[] {
    const nullObject = [
      {
        valueTitle: '',
        color: '',
        hidden: true,
        index: 0,
        title: '',
        value: null,
        engUnits: '',
        type: this.lineType,
      },
    ];
    if (!this._initialData?.length) return nullObject;
    const data: any = this._initialData;
    const index = this._data.findIndex(d => d[3] === value);
    if (index === undefined || index === null || index === -1) return nullObject;

    return [
      {
        value: data[index]?.[1],
        valueTitle: data[index]?.[3],
        title: transformCaption(this.captions[0]),
        color: this.getColor(),
        hidden: this.state.get(0) ?? false,
        index,
        engUnits: this.engUnits[0],
        type: this.lineType,
      },
    ];
  }

  public triggerEnumTooltipTimeout(): void {
    if (this._enumTooltipTimeout) {
      clearTimeout(this._enumTooltipTimeout);
    }
    this._enumTooltipTimeout = setTimeout(() => {
      this._hoveredTooltipEnumBar = null;
      this._enumTooltipTimeout = null;
    }, 500);
  }

  public getBandWidth(): number {
    return this._bandwidth ?? 0;
  }

  private renderPath(
    target: KruiChartRenderTarget,
    context: KruiChartLayerDrawContext,
    primaryAxis: KruiChartScale,
    secondaryAxis: KruiChartScale,
  ): void {
    if (!this._initialData?.length) return;
    const type = context.primaryAxis.type;
    if (this.interpolateEnable || type === 'enum') {
      setTimeout(() => this.reScale(target, this._context, d3.zoomIdentity, true, false, false));
    }

    const points = this.getPoints(primaryAxis, secondaryAxis, [], axisIsEnum(primaryAxis, type));
    this.getTypesPoints(primaryAxis, secondaryAxis);

    const clipPathAnimation = target
      .append('clipPath')
      .attr('id', `${this._id}--clipPath-gradient-animation`)
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 0)
      .attr('height', this.wrap.workGroundHeight);

    target.append('path')
      .attr('class', 'krui-chart-line')
      .attr('id', `${this._id}--line`)
      .attr('stroke', this.color)
      .attr('stroke-width', `${this.lineWidth}px`)
      .attr('opacity', this.lineOpacity)
      .attr('fill', 'none')
      .attr('d', this._d3PathLine(points))
      .attr('clip-path', `url(#${this._id}--clipPath-gradient-animation)`);

    if (this.lineType === 'area') {
      const gradientLen = this.colors.length;
      const gradientData: { color: string, offset: string, stopOpacity: number }[] = gradientLen > 1
        ? this.colors.map((c, i) => {
          return { color: c, offset: 100 / (gradientLen - 1) * i + '%', stopOpacity: 1 };
        })
        : [
          { offset: '0%', color: this.colors[0], stopOpacity: 1 },
          { offset: '100%', color: this.colors[0], stopOpacity: 1 },
        ];

      target.append('linearGradient')
        .attr('id', `${this._id}--area-filling`)
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', '100%')
        .selectAll('stop')
        .data(gradientData)
        .enter()
        .append('stop')
        .attr('offset', d => d.offset)
        .attr('stop-color', d => d.color)
        .attr('stop-opacity', d => d.stopOpacity);

      target.append('path')
        .attr('class', 'krui-chart-line-area')
        .attr('id', `${this._id}--line-area`)
        .attr('clip-path', `url(#${this._id}--clipPath-gradient-animation)`)
        .attr('fill', `url(#${this._id}--area-filling)`)
        .attr('d', this._d3PathArea(points));
    }

    if (this.showValues) {
      this.drawValues(target, points);
    }

    if (type === 'enum') {
      this._bandwidth = (primaryAxis as unknown as d3.ScaleBand<any>)?.bandwidth() * this._zoomK;

      target
        .selectAll('tooltip-bars')
        .data(this._data)
        .enter()
        .append('rect')
        .attr('class', 'krui-chart-tooltip-bar')
        .attr('tooltipData', d => axisIsEnum(primaryAxis, type) ? d[3] : d[0])
        .attr('x', 0)
        .attr('y', 0)
        .attr('height', notNul(secondaryAxis(this._minValue)))
        .attr('width', notNul(this._bandwidth))
        .attr('fill', 'transparent')
        .on('mouseover', (event) => this._hoveredTooltipEnumBar = event.target);

      this.wrap.svg.select(`#${this.layerDirective.layerId}`)
        .on('mouseleave', () => this.triggerEnumTooltipTimeout());
    }

    if (points.length) {
      this.drawPoints(target, points);
    }

    clipPathAnimation
      .transition()
      .duration(this.animation ? this._tempDurationAnimation : 0)
      .attr('width', this.wrap.workGroundWidth)
      .ease(d3.easeLinear)
      .on('start', () => {
        target.select(`#${this._id}--labels-container`).attr('clip-path', `url(#${this._id}--clipPath-gradient-animation)`);
        target.select(`#${this._id}--points-container`).attr('clip-path', `url(#${this._id}--clipPath-gradient-animation)`);
      })
      .on('end', () => {
        target.select(`#${this._id}--line`).attr('clip-path', `url(#${this.wrap.workgroundClipPathId})`);
        target.select(`#${this._id}--line-area`).attr('clip-path', `url(#${this.wrap.workgroundClipPathId})`);
        target.select(`#${this._id}--labels-container`).attr('clip-path', this.wrap.borderColor === 'transparent' ?
          `url(#${this.wrap.workgroundClipPathOffsetId})` :
          `url(#${this.wrap.workgroundClipPathId})`);
        target.select(`#${this._id}--points-container`).attr('clip-path', `url(#${this.wrap.workgroundClipPathId})`);
      });
  }

  private drawValues(target: KruiChartRenderTarget, points: [number, number, string | null, string | null][]): void {
    target.select(`#${this._id}--labels-container`).remove();

    const labelContainer: d3.Selection<SVGGElement, unknown, null, unknown> = target
      .append('g')
      .attr('id', `${this._id}--labels-container`)
      .attr('class', `krui-chart-labels-container`)
      .attr('clip-path', this.wrap.borderColor === 'transparent' ?
        `url(#${this.wrap.workgroundClipPathOffsetId})` :
        `url(#${this.wrap.workgroundClipPathId})`);

    labelContainer
      .selectAll('.krui-chart-label')
      .data(points)
      .enter()
      .append('text')
      .attr('class', 'krui-chart-label')
      .attr('x', (d) => d[0])
      .attr('y', (d) => d[1] - 15)
      .text((d, i) => adaptiveFixed(this._data[Math.floor(i / 2)][1], 1))
      .style('fill', this.valuesColor)
      .style('font-size', `${this.valuesFontSizePx}px`)
      .style('font-family', this.valuesFontFamily)
      .style('text-anchor', 'middle')
      .style('alignment-baseline', 'middle');
  }

  private drawPoints(target: KruiChartRenderTarget, points: [number, number, string | null, string | null][]): void {
    target.select(`#${this._id}--points-container`).remove();

    const pointsContainer: d3.Selection<SVGGElement, unknown, null, unknown> = target
      .append('g')
      .attr('id', `${this._id}--points-container`)
      .attr('class', `krui-chart-points-container`)
      .attr('clip-path', `url(#${this.wrap.workgroundClipPathId})`);

    if (this.breakPointType === 'auto') {
      this.drawBreakPoint(points, pointsContainer);
    }

    if (this.dataPointType === 'all') {
      const opt = this._pointMapSettings.get(this.dataPointMarker)!;
      this.drawPointFromConfig
      (
        points.slice(0, -2).map(p => [p[0], p[1]]),
        pointsContainer,
        this.dataPointMarker,
        opt.pointMarkers,
        opt.pointVisible,
        opt.pointColor as string,
        opt.pointStrokeColor as string,
        opt.pointSize,
        opt.pointStrokeSize,
        opt.pointLimit,
      );
    }

    if (this.endPoint) {
      this.drawEndPoint(points[points.length - 1], pointsContainer);
    }

    for (let [key, opt] of this._pointMapSettings.entries()) {
      if (key === 'breakPoint' && this.breakPointType === 'auto') {
        continue;
      }
      this.drawPointFromConfig
      (
        this._pointMap.get(key) ?? [],
        pointsContainer,
        key,
        opt.pointMarkers,
        opt.pointVisible,
        opt.pointColor as string,
        opt.pointStrokeColor as string,
        opt.pointSize,
        opt.pointStrokeSize,
        opt.pointLimit,
      );
    }
  }

  private drawPointFromConfig(
    points: [number, number][],
    pointsContainer: d3.Selection<SVGGElement, unknown, null, unknown>,
    key: string,
    pointMarkers: KruiChartLineDataPointType[],
    pointVisible: boolean,
    pointColor: string,
    pointStrokeColor: string,
    pointSize: number,
    pointStrokeSize: number,
    pointLimit: number,
  ): void {
    if (!pointVisible || points?.length > pointLimit) {
      return;
    }
    points.forEach((p, i, a) => {
        if (p[1] != this._minValue) {
          this.drawSymbol(p, pointsContainer, pointMarkers, pointSize, pointColor, pointStrokeColor, pointStrokeSize, key);
        }
      },
    );
  }

  private drawEndPoint(
    [cx, cy, name, label]: [number, number, string | null, string | null],
    pointsContainer: d3.Selection<SVGGElement, unknown, null, unknown>,
  ): void {
    this.drawSymbol([cx, cy], pointsContainer, ['symbolCircle'], this.endPointSize, this.color, 'none', 0, 'end');
    this.drawSymbol([
      cx, cy,
    ], pointsContainer, ['symbolCircle'], this.endPointStrokeSize, 'none', this.color, 1, 'end');
  }

  private drawBreakPoint(
    points: [number, number, string | null, string | null][],
    pointsContainer: d3.Selection<SVGGElement, unknown, null, unknown>,
  ): void {
    if (!this.breakPoint || this.breakPointMarker === 'none') {
      return;
    }
    const breakPoints: [number, number][] = [];
    points.forEach(([a, b], index, array) => {
        if (a == this._minValue || b == this._minValue) {
          if (array[index - 1] && (array[index - 1][1] != this._minValue)) {
            breakPoints.push([array[index - 1][0], array[index - 1][1]]);
          }
          if (array[index + 1] && (array[index + 1][1] != this._minValue)) {
            breakPoints.push([array[index + 1][0], array[index + 1][1]]);
          }
        }
      },
    );
    if (breakPoints.length > this.breakPointLimit) {
      return;
    }
    breakPoints.forEach((p) => {
      this.drawSymbol(p, pointsContainer, [this.breakPointMarker], this.breakPointSize, this.breakPointColor, this.breakPointStrokeColor, this.breakPointStrokeSize, 'break');
    });
  }

  private drawSymbol(
    point: [number, number],
    container: d3.Selection<SVGGElement, unknown, null, unknown>,
    markers: KruiChartLineDataPointType[],
    size: number,
    fillColor: string,
    strokeColor: string,
    strokeSize: number,
    type: 'data' | 'break' | 'end' | 'reWrite' | string,
  ): void {
    markers.forEach(marker => {
      switch (marker) {
        case 'symbolX':
          container
            .append('rect')
            .attr('x', point[0] - size * 2)
            .attr('y', point[1] - size * 2)
            .attr('width', size * 4)
            .attr('height', size * 4)
            .attr('class', `krui-chart-${type}-point-bg`)
            .attr('fill', this.wrap.bgColor);
          container
            .append('path')
            .attr('d', d3.symbol().type(customXSymbol).size(size))
            .attr('class', `krui-chart-${type}-point`)
            .attr('transform', `translate(${point[0]}, ${point[1]})`)
            .attr('stroke', strokeColor)
            .attr('opacity', -0.5)
            .transition()
            .duration(this.animation ? this._tempDurationAnimation : 0)
            .attr('opacity', 1);
          break;
        case 'symbolXTransparentBg':
          container
            .append('path')
            .attr('d', d3.symbol().type(customXSymbol).size(size))
            .attr('class', `krui-chart-${type}-point`)
            .attr('transform', `translate(${point[0]}, ${point[1]})`)
            .attr('stroke', strokeColor)
            .attr('stroke-width', strokeSize);
          break;
        case 'symbolArrow':
          container
            .append('path')
            .attr('d', () => {
              if (point[1] < size * 3) {
                return 'M -5 -1 C -3.8 0.2 -2.4 1.1 -0.7 1.4 C 1.5 1.6 3.7 0.7 5 -1 L 4 -1 C 3 0 2 1 0 1 C -2 1 -3 0 -4 -1 L -5 -1 M 5.5 2.5 V -1.5 L 1.5 -1.5 L 2 -1 L 5 -1 V 2 L 5.5 2.5 M 0 1';
              } else {
                return 'M -5 1 C -3.8 -0.2 -2.4 -1.1 -0.7 -1.4 C 1.5 -1.6 3.7 -0.7 5 1 L 4 1 C 3 0 2 -1 0 -1 C -2 -1 -3 0 -4 1 L -5 1 M 5.5 -2.5 V 1.5 L 1.5 1.5 L 2 1 L 5 1 V -2 L 5.5 -2.5 M 0 -1';
              }
            })
            .attr('class', `krui-chart-${type}-point`)
            .attr('transform', () => {
              if (point[1] < size * 3) {
                return `translate(${point[0]},${point[1] + 2 * size})`;
              }
              return `translate(${point[0]},${point[1] - 2 * size})`;
            })
            .attr('stroke', this.wrap.bgColor)
            .attr('stroke-width', strokeSize + 3);

          container
            .append('path')
            .attr('d', () => {
              if (point[1] < size * 3) {
                return 'M -5 -1 C -3.8 0.2 -2.4 1.1 -0.7 1.4 C 1.5 1.6 3.7 0.7 5 -1 L 4 -1 C 3 0 2 1 0 1 C -2 1 -3 0 -4 -1 L -5 -1 M 5.5 2.5 V -1.5 L 1.5 -1.5 L 2 -1 L 5 -1 V 2 L 5.5 2.5 M 0 1';
              }
              return 'M -5 1 C -3.8 -0.2 -2.4 -1.1 -0.7 -1.4 C 1.5 -1.6 3.7 -0.7 5 1 L 4 1 C 3 0 2 -1 0 -1 C -2 -1 -3 0 -4 1 L -5 1 M 5.5 -2.5 V 1.5 L 1.5 1.5 L 2 1 L 5 1 V -2 L 5.5 -2.5 M 0 -1';
            })
            .attr('class', `krui-chart-${type}-point`)
            .attr('transform', () => {
              if (point[1] < size * 3) {
                return `translate(${point[0]},${point[1] + 2 * size})`;
              }
              return `translate(${point[0]},${point[1] - 2 * size})`;
            })
            .attr('stroke', strokeColor)
            .attr('stroke-width', strokeSize);
          break;
        default:
          container
            .append('path')
            .attr('class', `krui-chart-${type}-point`)
            // @ts-ignore
            .attr('d', d3.symbol().type(d3[marker]).size(size * 10))
            .attr('transform', `translate(${point[0]},${point[1]})`)
            .attr('fill', fillColor)
            .attr('stroke', strokeColor)
            .attr('stroke-width', strokeSize);
          break;
      }
    });
  }

  // endregion

  // region additional

  private getPoints(
    primaryAxis: KruiChartScale,
    secondaryAxis: KruiChartScale,
    ext: number[] = [],
    axisIsEnum: boolean = false,
  ): [number, number, string | null, string | null][] {
    const [start, end] = ext;
    return this._data
      .slice(start, end)
      .map<[number, number, string | null, string | null][]>(([a, b, c, d]) => {
          if (axisIsEnum) {
            if ((d === null || b === null) && this.breakPoint) {
              return [[notNul((primaryAxis as d3.ScaleBand<any>)(d)) + (this._bandwidth ?? 0) / 2, this._minValue, c, d]];
            }
            return [
              [
                notNul((primaryAxis as d3.ScaleBand<any>)(d)) + (this._bandwidth ?? 0) / 2, notNul(secondaryAxis(b)), c,
                d,
              ],
              [
                notNul((primaryAxis as d3.ScaleBand<any>)(d)) + (this._bandwidth ?? 0) / 2, notNul(secondaryAxis(b)), c, d,
              ],
            ];
          }

          if ((a === null || b === null) && this.breakPoint) {
            return [[notNul(primaryAxis(a)), this._minValue, c, d]];
          }
          return [
            [notNul(primaryAxis(a)), notNul(secondaryAxis(b)), c, d],
            [notNul(primaryAxis(a)), notNul(secondaryAxis(b)), c, d],
          ];
        },
      )
      .flat();
  }

  private getTypesPoints(
    primaryAxis: KruiChartScale,
    secondaryAxis: KruiChartScale,
  ): void {
    this._pointMap.clear();
    this._pointData.forEach(([a, b, c, d], i) => {
        if (!!c) {
          if (b === null) {
            this._pointData[i][1] = notNul(secondaryAxis(this._minValue));
          } else {
            const existsData = this._pointMap.get(c) ?? [];
            existsData.push([notNul(primaryAxis(a)), notNul(secondaryAxis(b))]);
            this._pointMap.set(c, existsData);
          }

          if (c === 'breakPoint' && this.breakPointType === 'config') {
            //@ts-ignore
            this._data[i][1] = null;
          }
        }
      },
    );
  }

  private getCoefficient(value: number, type: '0' | '1' = '1') {
    const len = value.toString().split('.')[0].length;
    return Number(`${type}.${''.padStart(len - 2, '0')}2`);
  }

  private interpolateData(kTransform: number): void {
    if (this._initialData?.length < 2000) {
      return;
    }

    let i = 1;
    if (kTransform < 2) {
      i = 16;
    } else if (kTransform < 4) {
      i = 8;
    } else if (kTransform < 8) {
      i = 4;
    } else if (kTransform < 16) {
      i = 2;
    } else {
      i = 1;
    }

    if (i == 1) {
      this._data = this._initialData.slice(0).map(v => [v[0], v[1], v[2], v[3]]);
      return;
    }

    const data: [number, number, string | null, string | null][] = [];
    this._initialData.forEach((val, index) => {
      if (index % i == 1) {
        data.push([val[0], val[1], val[2], val[3]]);
      }
    });
    this._data = data;
  }

  // endregion
}
