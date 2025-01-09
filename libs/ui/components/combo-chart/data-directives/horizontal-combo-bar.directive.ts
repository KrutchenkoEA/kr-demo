import { Directive, Host, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { ScaleBand, ZoomTransform } from 'd3';
import {
  getKruiBarDefaultInputs,
  getKruiBarDefaultHorizontalComboCommon,
  KRUI_CHART_SMART_SCROLL_COLOR,
  KRUI_CHART_TEXT_COLOR,
} from '../constants';
import { adaptiveFixed, transformCaption } from '../constants/inner/function';
import { axisIsEnum, notNul } from '../constants/inner/pure';
import { KruiChartLayerDirective } from '../content-directives/layer.directive';
import {
  KRUI_CHART_LAYER_TOKEN,
  KRUI_CHART_PALETTE_PROVIDER_TOKEN,
  KRUI_CHART_STACKED_SERVICE,
  KRUI_CHART_WRAP_TOKEN,
} from '../injection-tokens';
import {
  KruiChartAxisType,
  KruiChartBarAnimationType,
  KruiChartBarColorType,
  KruiChartBarData,
  KruiChartBarInputData,
  KruiChartBarTextPosition,
  KruiChartComboBarConfig,
  KruiChartDataLayerAnimated,
  KruiChartDataLayerColorProvider,
  KruiChartDataLayerComboBarInputs,
  KruiChartDataLayerProvider,
  KruiChartDataLayerRenderer,
  KruiChartDataLayerTooltipProvider,
  KruiChartDataLayerValueShower,
  KruiChartDataPointProvider,
  KruiChartLayerDrawContext,
  KruiChartLegendLabelData,
  KruiChartPaletteProvider,
  KruiChartRenderTarget,
  KruiChartScale,
  KruiChartScaleLinear,
  KruiChartStackedBarData,
  KruiChartStackedBarInputData,
  KruiChartTooltipDataRow,
  KruiChartTooltipType,
  KruiChartWorkgroundPadding,
} from '../models';
import { KruiChartStackedService } from '../services';
import { KruiChartWrapperDirective } from '../wrapper-directives/wrapper.directive';
import { getBarHorizontalTextPosition } from '../constants/inner/bar.pure';


@Directive({
  selector: '[kruiChartHorizontalComboBar]',
  exportAs: 'kruiChartHorizontalComboBar',
  providers: [
    {
      provide: KruiChartDataLayerColorProvider,
      useExisting: KruiChartHorizontalComboBarDirective,
    },
    {
      provide: KruiChartDataLayerValueShower,
      useExisting: KruiChartHorizontalComboBarDirective,
    },
    {
      provide: KruiChartDataLayerAnimated,
      useExisting: KruiChartHorizontalComboBarDirective,
    },
    {
      provide: KruiChartDataLayerProvider,
      useExisting: KruiChartHorizontalComboBarDirective,
    },
    {
      provide: KruiChartDataPointProvider,
      useExisting: KruiChartHorizontalComboBarDirective,
    },
    {
      provide: KruiChartDataLayerRenderer,
      useExisting: KruiChartHorizontalComboBarDirective,
    },
    {
      provide: KruiChartDataLayerTooltipProvider,
      useExisting: KruiChartHorizontalComboBarDirective,
    },
  ],
  standalone: false,
})
export class KruiChartHorizontalComboBarDirective implements OnInit,
  OnChanges,
  KruiChartDataLayerColorProvider,
  KruiChartDataLayerValueShower,
  KruiChartDataLayerAnimated,
  KruiChartDataLayerProvider<number | string, number>,
  KruiChartDataLayerRenderer,
  KruiChartDataLayerTooltipProvider<number | string>,
  KruiChartDataLayerComboBarInputs {

  // region definition

  public _defaultColor!: string;

  @Input() public showValues: boolean = false;
  @Input() public valuesColor: string = KRUI_CHART_TEXT_COLOR;
  @Input() public valuesFontSizePx: number = 12;
  @Input() public valuesFontFamily: string = 'Tahoma';
  @Input() public captions: (string | number | Date)[] = [''];
  @Input() public engUnits: string [] = [''];

  @Input() public durationAnimation: number = 2000;
  @Input() public durationToggleAnimation: number = 500;
  @Input() public animation: boolean = true;

  public state: Map<number, boolean> = new Map<number, boolean>();
  public opacityState: Map<number, boolean> = new Map<number, boolean>();

  /** Перерисовка осей графика по клику на легенду */
  @Input() public reRangeThenLegendClick: boolean = true;
  @Input() public reRangeThenDataChange: boolean = false;
  @Input() public workgroundPadding: KruiChartWorkgroundPadding = { top: 5, right: 5, left: 2, bottom: 5 };
  @Input() public useDefaultCheck: boolean = true;
  public _minValue: number = 0;
  public _maxValueCurrent: number = 0;
  public _maxValueAbsolute: number = 0;

  public _target!: KruiChartRenderTarget;
  public _context!: KruiChartLayerDrawContext;
  public _id!: string;
  public _zoomK: number = 1;

  public _hoveredTooltipEnumBar: HTMLElement | null = null;
  public _enumTooltipTimeout: any;
  public _bandwidth: number | undefined;

  @Input() public barType: KruiChartBarColorType = 'solidColor';
  @Input() public barOpacity: number = 1;
  @Input() public barsOpacity: number[] = [];
  @Input() public barRadius: number = 0;
  @Input() public barBorder: boolean = false;
  @Input() public barBorderColors: string[] = [];
  @Input() public fixedBarWidth: boolean = false;
  @Input() public showEnumValues: boolean = false;
  @Input() public valuePosition: KruiChartBarTextPosition = 'center';
  @Input() public animationType: KruiChartBarAnimationType = 'growth';

  @Input() public tooltipHoverEffect: boolean = true;
  @Input() public tooltipHoverColor: string = KRUI_CHART_SMART_SCROLL_COLOR;

  @Input() public enablePreviousData: boolean = true;
  @Input() public startInNull: boolean = true;

  private _tempDurationAnimation: number = 0;
  private _data!: KruiChartBarData[][];
  private _initialData!: KruiChartBarData[][];
  private _stackedData!: KruiChartStackedBarData[];
  private _previousData!: KruiChartStackedBarData[];
  private _maxDataLength: number = 0;
  private _groupSize: number = 0;

  // endregion

  constructor(
    @Inject(KRUI_CHART_PALETTE_PROVIDER_TOKEN) @Host() public paletteProvider: KruiChartPaletteProvider,
    @Inject(KRUI_CHART_WRAP_TOKEN) @Host() public wrap: KruiChartWrapperDirective,
    @Inject(KRUI_CHART_LAYER_TOKEN) @Host() public layerDirective: KruiChartLayerDirective,
    @Inject(KRUI_CHART_STACKED_SERVICE) public stackedService: KruiChartStackedService,
  ) {
    this._defaultColor = this.paletteProvider.nextColor();
  }

  // region colors

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

  @Input() set colors(colors: string[] | null | undefined) {
    if (!colors) {
      for (let i = 0; i < this._groupSize; i++) {
        this._colors.push(this.paletteProvider.nextColor());
      }
    } else {
      this._colors = colors;
    }
  }

  // endregion

  // region data

  /** Принимает массивы одиночных баров: [number | string | Date, number, any][]{]}. Несовместимо с dataStack */
  @Input('data') set inputData(value: KruiChartBarInputData[][]) {
    if (!value?.length) {
      this._data = [];
      this._initialData = [];
      return;
    }
    switch (Object.prototype.toString.call(value[0]?.[0]?.[0])) {
      case '[object Date]':
        value = value.map(v => v
          .map((d) => [(d[0] as Date).getTime(), d[1], d[2] ?? null] as KruiChartBarData)
          .sort((a, b) => (a[0] as number) - (b[0] as number)),
        );
        break;
      case '[object String]':
        value = value.map(v => v
          .map(d => [new Date(d[0]).getTime(), d[1], d[2] ?? null] as KruiChartBarData)
          .sort((a, b) => (a[0] as number) - (b[0] as number)),
        );
        break;
      case '[object Number]':
        value.map(v => v
          .sort((a, b) => (a[0] as number) - (b[0] as number)));
        break;
    }

    if (this.enablePreviousData && !!this._stackedData?.length) {
      this._previousData = [...this._stackedData];
    }

    this._data = value as KruiChartBarData[][];
    this._initialData = value as KruiChartBarData[][];
    this._groupSize = this._data?.length ?? 0;
    this._maxDataLength = this.getMaxDataLength();
    this._stackedData = this.stackedService.getStackDataFromArray<number>(this._data);
    this._getMin();
    this._getMaxAbsolute();
  }

  /** Принимает массив стек-баров: [number | string | Date, number[], any][]. Несовместимо с data */
  @Input('dataStack') set inputStackData(value: KruiChartStackedBarInputData[]) {
    if (!value?.length) {
      this._data = [];
      this._initialData = [];
      return;
    }
    switch (Object.prototype.toString.call(value[0]?.[0])) {
      case '[object Date]':
        value = value.map((d) => [(d[0] as Date).getTime(), d[1], d[2] ?? null]);
        value.sort();
        break;
      case '[object String]':
        value = value.map(d => [new Date(d[0]).getTime(), d[1], d[2] ?? null]);
        value.sort();
        break;
      case '[object Number]':
        value.sort((a, b) => (a[0] as number) - (b[0] as number));
        break;
    }

    if (this.enablePreviousData && !!this._stackedData?.length) {
      this._previousData = [...this._stackedData];
    }

    const data = this.stackedService.getArrayDataFromStack<number>(value as KruiChartStackedBarData);
    this._data = data as KruiChartBarData[][];
    this._initialData = data as KruiChartBarData[][];
    this._groupSize = this._data?.length ?? 0;
    this._maxDataLength = this.getMaxDataLength();
    this._stackedData = value as KruiChartStackedBarData;
    this._getMin();
    this._getMaxAbsolute();
  }

  private _stackWidthPercent: number = 80;

  public get stackWidthPercent(): number {
    return this._stackWidthPercent;
  }

  @Input() set stackWidthPercent(v: number) {
    if (!v) return;
    this._stackWidthPercent = v;
    if (v < 0) {
      this._stackWidthPercent = 0;
    } else if (v > 100) {
      this._stackWidthPercent = 100;
    }
  }

  private _barWidthPercent: number = 80;

  public get barWidthPercent(): number {
    return this._barWidthPercent;
  }

  @Input() set barWidthPercent(v: number) {
    if (!v) return;
    this._barWidthPercent = v;
    if (v < 0) {
      this._barWidthPercent = 0;
    } else if (v > 100) {
      this._barWidthPercent = 100;
    }
  }

  // endregion

  public ngOnInit(): void {
    if (!this._color) {
      this.color = null;
    }

    if (!this._colors) {
      this._colors = [];
    }

    if (this._colors?.length < this._groupSize) {
      let step = this._colors?.length;
      while (step < this._groupSize) {
        if (step > 20) break;
        this._colors.push(this.paletteProvider.nextColor());
        step++;
      }
    }

    if (!this.valuesColor) {
      this.valuesColor = this.color;
    }

    if (!this.barBorderColors) {
      this.barBorderColors = [];
    }

    if (this.barBorderColors.length < this._groupSize) {
      let step = this.barBorderColors.length;
      while (this.barBorderColors?.length < this._groupSize) {
        if (step > 20) break;
        this.barBorderColors.push(this._colors[step]);
        step++;
      }
    }

    if (this.useDefaultCheck) {
      Object.entries(getKruiBarDefaultHorizontalComboCommon())?.forEach(([key, value]) => {
        // @ts-ignore
        if (this[key] === null || this[key] === undefined) {
          // @ts-ignore
          this[key] = value;
        }
      });

      Object.entries(getKruiBarDefaultInputs())?.forEach(([key, value]) => {
        // @ts-ignore
        if (this[key] === null || this[key] === undefined) {
          // @ts-ignore
          this[key] = value;
        }
      });
    }
  }

  public ngOnChanges({ inputData, inputStackData }: SimpleChanges): void {
    if (!inputData?.isFirstChange() && !inputStackData?.isFirstChange()) {
      this.layerDirective.reDraw(null, false, true);
    }

    this._tempDurationAnimation = this.durationAnimation;
  }

  // region get functions

  public getColor(i: number): string {
    return this.colors?.[i] ?? this.color;
  }

  public getDomain(axisType: KruiChartAxisType | null): number[] | string[] {
    if (axisType && axisType === 'enum') {
      return this._data?.map(v => v.map((bar) => notNul(bar[2]))).flat();
    }
    return this._data?.map(v => v.map((bar) => notNul(bar[0]))).flat();
  }

  public getRange(): number[] {
    return [
      this.startInNull ? 0 : this._minValue,
      (this.reRangeThenLegendClick || this.reRangeThenDataChange) ? this._maxValueCurrent : this._maxValueAbsolute,
    ];
  }

  public _getMin(): void {
    let min = Number.POSITIVE_INFINITY;
    this._data?.forEach(v => v.forEach(([a, b]) => {
      if (b != null) {
        min = Math.min(min, b);
      }
    }));
    if (min === 0) {
      this._minValue = 0.001;
    } else {
      this._minValue = min - min * 0.001;
    }
  }

  public _getMaxAbsolute(): void {
    let max = Number.NEGATIVE_INFINITY;
    this._stackedData?.map(([, b]) => {
      if (b != null) {
        max = Math.max(max, b.reduce((p, c, i) => p + c, 0));
      } else {
        max = Math.max(max, this._minValue);
      }
    });
    this._maxValueAbsolute = max + max * 0.001;
    this._maxValueCurrent = max + max * 0.001;
  }

  public _getMaxCurrent(): void {
    let max = Number.NEGATIVE_INFINITY;

    this._stackedData?.forEach(v => v.forEach(([, b]) => {
      if (b != null) {
        max = Math.max(max, b.reduce((p: number, c: number, i: number) => {
          if (!!this.state.get(i)) {
            return p;
          }
          return p + c;
        }, 0));
      } else {
        max = Math.max(max, this._minValue);
      }
    }));
    this._maxValueCurrent = max + max * 0.001;
  }

  public getWorkgroundPadding(axisType: KruiChartAxisType): KruiChartWorkgroundPadding {
    if (this._initialData?.length) {
      const firstDataLength = this._data?.[0]?.length;
      const dataLength = this._data?.length;
      const y = axisType === 'enum' ? 0 : (this.wrap.workGroundHeight / (firstDataLength ?? 10)) / (dataLength) ?? 0;
      return {
        top: this.workgroundPadding.top + y,
        right: this.workgroundPadding.right,
        bottom: this.workgroundPadding.bottom + y,
        left: this.workgroundPadding.left,
      };
    }
    return this.workgroundPadding;
  }

  public getLegendData(): KruiChartLegendLabelData[] {
    return this._data.map((d, i) => {
      return {
        title: transformCaption(this.captions[i]),
        color: this.getColor(i),
        inactive: this.state.get(i) ?? false,
        type: 'stack',
        disabled: !this._initialData?.length,
        hovered: this.opacityState.get(i) ?? false,
      };
    });
  }

  // endregion

  // region toggle

  public toggleState(
    trendIndex: number,
    hidden: boolean,
    durationToggleAnimation: number = this.durationToggleAnimation,
  ): void {
    this.state.set(trendIndex, hidden);
    this._hoveredTooltipEnumBar = null;

    const type = this._context.primaryAxis.type;
    const primaryAxis = this._context.primaryAxis.d3Scale as KruiChartScale;
    const secondaryAxis = this._context.secondaryAxis.d3Scale as KruiChartScale;

    const barConfig = this.getBarsConfigs(type, primaryAxis, secondaryAxis);

    if (hidden) {
      this._target
        .selectAll(`#krui-chart-data-bar-${trendIndex}`)
        .attr('class', 'krui-chart-data-bar--hidden')
        .transition()
        .duration(durationToggleAnimation)
        .attr('height', 0);

      this._target
        .selectAll(`#krui-chart-stack-text-${trendIndex}`)
        .attr('class', 'krui-chart-stack-text--hidden')
        .attr('x', secondaryAxis.range()[0])
        .attr('display', 'none');

      this.scaleBars(barConfig, true, false, durationToggleAnimation);

    } else {
      this._target
        .selectAll(`#krui-chart-data-bar-${trendIndex}`)
        .attr('class', 'krui-chart-data-bar');

      this._target
        .selectAll(`#krui-chart-stack-text-${trendIndex}`)
        .attr('class', 'krui-chart-stack-text')
        .attr('display', 'visible');

      this.scaleBars(barConfig, true, false, durationToggleAnimation);
    }
  }

  public toggleOpacity(
    trendIndex: number,
    hidden: boolean,
  ): void {
    this.opacityState.set(trendIndex, hidden);
  }

  public renderOpacity(active: boolean): void {
    for (let i = 0; i < this._groupSize; i++) {
      if (!this.opacityState.get(i) && !this.state.get(i)) {
        this._target.selectAll(`#krui-chart-data-bar-${i}`).attr('class', active ?
          'krui-chart-data-bar krui-chart-data-bar--opacity' :
          'krui-chart-data-bar');
        this._target.selectAll(`#krui-chart-stack-text-${i}`).attr('class', active ?
          'krui-chart-stack-text krui-chart-stack-text--opacity' :
          'krui-chart-stack-text');
      }
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
    const primaryAxis = context.primaryAxis.d3Scale as KruiChartScale;
    const secondaryAxis = context.secondaryAxis.d3Scale as KruiChartScale;

    this.renderBars(target, context, primaryAxis, secondaryAxis);
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

    if ((zoomTransform.k !== this._zoomK)) {
      this._zoomK = zoomTransform.k;
    }
    let primaryAxis = context!.primaryAxis.d3Scale as KruiChartScaleLinear;
    let secondaryAxis = context!.secondaryAxis.d3Scale as KruiChartScaleLinear;

    if (context.primaryAxis.type === 'time' || context.primaryAxis.type === 'number') {
      if (zoomXEnable) {
        primaryAxis = zoomTransform.rescaleY(primaryAxis);
      }
      if (zoomYEnable) {
        secondaryAxis = zoomTransform.rescaleX(secondaryAxis);
      }
    }

    if (animation) {
      this.renderBars(target, context, primaryAxis, secondaryAxis);
    } else {
      this.reScaleBars(target, context, primaryAxis, secondaryAxis);
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
        type: 'bar',
      },
    ];
    if (!this._initialData?.length) return nullObject;

    const data: any = this._stackedData;
    const bisectData = d3.bisector((d: any[]) => d[0]).center;
    const index = bisectData(data, event);

    if (index === undefined || index === null) return nullObject;
    if (tooltipType !== 'dataPoint') {
      const dataIndex0 = data[index]?.[0];
      const dataIndex1 = data[index + 1]?.[0];
      let equal = 0;
      if (dataIndex1) {
        equal = (event - dataIndex1) / (dataIndex1 - dataIndex0);
      } else {
        equal = event / dataIndex0;
      }
      if (equal > 1.2 || equal < -2.5 || isNaN(equal)) return nullObject;
    }
    const tooltipData: KruiChartTooltipDataRow [] = [];
    data[index]?.[1]?.forEach((bar: any, i: number) => {
      tooltipData.push({
        value: bar,
        valueTitle: data[index]?.[0],
        title: transformCaption(this.captions[i]),
        color: this.getColor(i),
        hidden: this.state.get(i) ?? false,
        index,
        engUnits: this.engUnits?.[i] ?? '',
        type: 'bar',
      });
    });

    tooltipData.reverse();
    return tooltipData;
  }

  public getTooltipTitleEnum(): string | null {
    return !this.state.get(0)
      ? this._hoveredTooltipEnumBar?.getAttribute('tooltipData') ?? null
      : null;
  }

  public getTooltipDataEnum(value: string | number): KruiChartTooltipDataRow[] {
    const nullObject = [
      {
        valueTitle: '',
        color: '',
        hidden: true,
        index: 0,
        title: '',
        value: null,
        engUnits: '',
        type: 'bar',
      },
    ];
    if (!this._initialData?.length) return nullObject;

    const data: any = this._stackedData;
    const index = this._stackedData.findIndex(d => d[2] === value);
    if (index === undefined || index === null || index === -1) return nullObject;

    const tooltipData: KruiChartTooltipDataRow [] = [];
    data[index]?.[1]?.forEach((bar: any, i: number) => {
      tooltipData.push({
        value: bar,
        valueTitle: data[index]?.[2],
        title: transformCaption(this.captions[i]),
        color: this.getColor(i),
        hidden: this.state.get(i) ?? false,
        index,
        engUnits: this.engUnits?.[i] ?? '',
        type: 'bar',
      });
    });

    tooltipData.reverse();
    return tooltipData;
  }

  public triggerEnumTooltipTimeout(): void {
    if (this._enumTooltipTimeout) {
      clearTimeout(this._enumTooltipTimeout);
    }
    this._enumTooltipTimeout = setTimeout(() => {
      this._hoveredTooltipEnumBar = null;
      this._enumTooltipTimeout = null;
    });
  }

  public getBandWidth(): number {
    return this._bandwidth ?? 0;
  }

  private renderBars(
    target: KruiChartRenderTarget,
    context: KruiChartLayerDrawContext,
    primaryAxis: KruiChartScale, // y
    secondaryAxis: KruiChartScale, // x
  ): void {
    if (!this._initialData?.length) return;
    target.selectAll('.krui-chart-stack').remove();

    const type = context.primaryAxis.type;
    const barConfig = this.getBarsConfigs(type, primaryAxis, secondaryAxis);

    if (this.barType === 'gradient') {
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
    }
    const bars = target
      .attr('clip-path', `url(#${this.wrap.workgroundClipPathId}`)
      .selectAll('.krui-chart-stack')
      .data(this._stackedData)
      .enter()
      .append('g')
      .attr('class', 'krui-chart-stack')
      .attr('tooltipData', d => axisIsEnum(primaryAxis, type) ? d[2] : d[0])
      .attr(
        'transform',
        d => {
          return `translate(0, ${axisIsEnum(primaryAxis, type)
            ?
            primaryAxis(d[2])
            :
            primaryAxis(d[0]) - (this.fixedBarWidth ?
              barConfig.stackWidth :
              barConfig.stackWidth * this._zoomK) / 2})`;
        })
      .on('mouseover', (event) => this._hoveredTooltipEnumBar = event.target.parentElement);

    const items = bars.selectAll('rect')
      .data(d => {
        return [...d[1]];
      })
      .enter();

    let widthCounter = -1;
    items
      .append('rect')
      .attr('class', 'krui-chart-data-bar')
      .attr('id', (_, i) => `krui-chart-data-bar-${i}`)
      .attr('x', 0)
      .attr('y', (_, i) => {
        const pos = (barConfig.barWidthCalculated + 2 * barConfig.barPadding) * i + barConfig.barPadding + barConfig.stackPadding;
        if (axisIsEnum(primaryAxis, type)) {
          return pos;
        }
        return this.fixedBarWidth ? pos : pos * this._zoomK;
      })
      .attr('height', () => {
        if (axisIsEnum(primaryAxis, type)) {
          return barConfig.barWidthCalculated;
        }
        return this.fixedBarWidth ? barConfig.barWidthCalculated : barConfig.barWidthCalculated * this._zoomK;
      })
      .attr('width', (_, i) => {
        if (i === 0) {
          widthCounter++;
        }
        if (widthCounter === barConfig.activeCount) {
          widthCounter = 0;
        }
        if (!!this._previousData?.length && this._previousData[widthCounter]?.[1]) {
          const delta = secondaryAxis.range()[0] - notNul(secondaryAxis(this._previousData[widthCounter][1][i]));
          return delta > 0 ? delta : notNul(secondaryAxis(this._previousData[widthCounter][1][i]));
        }
        return 0;
      })

      .attr('rx', `${this.barRadius}px`)
      .attr('ry', `${this.barRadius}px`)
      .attr('fill', (_, i) => this.barType === 'solidColor' ? this.colors[i] : `url(#${this._id}--area-filling)`)
      .attr('stroke', (_, i) => this.barBorder ? this.barBorderColors[i] : 'none')
      .attr('opacity', (d, i) => !!d ? (this.barsOpacity[i] ? this.barsOpacity[i] : this.barOpacity) : 0);


    if (type === 'enum' || this.tooltipHoverEffect) {
      const tooltip = bars
        .append('rect')
        .attr('class', 'krui-chart-tooltip-bar')
        .attr('id', (_, i) => `krui-chart-tooltip-bar-${i}`)
        .attr('x', 0)
        .attr('y', 0)
        .attr('height', barConfig.stackWidth * this._zoomK)
        .attr('width', secondaryAxis.range()[1] + this.workgroundPadding.right)
        .attr('opacity', '0.1')
        .attr('fill', 'transparent');

      if (this.tooltipHoverEffect) {
        tooltip
          .on('mouseenter', (event) => {
            target
              .select(`#${event.target.id}`)
              .attr('fill', this.tooltipHoverColor);
          })
          .on('mouseleave', (event) => {
            target
              .select(`#${event.target.id}`)
              .attr('fill', 'transparent');
          });
      }

      this.wrap.svg.select(`#${this.layerDirective.layerId}`)
        .on('mouseleave', () => this.triggerEnumTooltipTimeout());
    }

    (items.selectAll('rect.krui-chart-data-bar') as d3.Selection<SVGRectElement, number, SVGRectElement, unknown>)
      .transition()
      .duration(this.animationType === 'none' ? 0 : this._tempDurationAnimation)
      .attr('x', secondaryAxis.range()[0])
      .attr('width', d => {
        if (!d) return 0;
        const delta = secondaryAxis.range()[0] - notNul(secondaryAxis(d));
        return delta > 0 ? delta : notNul(secondaryAxis(d));
      });

    if (this.showValues) {
      let xCounterText = -1;
      items
        .append('text')
        .attr('class', 'krui-chart-stack-text')
        .attr('id', (_, i) => `krui-chart-stack-text-${i}`)
        .attr('x', (_, i) => {
          if (i === 0) {
            xCounterText++;
          }
          if (xCounterText === barConfig.activeCount) {
            xCounterText = 0;
          }
          if (!!this._previousData?.length && this._previousData[xCounterText]?.[1]) {
            return getBarHorizontalTextPosition(this.valuePosition, this.valuesFontSizePx, secondaryAxis, this._previousData[xCounterText][1][i]);
          }
          return secondaryAxis.range()[0];
        })
        .attr('y', (_, i) => {
          const pos = (barConfig.barWidthCalculated + 2 * barConfig.barPadding) * i + barConfig.barWidthCalculated / 2 + barConfig.barPadding + barConfig.stackPadding;
          if (axisIsEnum(primaryAxis, type)) {
            return pos;
          }
          return this.fixedBarWidth ? pos : pos * this._zoomK;
        })
        .text((d) => {
          if (isNaN(d) || d === null) return null;
          if (this.showEnumValues && axisIsEnum(primaryAxis, type)) {
            return d;
          }
          return adaptiveFixed(d, 2);
        })
        .attr('fill', this.valuesColor)
        .style('font-size', `${this.valuesFontSizePx}px`)
        .style('font-family', this.valuesFontFamily)
        .attr('text-anchor', 'middle')
        .style('alignment-baseline', 'middle')
        .transition()
        .duration(this.animationType === 'none' ? 0 : this._tempDurationAnimation)
        .attr('x', d => getBarHorizontalTextPosition(this.valuePosition, this.valuesFontSizePx, secondaryAxis, d));
    }

    this._data?.forEach((d, i) => {
      if (this.state.get(i)) {
        this.toggleState(i, true, 0);
      }
    });
  }

  private reScaleBars(
    target: KruiChartRenderTarget,
    context: KruiChartLayerDrawContext,
    primaryAxis: KruiChartScale,
    secondaryAxis: KruiChartScale,
  ): void {
    this._context = context;
    this._target = target;
    const type = context.primaryAxis.type;
    const barConfig = this.getBarsConfigs(type, primaryAxis, secondaryAxis);

    (target.selectAll('.krui-chart-stack') as d3.Selection<SVGGElement, KruiChartBarData, SVGGElement, unknown>)
      .attr(
        'transform',
        d => {
          return `translate(0, ${axisIsEnum(primaryAxis, type)
            ? primaryAxis(d[2])
            : primaryAxis(d[0]) - (this.fixedBarWidth ?
            barConfig.stackWidth :
            barConfig.stackWidth * this._zoomK) / 2})`;
        });

    this.scaleBars(barConfig, true, true, 0);
  }

  private scaleBars(
    barConfig: KruiChartComboBarConfig,
    primaryAxisEnable: boolean,
    secondaryAxisEnable: boolean,
    animationDuration: number,
  ): void {
    if (primaryAxisEnable) {
      let barsCounter = 0;
      (this._target.selectAll(`.krui-chart-data-bar`) as d3.Selection<SVGRectElement, number, SVGRectElement, unknown>)
        .transition()
        .duration(animationDuration)
        .attr('y', (_, i) => {
          const pos = (barConfig.barWidthCalculated + 2 * barConfig.barPadding) * barsCounter + barConfig.barPadding + barConfig.stackPadding;
          barsCounter++;
          if (barsCounter === barConfig.groupSize) {
            barsCounter = 0;
          }
          if (barConfig.type === 'enum') {
            return pos;
          }
          return this.fixedBarWidth ? pos : pos * this._zoomK;
        })
        .attr('height', (_, i) => {
          if (barConfig.type === 'enum') {
            return barConfig.barWidthCalculated;
          }
          return this.fixedBarWidth ? barConfig.barWidthCalculated : barConfig.barWidthCalculated * this._zoomK;
        });
    }
    if (secondaryAxisEnable) {
      (this._target.selectAll(`.krui-chart-data-bar`) as d3.Selection<SVGRectElement, number, SVGRectElement, unknown>)
        .transition()
        .duration(animationDuration)
        .attr('x', d => barConfig.secondaryAxis.range()[0])
        .attr('width', (d) => {
          if (!d) return 0;
          const delta = notNul(barConfig.secondaryAxis(d)) - barConfig.secondaryAxis.range()[0];
          return delta > 0 ? delta : notNul(barConfig.secondaryAxis(d));
        });
    }
    if (barConfig.type === 'enum' || this.tooltipHoverEffect) {
      this._target
        .selectAll('.krui-chart-tooltip-bar')
        .attr('x', () => barConfig.secondaryAxis.range()[0])
        .attr('height', () => {
          if (axisIsEnum(barConfig.primaryAxis, barConfig.type)) {
            return barConfig.stackWidth;
          }
          return this.fixedBarWidth ? barConfig.stackWidth : barConfig.stackWidth * this._zoomK;
        })
        .attr('width', barConfig.secondaryAxis.range()[1] + this.workgroundPadding.right);
      this.triggerEnumTooltipTimeout();
    }
    if (this.showValues) {
      (this._target.selectAll(`.krui-chart-stack`)
        .selectAll(`.krui-chart-stack-text`) as d3.Selection<SVGTextElement, number, SVGTextElement, unknown>)
        .transition()
        .duration(animationDuration)
        .attr('x', d => getBarHorizontalTextPosition(this.valuePosition, this.valuesFontSizePx, barConfig.secondaryAxis, d))
        .attr('y', (_, i) => {
          const pos = (barConfig.barWidthCalculated + 2 * barConfig.barPadding) * i + barConfig.barWidthCalculated / 2 + barConfig.barPadding + barConfig.stackPadding;
          if (barConfig.type === 'enum') {
            return pos;
          }
          return this.fixedBarWidth ? pos : pos * this._zoomK;
        });
    }
  }

  // endregion

  // region additional

  private getBarsConfigs(
    type: KruiChartAxisType,
    primaryAxis: KruiChartScale,
    secondaryAxis: KruiChartScale,
  ): KruiChartComboBarConfig {
    const activeCount = this.getActiveCount();
    const groupSize = this.getGroupSize();

    let stackWidth: number;
    let stackWidthCalculated: number;
    let stackPadding: number;
    let barWidth: number;
    let barWidthCalculated: number;
    let barPadding: number;

    if (type === 'enum') {
      stackWidth = (primaryAxis as ScaleBand<any>).bandwidth();
      stackWidthCalculated = stackWidth * this._stackWidthPercent / 100;
      stackPadding = (stackWidth - stackWidthCalculated) / 2;
      barWidth = stackWidthCalculated / groupSize;
      barWidthCalculated = barWidth * this._barWidthPercent / 100;
      barPadding = (barWidth - barWidthCalculated) / 2;
    } else {
      stackWidth = this._context.canvasHeight / this._maxDataLength;
      stackWidthCalculated = stackWidth * this._stackWidthPercent / 100;
      stackPadding = (stackWidth - stackWidthCalculated) / 2;
      barWidth = stackWidthCalculated / groupSize;
      barWidthCalculated = barWidth * this._barWidthPercent / 100;
      barPadding = (barWidth - barWidthCalculated) / 2;
    }
    this._bandwidth = stackWidth;
    return {
      type,
      activeCount,
      groupSize,
      stackWidth,
      stackWidthCalculated,
      stackPadding,
      barWidth,
      barWidthCalculated,
      barPadding,
      primaryAxis,
      secondaryAxis,
    };
  }

  private getMaxDataLength(): number {
    return Math.max(...this._data?.map(v => v.length));
  }

  private getGroupSize(): number {
    let size = 0;
    this._data.forEach((v, i) => {
      if (!this.state.get(i)) {
        size++;
      }
    });
    return size;
  }

  private getActiveCount(): number {
    return this._stackedData?.length;
  }

  // endregion
}
