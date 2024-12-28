import { Directive, Host, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { ScaleBand, ZoomTransform } from 'd3';
import {
  getKruiBarDefaultCommon,
  getKruiBarDefaultInputs,
  KRUI_CHART_SMART_SCROLL_COLOR,
  KRUI_CHART_TEXT_COLOR,
} from '../constants';
import { adaptiveFixed, transformCaption } from '../constants/inner/function';
import { axisIsEnum, notNul } from '../constants/inner/pure';
import { KruiChartLayerDirective } from '../content-directives/layer.directive';
import { KRUI_CHART_LAYER_TOKEN, KRUI_CHART_PALETTE_PROVIDER_TOKEN, KRUI_CHART_WRAP_TOKEN } from '../injection-tokens';
import {
  KruiChartAxisType,
  KruiChartBarAnimationType,
  KruiChartBarColorType,
  KruiChartBarConfig,
  KruiChartBarData,
  KruiChartBarInputData,
  KruiChartBarTextPosition,
  KruiChartDataLayerAnimated,
  KruiChartDataLayerBarInputs,
  KruiChartDataLayerColorProvider,
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
  KruiChartTooltipDataRow,
  KruiChartTooltipType,
  KruiChartWorkgroundPadding,
} from '../models';
import { KruiChartWrapperDirective } from '../wrapper-directives/wrapper.directive';
import { getBarTextPosition } from '../constants/inner/bar.pure';


@Directive({
  selector: '[kruiChartBar]',
  exportAs: 'kruiChartBar',
  providers: [
    {
      provide: KruiChartDataLayerColorProvider,
      useExisting: KruiChartBarDirective,
    },
    {
      provide: KruiChartDataLayerValueShower,
      useExisting: KruiChartBarDirective,
    },
    {
      provide: KruiChartDataLayerAnimated,
      useExisting: KruiChartBarDirective,
    },
    {
      provide: KruiChartDataLayerProvider,
      useExisting: KruiChartBarDirective,
    },
    {
      provide: KruiChartDataPointProvider,
      useExisting: KruiChartBarDirective,
    },
    {
      provide: KruiChartDataLayerRenderer,
      useExisting: KruiChartBarDirective,
    },
    {
      provide: KruiChartDataLayerTooltipProvider,
      useExisting: KruiChartBarDirective,
    },
  ],
  standalone: false,
})
export class KruiChartBarDirective implements OnInit,
  OnChanges,
  KruiChartDataLayerColorProvider,
  KruiChartDataLayerValueShower,
  KruiChartDataLayerAnimated,
  KruiChartDataLayerProvider<number | string, number>,
  KruiChartDataLayerRenderer,
  KruiChartDataLayerTooltipProvider<number | string>,
  KruiChartDataLayerBarInputs {

  // region definition
  public _defaultColor!: string;

  @Input() public showValues: boolean = false;
  @Input() public valuesColor: string = KRUI_CHART_TEXT_COLOR;
  @Input() public valuesFontSizePx: number = 12;
  @Input() public valuesFontFamily: string = 'Tahoma';
  @Input() public captions: (string | number | Date)[] = [''];
  @Input() public engUnits: string[] = [''];

  @Input() public durationAnimation: number = 2000;
  @Input() public durationToggleAnimation: number = 500;
  @Input() public animation: boolean = true;

  public state: Map<number, boolean> = new Map<number, boolean>();
  public opacityState: Map<number, boolean> = new Map<number, boolean>();

  /** Перерисовка осей графика по клику на легенду */
  @Input() public reRangeThenLegendClick: boolean = true;
  @Input() public reRangeThenDataChange: boolean = false;
  @Input() public workgroundPadding: KruiChartWorkgroundPadding = { top: 5, right: 0, left: 0, bottom: 0 };
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
  @Input() public barBorder: boolean = false;
  @Input() public barBorderColor!: string;
  @Input() public fixedBarWidth: boolean = false;
  @Input() public showEnumValues: boolean = false;
  @Input() public valuePosition: KruiChartBarTextPosition = 'center';
  @Input() public animationType: KruiChartBarAnimationType = 'growth';

  @Input() public tooltipHoverEffect: boolean = false;
  @Input() public tooltipHoverColor: string = KRUI_CHART_SMART_SCROLL_COLOR;

  @Input() public enablePreviousData: boolean = true;
  @Input() public startInNull: boolean = true;

  private _tempDurationAnimation: number = 0;
  private _data!: KruiChartBarData[];
  private _initialData!: KruiChartBarData[];
  private _previousData!: KruiChartBarData[];

  // endregion

  constructor(
    @Inject(KRUI_CHART_PALETTE_PROVIDER_TOKEN) @Host() public paletteProvider: KruiChartPaletteProvider,
    @Inject(KRUI_CHART_WRAP_TOKEN) @Host() public wrap: KruiChartWrapperDirective,
    @Inject(KRUI_CHART_LAYER_TOKEN) @Host() public layerDirective: KruiChartLayerDirective,
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

  @Input('data') set inputData(value: KruiChartBarInputData[]) {
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

    if (this.enablePreviousData && !!this._data?.length) {
      this._previousData = [...this._data];
    }

    this._data = value as KruiChartBarData[];
    this._initialData = value as KruiChartBarData[];
    this._getMin();
    this._getMaxAbsolute();
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
      this.colors = null;
    }

    if (!this.valuesColor) {
      this.valuesColor = this.color;
    }

    if (!this.barBorderColor) {
      this.barBorderColor = this.color;
    }

    if (this.useDefaultCheck) {
      Object.entries(getKruiBarDefaultCommon())?.forEach(([key, value]) => {
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

  public ngOnChanges({ inputData }: SimpleChanges): void {
    if (!inputData?.isFirstChange()) {
      this.layerDirective.reDraw(null, false, true);
    }

    this._tempDurationAnimation = this.durationAnimation;
  }

  // region get functions

  public getColor(i = 0): string {
    if (this.barType === 'gradient') {
      return this.colors?.[i] ?? this.color;
    }
    return this.color;
  }

  public getDomain(axisType: KruiChartAxisType | null): number[] | string[] {
    if (axisType && axisType === 'enum') {
      return this._data?.map((bar) => bar[2]);
    }
    return this._data?.map((bar) => notNul(bar[0]));
  }

  public getRange(): number[] {
    return [
      this.startInNull ? 0 : this._minValue,
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
      this._minValue = min - min * 0.001;
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
    this._maxValueAbsolute = max + max * 0.001;
    this._maxValueCurrent = max + max * 0.001;
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
    this._maxValueCurrent = max + max * 0.001;
  }

  public getWorkgroundPadding(axisType: KruiChartAxisType): KruiChartWorkgroundPadding {
    if (this._initialData?.length) {
      const x = axisType === 'enum' ? 0 : (this.wrap.workGroundWidth / (this._data?.length ?? 10)) / 2 ?? 0;
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
        .selectAll(`.krui-chart-data-bar`)
        .transition()
        .duration(durationToggleAnimation)
        .attr('y', secondaryAxis.range()[0]);

      this._target
        .selectAll(`.krui-chart-stack-text`)
        .transition()
        .duration(durationToggleAnimation)
        .attr('y', secondaryAxis.range()[0])
        .attr('display', 'none');
    } else {
      this._target
        .selectAll(`.krui-chart-stack-text`)
        .attr('display', 'visible');

      this.scaleBars(barConfig, false, true, durationToggleAnimation);
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
    return;
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

    const data: any = this._initialData;
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
    return [
      {
        value: data[index]?.[1],
        valueTitle: data[index]?.[0],
        title: transformCaption(this.captions[0]),
        color: this.getColor(),
        hidden: this.state.get(0) ?? false,
        index,
        engUnits: this.engUnits[0],
        type: 'bar',
      },
    ];
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
    const data: any = this._initialData;
    const index = this._data.findIndex(d => d[2] === value);
    if (index === undefined || index === null || index === -1) return nullObject;
    return [
      {
        value: data[index]?.[1],
        valueTitle: data[index]?.[2],
        title: transformCaption(this.captions[0]),
        color: this.getColor(),
        hidden: this.state.get(0) ?? false,
        index,
        engUnits: this.engUnits[0],
        type: 'bar',
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
    });
  }

  public getBandWidth(): number {
    return this._bandwidth ?? 0;
  }

  private renderBars(
    target: KruiChartRenderTarget,
    context: KruiChartLayerDrawContext,
    primaryAxis: KruiChartScale, // x
    secondaryAxis: KruiChartScale, // y
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
      .data(this._data)
      .enter()
      .append('g')
      .attr('class', 'krui-chart-stack')
      .attr('tooltipData', d => axisIsEnum(primaryAxis, type) ? d[2] : d[0])
      .attr(
        'transform',
        d => {
          return `translate(${axisIsEnum(primaryAxis, type)
            ?
            primaryAxis(d[2])
            :
            primaryAxis(d[0]) - (this.fixedBarWidth ?
              barConfig.barWidthCalculated :
              barConfig.barWidthCalculated * this._zoomK)}, 0)`;
        })
      .on('mouseover', (event) => this._hoveredTooltipEnumBar = event.target.parentElement);

    bars
      .append('rect')
      .attr('class', 'krui-chart-data-bar')
      .attr('x', () => {
        if (axisIsEnum(primaryAxis, type)) {
          return barConfig.barPadding / 2;
        }
        return this.fixedBarWidth ? barConfig.barWidthCalculated / 2 : barConfig.barWidthCalculated / 2 * this._zoomK;
      })
      .attr('y', (_, i) => {
        if (!!this._previousData?.length && this._previousData[i]) {
          return notNul(secondaryAxis(this._previousData[i][1]));
        }
        return secondaryAxis.range()[0];
      })
      .attr('height', (_, i) => {
        if (!!this._previousData?.length && this._previousData[i]) {
          const delta = secondaryAxis.range()[0] - notNul(secondaryAxis(this._previousData[i][1]));
          return delta > 0 ? delta : notNul(secondaryAxis(this._previousData[i][1]));
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
      .attr('fill', this.barType === 'solidColor' ? this.color : `url(#${this._id}--area-filling)`)
      .attr('stroke', this.barBorder ? this.barBorderColor : 'none')
      .attr('opacity', (d) => !!d[1] ? this.barOpacity : 0);

    if (type === 'enum' || this.tooltipHoverEffect) {
      const tooltip = bars
        .append('rect')
        .attr('class', 'krui-chart-tooltip-bar')
        .attr('id', (_, i) => `krui-chart-tooltip-bar-${i}`)
        .attr('x', () => {
          if (axisIsEnum(primaryAxis, type)) {
            return barConfig.barPadding / 2;
          }
          return this.fixedBarWidth ?
            barConfig.barWidthCalculated / 2 :
            barConfig.barWidthCalculated / 2 * this._zoomK;
        })
        .attr('y', 0)
        .attr('height', secondaryAxis.range()[0])
        .attr('width', () => {
          if (axisIsEnum(primaryAxis, type)) {
            return barConfig.barWidthCalculated;
          }
          return this.fixedBarWidth ? barConfig.barWidthCalculated : barConfig.barWidthCalculated * this._zoomK;
        })
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

    bars.select('rect')
      .transition()
      .duration(this.animationType === 'none' ? 0 : this._tempDurationAnimation)
      .attr('y', d => notNul(secondaryAxis(d[1])))
      .attr('height', d => {
        if (!d[1]) return 0;
        const delta = secondaryAxis.range()[0] - notNul(secondaryAxis(d[1]));
        return delta > 0 ? delta : notNul(secondaryAxis(d[1]));
      });

    if (this.showValues) {
      bars
        .append('text')
        .attr('class', 'krui-chart-stack-text')
        .attr('x', () => {
          if (axisIsEnum(primaryAxis, type)) {
            return (barConfig.barWidthCalculated + barConfig.barPadding) / 2;
          }
          return this.fixedBarWidth ? barConfig.barWidthCalculated : barConfig.barWidthCalculated * this._zoomK;
        })
        .attr('y', (_, i) => {
          if (!!this._previousData?.length && this._previousData[i]) {
            return getBarTextPosition(this.valuePosition, this.valuesFontSizePx, barConfig.secondaryAxis, this._previousData[i][1]);
          }
          return secondaryAxis.range()[0];
        })
        .text(d => {
          if (isNaN(d[1]) || d[1] === null) return null;
          if (this.showEnumValues && axisIsEnum(primaryAxis, type)) {
            return d[2];
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
        .attr('y', d => getBarTextPosition(this.valuePosition, this.valuesFontSizePx, secondaryAxis, d[1]));
    }

    if (this.state.get(0)) {
      this.toggleState(0, true, 0);
    }
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
          return `translate(${axisIsEnum(primaryAxis, type)
            ?
            primaryAxis(d[2])
            :
            primaryAxis(d[0]) - (this.fixedBarWidth ?
              barConfig.barWidthCalculated :
              barConfig.barWidthCalculated * this._zoomK)}, 0)`;
        });

    this.scaleBars(barConfig, true, true, 0);
  }

  private scaleBars(
    barConfig: KruiChartBarConfig,
    primaryAxisEnable: boolean,
    secondaryAxisEnable: boolean,
    animationDuration: number,
  ): void {

    if (primaryAxisEnable) {
      (this._target.selectAll('.krui-chart-data-bar') as d3.Selection<SVGRectElement, KruiChartBarData, SVGRectElement, unknown>)
        .transition()
        .duration(animationDuration)
        .attr('x', () => {
          if (barConfig.type === 'enum') {
            return barConfig.barPadding / 2;
          }
          return this.fixedBarWidth ?
            barConfig.barWidthCalculated / 2 :
            barConfig.barWidthCalculated / 2 * this._zoomK;
        })
        .attr('width', () => {
          if (barConfig.type === 'enum') {
            return barConfig.barWidthCalculated;
          }
          return this.fixedBarWidth ? barConfig.barWidthCalculated : barConfig.barWidthCalculated * this._zoomK;
        });
    }
    if (secondaryAxisEnable) {
      (this._target.selectAll(`.krui-chart-data-bar`) as d3.Selection<SVGRectElement, KruiChartBarData, SVGRectElement, unknown>)
        .transition()
        .duration(animationDuration)
        .attr('y', d => notNul(barConfig.secondaryAxis(d[1])))
        .attr('height', d => {
          if (!d[1]) return 0;
          const delta = barConfig.secondaryAxis.range()[0] - notNul(barConfig.secondaryAxis(d[1]));
          return delta > 0 ? delta : notNul(barConfig.secondaryAxis(d[1]));
        });
    }
    if (barConfig.type === 'enum' || this.tooltipHoverEffect) {
      this._target
        .selectAll('.krui-chart-tooltip-bar')
        .attr('x', () => {
          if (axisIsEnum(barConfig.primaryAxis, barConfig.type)) {
            return barConfig.barPadding / 2;
          }
          return this.fixedBarWidth ?
            barConfig.barWidthCalculated / 2 :
            barConfig.barWidthCalculated / 2 * this._zoomK;
        })
        .attr('width', () => {
          if (axisIsEnum(barConfig.primaryAxis, barConfig.type)) {
            return barConfig.barWidthCalculated;
          }
          return this.fixedBarWidth ? barConfig.barWidthCalculated : barConfig.barWidthCalculated * this._zoomK;
        })
        .attr('height', barConfig.secondaryAxis.range()[0]);
      this.triggerEnumTooltipTimeout();
    }
    if (this.showValues) {
      (this._target.selectAll(`.krui-chart-stack-text`) as d3.Selection<SVGTextElement, KruiChartBarData, SVGTextElement, unknown>)
        .transition()
        .duration(animationDuration)
        .attr('x', () => {
          if (barConfig.type === 'enum') {
            return (barConfig.barWidthCalculated + barConfig.barPadding) / 2;
          }
          return this.fixedBarWidth ? barConfig.barWidthCalculated : barConfig.barWidthCalculated * this._zoomK;
        })
        .attr('y', d => getBarTextPosition(this.valuePosition, this.valuesFontSizePx, barConfig.secondaryAxis, d[1]));
    }
  }

  // endregion

  // region additional

  private getBarsConfigs(
    type: KruiChartAxisType,
    primaryAxis: KruiChartScale,
    secondaryAxis: KruiChartScale,
  ): KruiChartBarConfig {
    let barWidth: number;
    let barWidthCalculated: number;
    let barPadding: number;

    if (type === 'enum') {
      barWidth = !this.state.get(0) ? (primaryAxis as ScaleBand<any>).bandwidth() : 0;
      barWidthCalculated = barWidth * this._barWidthPercent / 100;
      barPadding = barWidth * (1 - this._barWidthPercent / 100);
    } else {
      barWidth = !this.state.get(0) ? (this._context.canvasWidth / this._data.length) : 0;
      barWidthCalculated = barWidth * this._barWidthPercent / 100;
      barPadding = barWidth * (1 - this._barWidthPercent / 100) / 2;
    }
    this._bandwidth = barWidth;
    return {
      type,
      barWidth,
      barWidthCalculated,
      barPadding,
      primaryAxis,
      secondaryAxis,
    };
  }

  // endregion
}
