import { Directive, Host, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { ScaleBand, ZoomTransform } from 'd3';
import {
  getKruiBarComboDefaultInputs,
  getKruiBarDefaultComboCommon,
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
  KruiChartBarTextPosition,
  KruiChartComboBarConfig,
  KruiChartDataLayerAnimated,
  KruiChartDataLayerColorProvider,
  KruiChartDataLayerProvider,
  KruiChartDataLayerRangeBarInputs,
  KruiChartDataLayerRenderer,
  KruiChartDataLayerTooltipProvider,
  KruiChartDataLayerValueShower,
  KruiChartDataPointProvider,
  KruiChartLayerDrawContext,
  KruiChartLegendLabelData,
  KruiChartPaletteProvider,
  KruiChartRangeBarConfig,
  KruiChartRangeBarData,
  KruiChartRangeBarInputData,
  KruiChartRangeBarStackedData,
  KruiChartRangeBarStackedInputData,
  KruiChartRenderTarget,
  KruiChartScale,
  KruiChartScaleLinear,
  KruiChartStackedBarData,
  KruiChartTooltipDataRow,
  KruiChartTooltipType,
  KruiChartWorkgroundPadding,
} from '../models';
import { KruiChartWrapperDirective } from '../wrapper-directives/wrapper.directive';
import { getBarTextPositionStack } from '../constants/inner/bar.pure';
import { KruiChartStackedService } from '../services';


@Directive({
  selector: '[kruiChartRangeBar]',
  exportAs: 'kruiChartRangeBar',
  providers: [
    {
      provide: KruiChartDataLayerColorProvider,
      useExisting: KruiChartRangeBarDirective,
    },
    {
      provide: KruiChartDataLayerValueShower,
      useExisting: KruiChartRangeBarDirective,
    },
    {
      provide: KruiChartDataLayerAnimated,
      useExisting: KruiChartRangeBarDirective,
    },
    {
      provide: KruiChartDataLayerProvider,
      useExisting: KruiChartRangeBarDirective,
    },
    {
      provide: KruiChartDataPointProvider,
      useExisting: KruiChartRangeBarDirective,
    },
    {
      provide: KruiChartDataLayerRenderer,
      useExisting: KruiChartRangeBarDirective,
    },
    {
      provide: KruiChartDataLayerTooltipProvider,
      useExisting: KruiChartRangeBarDirective,
    },
  ],
  standalone: false,
})
export class KruiChartRangeBarDirective implements OnInit,
  OnChanges,
  KruiChartDataLayerColorProvider,
  KruiChartDataLayerValueShower,
  KruiChartDataLayerAnimated,
  KruiChartDataLayerProvider<number | string, number>,
  KruiChartDataLayerRenderer,
  KruiChartDataLayerTooltipProvider<number | string>,
  KruiChartDataLayerRangeBarInputs {

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
  @Input() public workgroundPadding: KruiChartWorkgroundPadding = { top: 5, right: 10, left: 10, bottom: 0 };
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
  @Input() public barRadius: number = 0;
  @Input() public barsOpacity: number[] = [];
  @Input() public barBorder: boolean = false;
  @Input() public barBorderColors: string[] = [];
  @Input() public fixedBarWidth: boolean = false;
  @Input() public showEnumValues: boolean = true;
  @Input() public valuePosition: KruiChartBarTextPosition = 'center';
  @Input() public animationType: KruiChartBarAnimationType = 'growth';

  @Input() public tooltipHoverEffect: boolean = true;
  @Input() public tooltipHoverColor: string = KRUI_CHART_SMART_SCROLL_COLOR;

  @Input() public enablePreviousData: boolean = true;
  @Input() public startInNull: boolean = true;

  private _tempDurationAnimation: number = 0;
  private _data!: KruiChartRangeBarData[][];
  private _initialData!: KruiChartRangeBarData[][];
  private _stackedData!: KruiChartRangeBarStackedData[];
  private _previousData!: KruiChartRangeBarStackedData[];
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

  /** Принимает массивы одиночных баров: [number | string | Date, [number, number], any][]{]}. Несовместимо с dataStack */
  @Input('data') set inputData(value: KruiChartRangeBarInputData[][]) {
    if (!value?.length) {
      this._data = [];
      this._initialData = [];
      return;
    }
    switch (Object.prototype.toString.call(value[0]?.[0]?.[0])) {
      case '[object Date]':
        value = value.map(v => v
          .map((d) => [
            (d[0] as Date).getTime(), this.stackedService.checkValueOrder(d[1]), d[2] ?? null,
          ] as KruiChartRangeBarData)
          .sort((a, b) => (a[0] as number) - (b[0] as number)),
        );
        break;
      case '[object String]':
        value = value.map(v => v
          .map(d => [
            new Date(d[0]).getTime(), this.stackedService.checkValueOrder(d[1]), d[2] ?? null,
          ] as KruiChartRangeBarData)
          .sort((a, b) => (a[0] as number) - (b[0] as number)),
        );
        break;
      case '[object Number]':
        value
          .map(v => v
            .map(d => [d[0], this.stackedService.checkValueOrder(d[1]), d[2] ?? null])
            .sort((a, b) => (a[0] as number) - (b[0] as number)));
        break;
    }

    if (this.enablePreviousData && !!this._stackedData?.length) {
      this._previousData = [...this._stackedData];
    }

    this._data = value as KruiChartRangeBarData[][];
    this._initialData = value as KruiChartRangeBarData[][];
    this._groupSize = this._data?.length ?? 0;
    this._stackedData = this.stackedService.getStackDataFromArray<[number, number]>(this._data);
    this._maxDataLength = this.getMaxDataLength();
    this._getMin();
    this._getMaxAbsolute();
  }

  /** Принимает массив стек-баров: [number | string | Date, [number, number][], any][]. Несовместимо с data */
  @Input('dataStack') set inputStackData(value: KruiChartRangeBarStackedInputData[]) {
    if (!value?.length) {
      this._data = [];
      this._initialData = [];
      return;
    }
    switch (Object.prototype.toString.call(value[0]?.[0])) {
      case '[object Date]':
        value = value.map((d) => [
          (d[0] as Date).getTime(), this.stackedService.checkValueOrderStack(d[1]), d[2] ?? null,
        ]);
        value.sort();
        break;
      case '[object String]':
        value = value.map(d => [
          new Date(d[0]).getTime(), this.stackedService.checkValueOrderStack(d[1]), d[2] ?? null,
        ]);
        value.sort();
        break;
      case '[object Number]':
        value = value.map(d => [d[0], this.stackedService.checkValueOrderStack(d[1]), d[2] ?? null]);
        value.sort((a, b) => (a[0] as number) - (b[0] as number));
        break;
    }

    if (this.enablePreviousData && !!this._stackedData?.length) {
      this._previousData = [...this._stackedData];
    }

    const data = this.stackedService.getArrayDataFromStack<[number, number]>(value as KruiChartRangeBarStackedData);
    this._data = data as KruiChartRangeBarData[][];
    this._initialData = data as KruiChartRangeBarData[][];
    this._groupSize = this._data?.length ?? 0;
    this._stackedData = value as KruiChartRangeBarStackedData;
    this._maxDataLength = this.getMaxDataLength();
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
      Object.entries(getKruiBarDefaultComboCommon())?.forEach(([key, value]) => {
        // @ts-ignore
        if (this[key] === null || this[key] === undefined) {
          // @ts-ignore
          this[key] = value;
        }
      });

      Object.entries(getKruiBarComboDefaultInputs())?.forEach(([key, value]) => {
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
      return this._data?.map(v => v.map((bar) => bar[2])).flat();
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
    this._data?.forEach(v => {
      v?.forEach(([a, b, c]) => {
        if (b == null) {
        } else if (b[0] != null && b[1] != null) {
          min = Math.min(min, ...b.flat(1));
        } else if (b[0] == null && b[1] != null) {
          min = Math.min(min, b[1]);
        } else if (b[0] != null && b[1] == null) {
          min = Math.min(min, b[0]);
        }
      });
    });
    if (min === 0) {
      this._minValue = 0.001;
    } else {
      this._minValue = min - min * 0.001;
    }
  }

  public _getMaxAbsolute(): void {
    let max = Number.NEGATIVE_INFINITY;
    this._data?.forEach(v => {
      v?.forEach(([a, b, c]) => {
        if (b == null) {
          max = Math.max(max, this._minValue);
        } else if (b[0] != null && b[1] != null) {
          max = Math.max(max, ...b.flat(1));
        } else if (b[0] == null && b[1] != null) {
          max = Math.max(max, b[1]);
        } else if (b[0] != null && b[1] == null) {
          max = Math.max(max, b[0]);
        } else {
          max = Math.max(max, this._minValue);
        }
      });
    });
    this._maxValueAbsolute = max + max * 0.001;
    this._maxValueCurrent = max + max * 0.001;
  }

  public _getMaxCurrent(): void {
    let max = Number.NEGATIVE_INFINITY;
    this._data?.forEach((v, i) => {
      if (this.state.get(i)) {
        v?.forEach(([a, b, c]) => {
          if (b == null) {
            max = Math.max(max, this._minValue);
          } else if (b[0] != null && b[1] != null) {
            max = Math.max(max, ...b.flat(1));
          } else if (b[0] == null && b[1] != null) {
            max = Math.max(max, b[1]);
          } else if (b[0] != null && b[1] == null) {
            max = Math.max(max, b[0]);
          } else {
            max = Math.max(max, this._minValue);
          }
        });
      }
    });
    this._maxValueCurrent = max + max * 0.001;
  }

  public getWorkgroundPadding(axisType: KruiChartAxisType): KruiChartWorkgroundPadding {
    if (this._initialData?.length) {
      const firstDataLength = this._data?.[0]?.length;
      const dataLength = this._data?.length;
      const x = axisType === 'enum' ? 0 : (this.wrap.workGroundWidth / (firstDataLength ?? 10)) / (dataLength) ?? 0;
      return {
        top: this.workgroundPadding.top,
        right: this.workgroundPadding.right + x,
        bottom: this.workgroundPadding.bottom,
        left: this.workgroundPadding.left + x,
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
        .attr('width', 0);

      this._target
        .selectAll(`#krui-chart-stack-text-${trendIndex}`)
        .attr('class', 'krui-chart-stack-text--hidden')
        .attr('display', 'none');
    } else {
      this._target
        .selectAll(`#krui-chart-data-bar-${trendIndex}`)
        .attr('class', 'krui-chart-data-bar');

      this._target
        .selectAll(`#krui-chart-stack-text-${trendIndex}`)
        .attr('class', 'krui-chart-stack-text')
        .attr('display', 'visible');
    }

    this.scaleBars(barConfig, true, false, durationToggleAnimation);
  }

  public toggleOpacity(
    trendIndex: number,
    hidden: boolean,
  ): void {
    this.opacityState.set(trendIndex, hidden);
  }

  public renderOpacity(active: boolean): void {
    if (!this._target) return;

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
        primaryAxis = zoomTransform.rescaleX(primaryAxis);
      }
      if (zoomYEnable) {
        secondaryAxis = zoomTransform.rescaleY(secondaryAxis);
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
    primaryAxis: KruiChartScale,
    secondaryAxis: KruiChartScale,
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
        (d) => {
          return `translate(${axisIsEnum(primaryAxis, type)
            ? primaryAxis(d[2])
            : primaryAxis(d[0]) - (this.fixedBarWidth ?
            barConfig.stackWidth :
            barConfig.stackWidth * this._zoomK) / 2}, 0)`;
        })
      .on('mouseover', (event) => this._hoveredTooltipEnumBar = event.target.parentElement);

    const items = bars.selectAll('rect')
      .data(d => {
        return [...d[1]];
      })
      .enter();

    let yCounter = -1;
    let heightCounter = -1;
    items
      .append('rect')
      .attr('class', 'krui-chart-data-bar')
      .attr('id', (_, i) => `krui-chart-data-bar-${i}`)
      .attr('x', (_, i) => {
        const pos = (barConfig.barWidthCalculated + 2 * barConfig.barPadding) * i + barConfig.barPadding + barConfig.stackPadding;
        if (axisIsEnum(primaryAxis, type)) {
          return pos;
        }
        return this.fixedBarWidth ? pos : pos * this._zoomK;
      })
      .attr('y', (_, i) => {
        if (i === 0) {
          yCounter++;
        }
        if (yCounter === barConfig.activeCount) {
          yCounter = 0;
        }
        if (!!this._previousData?.length && this._previousData[yCounter]?.[1]) {
          return notNul(secondaryAxis(this._previousData[yCounter][1][i][1]));
        }
        return secondaryAxis.range()[0];
      })
      .attr('height', (_, i) => {
        if (i === 0) {
          heightCounter++;
        }
        if (heightCounter === barConfig.activeCount) {
          heightCounter = 0;
        }
        if (!!this._previousData?.length && this._previousData[heightCounter]?.[1]) {
          const delta = notNul(secondaryAxis(this._previousData[heightCounter][1][i][0])) - notNul(secondaryAxis(this._previousData[heightCounter][1][i][1]));
          return delta > 0 ? delta : notNul(secondaryAxis(this._previousData[heightCounter][1][i][0]));
        }
        return 0;
      })
      .attr('width', () => {
        if (axisIsEnum(primaryAxis, type)) {
          return barConfig.barWidthCalculated;
        }
        return this.fixedBarWidth ? barConfig.barWidthCalculated : barConfig.barWidthCalculated * this._zoomK;
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
        .attr('height', secondaryAxis.range()[0])
        .attr('width', barConfig.stackWidth * this._zoomK)
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

    (items.selectAll('rect.krui-chart-data-bar') as d3.Selection<SVGRectElement, [number, number], SVGRectElement, unknown>)
      .transition()
      .duration(this.animationType === 'none' ? 0 : this._tempDurationAnimation)
      .attr('y', d => {
        return notNul(secondaryAxis(d[1]));
      })
      .attr('height', (d) => {
        if (!d) return 0;
        const delta = notNul(secondaryAxis(d[0])) - notNul(secondaryAxis(d[1]));
        return delta > 0 ? delta : notNul(secondaryAxis(d[1]));
      });

    if (this.showValues) {
      let yCounterText = -1;
      items
        .append('text')
        .attr('class', 'krui-chart-stack-text')
        .attr('id', (_, i) => `krui-chart-stack-text-${i}`)
        .attr('x', (_, i) => {
          const pos = (barConfig.barWidthCalculated + 2 * barConfig.barPadding) * i + barConfig.barWidthCalculated / 2 + barConfig.barPadding + barConfig.stackPadding;
          if (axisIsEnum(primaryAxis, type)) {
            return pos;
          }
          return this.fixedBarWidth ? pos : pos * this._zoomK;
        })
        .attr('y', (d, i) => {
          if (i === 0) {
            yCounterText++;
          }
          if (yCounterText === barConfig.activeCount) {
            yCounterText = 0;
          }
          if (!!this._previousData?.length && this._previousData[yCounterText]?.[1]) {
            return getBarTextPositionStack(this.valuePosition, this.valuesFontSizePx, secondaryAxis, this._previousData[yCounterText][1][i]);
          }
          return secondaryAxis.range()[0];
        })
        // @ts-ignore
        .text((d) => {
          if (isNaN(d[0]) || isNaN(d[1]) || d === null) return null;
          if (this.showEnumValues && axisIsEnum(primaryAxis, type)) {
            return d;
          }
          return adaptiveFixed(d[1], 2);
        })
        .attr('fill', this.valuesColor)
        .style('font-size', `${this.valuesFontSizePx}px`)
        .style('font-family', this.valuesFontFamily)
        .attr('text-anchor', 'middle')
        .style('alignment-baseline', 'middle')
        .transition()
        .duration(this.animationType === 'none' ? 0 : this._tempDurationAnimation)
        .attr('y', d => getBarTextPositionStack(this.valuePosition, this.valuesFontSizePx, secondaryAxis, d));
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
    (target.selectAll('.krui-chart-stack') as d3.Selection<SVGTextElement, KruiChartStackedBarData, SVGTextElement, unknown>)
      .attr(
        'transform',
        (d) => {
          return `translate(${axisIsEnum(primaryAxis, type)
            ? primaryAxis(d[2])
            : primaryAxis(d[0]) - (this.fixedBarWidth ?
            barConfig.stackWidth :
            barConfig.stackWidth * this._zoomK) / 2}, 0)`;
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
      (this._target.selectAll(`.krui-chart-stack`)
        .selectAll(`.krui-chart-data-bar`) as d3.Selection<SVGRectElement, [number, number], SVGRectElement, unknown>)
        .transition()
        .duration(animationDuration)
        .attr('x', (d, i) => {
          const pos = (barConfig.barWidthCalculated + 2 * barConfig.barPadding) * i + barConfig.barPadding + barConfig.stackPadding;
          if (barConfig.type === 'enum') {
            return pos;
          }
          return this.fixedBarWidth ? pos : pos * this._zoomK;
        })
        .attr('width', () => {
          if (barConfig.type === 'enum') {
            return barConfig.barWidthCalculated;
          }
          return this.fixedBarWidth ? barConfig.barWidthCalculated : barConfig.barWidthCalculated * this._zoomK;
        });
    }
    if (secondaryAxisEnable) {
      (this._target.selectAll(`.krui-chart-data-bar`) as d3.Selection<SVGRectElement, [number, number], SVGRectElement, unknown>)
        .transition()
        .duration(animationDuration)
        .attr('y', d => {
          return notNul(barConfig.secondaryAxis(d[1]));
        })
        .attr('height', (d) => {
          if (!d) return 0;
          const delta = notNul(barConfig.secondaryAxis(d[0])) - notNul(barConfig.secondaryAxis(d[1]));
          return delta > 0 ? delta : notNul(barConfig.secondaryAxis(d[1]));
        });
    }
    if (barConfig.type === 'enum' || this.tooltipHoverEffect) {
      this._target
        .selectAll('.krui-chart-tooltip-bar')
        .attr('height', barConfig.secondaryAxis.range()[0])
        .attr('width', () => {
          if (axisIsEnum(barConfig.primaryAxis, barConfig.type)) {
            return barConfig.stackWidth;
          }
          return this.fixedBarWidth ? barConfig.stackWidth : barConfig.stackWidth * this._zoomK;
        });
      this.triggerEnumTooltipTimeout();
    }
    if (this.showValues) {
      (this._target.selectAll(`.krui-chart-stack`)
        .selectAll(`.krui-chart-stack-text`) as d3.Selection<SVGRectElement, [number, number], SVGRectElement, unknown>)
        .transition()
        .duration(animationDuration)
        .attr('x', (_, i) => {
          const pos = (barConfig.barWidthCalculated + 2 * barConfig.barPadding) * i + barConfig.barWidthCalculated / 2 + barConfig.barPadding + barConfig.stackPadding;
          if (barConfig.type === 'enum') {
            return pos;
          }
          return this.fixedBarWidth ? pos : pos * this._zoomK;
        })
        .attr('y', d => getBarTextPositionStack(this.valuePosition, this.valuesFontSizePx, barConfig.secondaryAxis, d));
    }
  }

  // endregion

  // region additional

  private getBarsConfigs(
    type: KruiChartAxisType,
    primaryAxis: KruiChartScale,
    secondaryAxis: KruiChartScale,
  ): KruiChartRangeBarConfig {
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
      stackWidth = this._context.canvasWidth / this._maxDataLength;
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
