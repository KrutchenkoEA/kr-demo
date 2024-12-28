import { AfterViewInit, ContentChildren, Directive, Host, Inject, Input, OnInit, QueryList } from '@angular/core';
import * as d3 from 'd3';
import {
  formatter,
  getKruiLayerDefaultInputs,
  KRUI_CHART_AXIS_COLOR,
  KRUI_CHART_AXIS_HEIGHT,
  KRUI_CHART_AXIS_OFFSET,
  KRUI_CHART_AXIS_WIDTH,
  KRUI_CHART_GRID_COLOR,
  KRUI_CHART_TEXT_COLOR,
  KRUI_CHART_TOOLTIP_COLOR,
} from '../constants';
import {
  getEnumAxisDomain,
  getNumberAxisDomain,
  getTimeAxisDomain,
  getWorkgroundPadding,
} from '../constants/inner/pure';
import {
  KRUI_CHART_AXIS_TOKEN,
  KRUI_CHART_DATA_LAYER_TOKEN,
  KRUI_CHART_GRID_TOKEN,
  KRUI_CHART_LAYER_TOKEN,
  KRUI_CHART_TOOLTIP_PROVIDER_TOKEN,
  KRUI_CHART_WRAP_TOKEN,
} from '../injection-tokens';
import {
  KruiChartAxis,
  KruiChartAxisProvider,
  KruiChartGridProvider,
  KruiChartLayerDataProvider,
  KruiChartLayerDrawContext,
  KruiChartLayerInputs,
  KruiChartLayerRenderer,
  KruiChartLayerStateManager,
  KruiChartLayerTooltip,
  KruiChartLayerZoom,
  KruiChartLegendGroup,
  KruiChartScale,
  KruiChartScaleLinear,
  KruiChartTooltipDataLayer,
  KruiChartTooltipDataRow,
  KruiChartTooltipType,
} from '../models';
import { KruiChartTooltipProviderDirective } from '../wrapper-directives/tooltip-provider.directive';
import { KruiChartWrapperDirective } from '../wrapper-directives/wrapper.directive';
import { KruiChartDataLayerDirective } from './data-layer.directive';

@Directive({
  selector: 'krui-chart-layer',
  providers: [
    {
      provide: KruiChartLayerStateManager, useExisting: KruiChartLayerDirective,
    },
    {
      provide: KruiChartLayerDataProvider, useExisting: KruiChartLayerDirective,
    },
    {
      provide: KruiChartLayerRenderer, useExisting: KruiChartLayerDirective,
    },
    {
      provide: KruiChartLayerZoom, useExisting: KruiChartLayerDirective,
    },
    {
      provide: KruiChartLayerTooltip, useExisting: KruiChartLayerDirective,
    },
    { provide: KRUI_CHART_LAYER_TOKEN, useExisting: KruiChartLayerDirective },
  ],
  standalone: false,
})
export class KruiChartLayerDirective implements OnInit,
  AfterViewInit,
  KruiChartLayerStateManager,
  KruiChartLayerDataProvider,
  KruiChartLayerRenderer,
  KruiChartLayerZoom,
  KruiChartLayerTooltip,
  KruiChartLayerInputs {
  public static nextId: number = 0;
  @Input() public layerTitle: string = '';
  @Input() public tooltipEnable: boolean = true;
  @Input() public tooltipColor: string = KRUI_CHART_TOOLTIP_COLOR;
  @Input() public zoomPrimaryEnable: boolean = true;
  @Input() public zoomSecondaryEnable: boolean = false;
  @Input() public useDefaultCheck: boolean = true;
  public readonly layerId!: string;
  public layerLabels: KruiChartLegendGroup | null = null;

  public _scales: Map<string, KruiChartScale> = new Map();
  public _axis: Map<string, KruiChartAxis> = new Map();
  public _layerSelection!: d3.Selection<SVGGElement, unknown, null, undefined>;
  public _zoomEvent!: d3.D3ZoomEvent<any, any>;
  @ContentChildren(KRUI_CHART_AXIS_TOKEN)
  public readonly axisList!: QueryList<KruiChartAxisProvider>;
  @ContentChildren(KRUI_CHART_GRID_TOKEN)
  public readonly gridList!: QueryList<KruiChartGridProvider>;
  @ContentChildren(KRUI_CHART_DATA_LAYER_TOKEN)
  public readonly dataLayerList!: QueryList<KruiChartDataLayerDirective<any, any>>;
  private _isFirstZoom: boolean = true;

  constructor(
    @Inject(KRUI_CHART_WRAP_TOKEN) @Host() public wrap: KruiChartWrapperDirective,
    @Inject(KRUI_CHART_TOOLTIP_PROVIDER_TOKEN) @Host() public tooltipDirective: KruiChartTooltipProviderDirective,
  ) {
    this.layerId! = `${this.wrap.id}--layer-${++KruiChartLayerDirective.nextId}`;
  }

  public ngOnInit(): void {
    if (this.useDefaultCheck) {
      Object.entries(getKruiLayerDefaultInputs())?.forEach(([key, value]) => {
        // @ts-ignore
        if (this[key] === null || this[key] === undefined) {
          // @ts-ignore
          this[key] = value;
        }
      });
    }
  }

  public ngAfterViewInit(): void {
    this.createLegendLabels();
  }

  public toggleAll(hidden: boolean): void {
    this.dataLayerList.forEach((dataLayer, index) => dataLayer.toggleState(index, hidden));
  }

  public renderOpacity(active: boolean): void {
    this.dataLayerList.forEach((dataLayer, index) => dataLayer.renderOpacity(active));
  }

  public getAxis(): QueryList<KruiChartAxisProvider> {
    return this.axisList;
  }

  public getLegendLabels(): KruiChartLegendGroup {
    return this.layerLabels ? this.layerLabels : this.createLegendLabels();
  }

  public createLegendLabels(): KruiChartLegendGroup {
    this.layerLabels = {
      inactive: false,
      layerId: this.layerId,
      layerTitle: this.layerTitle,
      dataLayer: [],
      axis: this.axisList,
      grid: this.gridList,
    };

    for (let layer of this.dataLayerList) {
      this.layerLabels.dataLayer.push({
        layer,
        data: layer.getLegendData(),
      });
    }
    return this.layerLabels;
  }

  public draw(): void {
    this.createScales();
    this.createAxis();
    this.drawLayer();
    this.drawAxis();
    this.drawGrid();
    this.drawData();
  }

  public createScales(): void {
    for (const axis of this.axisList) {
      let scale: KruiChartScale;

      if (axis.type === 'number') {
        scale = d3.scaleLinear().nice().domain(getNumberAxisDomain(axis, this.dataLayerList));
      } else if (axis.type === 'enum') {
        scale = d3.scaleBand().domain(getEnumAxisDomain(axis, this.dataLayerList));
      } else {
        scale = d3.scaleTime().nice().domain(getTimeAxisDomain(axis, this.dataLayerList));
      }

      const workgroundPadding = getWorkgroundPadding(this.dataLayerList, axis.type);
      if (axis.position === 'bottom') {
        scale.range([workgroundPadding.left, this.wrap.workGroundWidth - workgroundPadding.right]);
      } else if (axis.position === 'top') {
        scale.range([workgroundPadding.left, this.wrap.workGroundWidth - workgroundPadding.right]);
      } else if (axis.position === 'left') {
        scale.range([this.wrap.workGroundHeight - workgroundPadding.bottom, workgroundPadding.top]);
      } else {
        scale.range([this.wrap.workGroundHeight - workgroundPadding.bottom, workgroundPadding.top]);
      }
      this._scales.set(axis.name, scale);
    }
  }

  public createAxis(): void {
    for (const axis of this.axisList) {
      const scale = this._scales.get(axis.name) as KruiChartScale;

      let d3Axis: KruiChartAxis;
      if (axis.position === 'bottom') {
        d3Axis = d3.axisBottom(scale);
      } else if (axis.position === 'top') {
        d3Axis = d3.axisTop(scale);
      } else if (axis.position === 'left') {
        d3Axis = d3.axisLeft(scale);
      } else {
        d3Axis = d3.axisRight(scale);
      }

      this._axis.set(axis.name, d3Axis.ticks(axis.ticks));
    }
  }

  public drawLayer(): void {
    if (this._layerSelection) {
      this._layerSelection.remove();
    }

    this._layerSelection = d3
      .select(this.wrap.canvas)
      .append('g')
      .attr('id', `${this.layerId}`)
      .attr('class', `krui-chart-layer`);
  }

  public drawAxis(): void {
    for (const axis of this.axisList?.filter(axis => axis.drawAxisLabel)) {
      const d3Axis = this._axis.get(axis.name) as KruiChartAxis;
      const g = this._layerSelection
        .append('g')
        .attr('id', `${this.layerId}--axis-${axis.name}`)
        .attr('class', `krui-chart-axis`)
        .attr('color', axis?.color ? axis.color : KRUI_CHART_AXIS_COLOR);


      let clipPath = g.append('clipPath')
        .attr('id', `${this.layerId}--clipPath-axis--${axis.name}`)
        .append('rect')
        .attr('id', `${this.layerId}--clipPath-axis--${axis.name}-rect`);

      if (axis.position === 'bottom') {
        const offset = (this.wrap.axisLevelMap.get(this.layerId)?.get('bottom') ?? 0) * KRUI_CHART_AXIS_HEIGHT;
        g.attr('transform', `translate(0, ${this.wrap.workGroundHeight + offset})`);
        clipPath
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', this.wrap.workGroundWidth)
          .attr('height', KRUI_CHART_AXIS_HEIGHT);
      } else if (axis.position === 'top') {
        const offset = (this.wrap.axisLevelMap.get(this.layerId)?.get('top') ?? 0) * KRUI_CHART_AXIS_HEIGHT;
        g.attr('transform', `translate(0, -${offset})`);
        clipPath
          .attr('x', 0)
          .attr('y', -KRUI_CHART_AXIS_HEIGHT)
          .attr('width', this.wrap.workGroundWidth)
          .attr('height', KRUI_CHART_AXIS_HEIGHT);

      } else if (axis.position === 'left') {
        const offset = (this.wrap.axisLevelMap.get(this.layerId)?.get('left') ?? 0) * KRUI_CHART_AXIS_WIDTH;
        g.attr('transform', `translate(-${offset}, 0)`);
        clipPath
          .attr('x', -(offset + KRUI_CHART_AXIS_WIDTH))
          .attr('y', -KRUI_CHART_AXIS_OFFSET)
          .attr('width', KRUI_CHART_AXIS_WIDTH)
          .attr('height', this.wrap.workGroundHeight + KRUI_CHART_AXIS_OFFSET * 2);
      } else {
        const offset = (this.wrap.axisLevelMap.get(this.layerId)?.get('right') ?? 0) * KRUI_CHART_AXIS_WIDTH;
        g.attr('transform', `translate(${this.wrap.workGroundWidth + offset}, 0)`);
        clipPath
          .attr('x', 0)
          .attr('y', -KRUI_CHART_AXIS_OFFSET)
          .attr('width', KRUI_CHART_AXIS_WIDTH)
          .attr('height', this.wrap.workGroundHeight + KRUI_CHART_AXIS_OFFSET * 2);
      }

      let gAxis = null;
      if (axis.type === 'time') {
        gAxis = g.call(d3Axis.tickFormat((d) => this.wrap.formatFunc ?
          this.wrap?.formatFunc(d, this.wrap.language) :
          formatter(d, this.wrap.language)));
      } else {
        gAxis = g.call(d3Axis);
      }

      gAxis
        .selectAll('text')
        .attr('width', '50%')
        .attr('color', axis?.fontColor ? axis.fontColor : KRUI_CHART_TEXT_COLOR)
        .style('font-size', axis.fontSize)
        .style('font-family', axis.fontFamily);
      gAxis
        .select('path')
        .attr('color', axis?.color ? axis.color : KRUI_CHART_AXIS_COLOR);

      g.attr('clip-path', () => `url(#${this.layerId}--clipPath-axis--${axis.name})`);

      if (!axis.drawAxisLabelLine) {
        gAxis.selectAll('line').remove();
        gAxis.selectAll('path').remove();
      }
    }
  }

  public drawGrid(): void {
    for (const grid of this.gridList?.filter(grid => grid.drawGrid)) {
      const axis = this.axisList.find((axis) => axis.name === grid.axis);
      if (!axis) {
        continue;
      }

      const d3Axis = this._axis.get(grid.axis) as KruiChartAxis;
      const tickSize =
        axis.position === 'left' || axis.position === 'right'
          ? -this.wrap.workGroundWidth
          : -this.wrap.workGroundHeight;

      const g = this._layerSelection
        .append('g')
        .attr('id', `${this.layerId}--grid-${axis.name}`)
        .attr('class', `krui-chart-grid`)
        .attr('color', grid?.color ? grid.color : KRUI_CHART_GRID_COLOR);

      let clipPath = g.append('clipPath')
        .attr('id', `${this.layerId}--clipPath-grid--${axis.name}`)
        .append('rect')
        .attr('id', `${this.layerId}--clipPath-grid--${axis.name}-rect`)
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', this.wrap.workGroundWidth)
        .attr('height', this.wrap.workGroundHeight);

      if (axis.position === 'bottom') {
        g.attr('transform', `translate(0, ${this.wrap.workGroundHeight})`);
        clipPath.attr('y', -this.wrap.workGroundHeight);
      } else if (axis.position === 'top') {
        g.attr('transform', `translate(0, 0)`);
      } else if (axis.position === 'left') {
        g.attr('transform', `translate(0, 0)`);
      } else {
        g.attr('transform', `translate(${this.wrap.workGroundWidth}, 0)`);
        clipPath.attr('x', -this.wrap.workGroundWidth);
      }

      g.attr('clip-path', () => `url(#${this.layerId}--clipPath-grid--${axis.name})`);

      g.call(d3Axis.tickFormat(() => '').tickSizeInner(tickSize))
        .select('path')
        .remove();
    }
  }

  public drawData(): void {
    const primaryAxis = this.axisList.find((axis) => axis.primary);
    if (!primaryAxis) {
      return;
    }

    for (const dataLayer of this.dataLayerList) {
      const target = this._layerSelection
        .append('g')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', this.wrap.workGroundWidth)
        .attr('height', this.wrap.workGroundHeight)
        .attr('id', `${this.layerId}--${dataLayer.id}`)
        .attr('class', `krui-chart-data-layer`);

      const context = this.getContext();
      if (context) {
        dataLayer.render(target, context);
      }
    }
  }

  public reDraw(
    event: d3.D3ZoomEvent<any, any> | null = null,
    isResize: boolean = false,
    animation: boolean = false,
  ): void {
    this._scales.clear();
    this.createScales();

    if (!!event) {
      this._zoomEvent = event;
    }
    this.zoomAxis(this._zoomEvent, isResize);
    this.zoomLayer(this._zoomEvent, animation);
  }

  public getContext(): KruiChartLayerDrawContext | null {

    const primaryAxis = this.axisList.find((axis) => axis.primary);
    const secondaryAxis = this.axisList.find((axis) => !axis.primary);

    if (primaryAxis && secondaryAxis) {
      return {
        canvasWidth: this.wrap.workGroundWidth,
        canvasHeight: this.wrap.workGroundHeight,
        primaryAxis: {
          name: primaryAxis.name,
          type: primaryAxis.type,
          position: primaryAxis.position,
          d3Scale: this._scales.get(primaryAxis.name) as KruiChartScale,
          d3Axis: this._axis.get(primaryAxis.name) as KruiChartAxis,
        },
        secondaryAxis: {
          name: secondaryAxis.name,
          type: secondaryAxis.type,
          position: secondaryAxis.position,
          d3Scale: this._scales.get(secondaryAxis.name) as KruiChartScale,
          d3Axis: this._axis.get(secondaryAxis.name) as KruiChartAxis,
        },
      };
    }
    return null;
  }

  public zoom(event: d3.D3ZoomEvent<any, any>): void {
    if ((this.zoomPrimaryEnable || this.zoomSecondaryEnable) && event) {
      this._zoomEvent = event;
      if (this._isFirstZoom) {
        this._isFirstZoom = false;
        return;
      }

      this.zoomAxis(event);
      this.zoomLayer(event);
    }
  }

  public zoomAxis(event: any, isResize: boolean = false): void {
    const primaryAxis = this.axisList.find((axis) => axis.primary);
    const type = primaryAxis?.type ?? 'number';

    for (const axis of this.axisList) {
      const axisContainer = d3
        .select(this.wrap.canvas)
        .select(`#${this.layerId}--axis-${axis.name}`);

      const clipPathAxis = d3
        .select(`#${this.layerId}--clipPath-axis--${axis.name}-rect`);

      const gridContainer = d3
        .select(this.wrap.canvas)
        .select(`#${this.layerId}--grid-${axis.name}`);

      const clipPathGrid = d3
        .select(`#${this.layerId}--clipPath-grid--${axis.name}-rect`)
        .attr('width', this.wrap.workGroundWidth)
        .attr('height', this.wrap.workGroundHeight);

      const tickSize =
        axis.position === 'left' || axis.position === 'right'
          ? -this.wrap.workGroundWidth
          : -this.wrap.workGroundHeight;

      let scale = this._scales.get(axis.name) as KruiChartScale;

      let d3Axis: KruiChartAxis;
      if (type === 'number' || axis.type === 'time') {
        if (this.zoomPrimaryEnable && axis.primary) {
          scale = this.tooltipDirective.chartOrientation === 'vertical' ?
            event.transform?.rescaleX(scale) :
            event.transform?.rescaleY(scale);
        }
        if (this.zoomSecondaryEnable && !axis.primary) {
          scale = this.tooltipDirective.chartOrientation === 'vertical' ?
            event.transform?.rescaleY(scale) :
            event.transform?.rescaleX(scale);
        }
      }

      const workgroundPadding = getWorkgroundPadding(this.dataLayerList, axis.type);

      if (axis.position === 'bottom') {
        if (type === 'enum') {
          scale.range([
            workgroundPadding.left, this.wrap.workGroundWidth - workgroundPadding.right,
          ].map((d: any) => event.transform.applyX(d)));
        }
        if (isResize) {
          const offset = (this.wrap.axisLevelMap.get(this.layerId)?.get('bottom') ?? 0) * KRUI_CHART_AXIS_HEIGHT;
          axisContainer
            .attr('transform', `translate(0, ${this.wrap.workGroundHeight + offset * KRUI_CHART_AXIS_HEIGHT})`);
          clipPathAxis
            .attr('width', this.wrap.workGroundWidth);

          gridContainer
            .attr('transform', `translate(0, ${this.wrap.workGroundHeight})`);
          clipPathGrid
            .attr('y', -this.wrap.workGroundHeight);
        }

        d3Axis = d3.axisBottom(scale);
      } else if (axis.position === 'top') {
        if (type === 'enum') {
          scale.range([
            workgroundPadding.left, this.wrap.workGroundWidth - workgroundPadding.right,
          ].map((d: any) => event.transform.applyX(d)));
        }

        if (isResize) {
          const offset = (this.wrap.axisLevelMap.get(this.layerId)?.get('top') ?? 0) * KRUI_CHART_AXIS_HEIGHT;
          axisContainer
            .attr('transform', `translate(0, -${offset})`);
          clipPathAxis
            .attr('width', this.wrap.workGroundWidth);

          gridContainer
            .attr('transform', `translate(0, 0)`);
        }

        d3Axis = d3.axisTop(scale);
      } else if (axis.position === 'left') {
        if (type === 'enum') {
          scale.range([
            this.wrap.workGroundHeight - workgroundPadding.bottom, workgroundPadding.top,
          ].map((d: any) => event.transform.applyY(d)));
        }

        if (isResize) {
          const offset = (this.wrap.axisLevelMap.get(this.layerId)?.get('left') ?? 0) * KRUI_CHART_AXIS_WIDTH;
          axisContainer.attr('transform', `translate(-${offset}, 0)`);
          clipPathAxis
            .attr('x', -(offset + KRUI_CHART_AXIS_WIDTH))
            .attr('height', this.wrap.workGroundHeight + KRUI_CHART_AXIS_OFFSET * 2);

          gridContainer
            .attr('transform', `translate(0, 0)`);
        }

        d3Axis = d3.axisLeft(scale);
      } else {
        if (type === 'enum') {
          scale.range([
            this.wrap.workGroundHeight - workgroundPadding.bottom, workgroundPadding.top,
          ].map((d: any) => event.transform.applyY(d)));
        }

        if (isResize) {
          const offset = (this.wrap.axisLevelMap.get(this.layerId)?.get('right') ?? 0) * KRUI_CHART_AXIS_WIDTH;
          axisContainer
            .attr('transform', `translate(${this.wrap.workGroundWidth + offset}, 0)`);
          clipPathAxis
            .attr('height', this.wrap.workGroundHeight + KRUI_CHART_AXIS_OFFSET * 2);

          gridContainer
            .attr('transform', `translate(${this.wrap.workGroundWidth}, 0)`);
          clipPathGrid
            .attr('x', -this.wrap.workGroundWidth);
        }

        d3Axis = d3.axisRight(scale);
      }

      let gAxis = null;

      if (axis.type === 'time') {
        // @ts-ignore
        gAxis = axisContainer.call(d3Axis.ticks(axis.ticks).tickFormat((d) => this.wrap?.formatFunc ?
          this.wrap.formatFunc(d, this.wrap.language) :
          formatter(d, this.wrap.language)));
      } else {
        // @ts-ignore
        gAxis = axisContainer.call(d3Axis.ticks(axis.ticks));
      }
      gAxis.selectAll('text')
        .attr('color', axis?.fontColor ? axis.fontColor : KRUI_CHART_TEXT_COLOR);
      gAxis.select('path')
        .attr('color', axis?.color ? axis.color : KRUI_CHART_AXIS_COLOR);

      if (!axis.drawAxisLabelLine) {
        gAxis.selectAll('line').remove();
        gAxis.selectAll('path').remove();
      }

      // @ts-ignore
      gridContainer.call(d3Axis.tickFormat(() => '').tickSizeInner(tickSize))
        .select('path')
        .remove();
    }
  }

  public zoomLayer(event: d3.D3ZoomEvent<any, any>, animation: boolean = false): void {
    const primaryAxis = this.axisList.find((axis) => axis.primary);
    if (!primaryAxis) {
      return;
    }
    for (const dataLayer of this.dataLayerList) {
      const target = this._layerSelection
        .select(`#${this.layerId}--${dataLayer.id}`) as unknown as d3.Selection<SVGGElement, unknown, null, unknown>;
      const context = this.getContext();
      if (context) {
        dataLayer.reScale(target, context, event.transform, this.zoomPrimaryEnable, this.zoomSecondaryEnable, animation);
      }
    }
  }

  public getTooltipData(event: [number, number], tooltipType: KruiChartTooltipType, index: number): {
    tooltip: KruiChartTooltipDataLayer;
    pos: number
  } | null {
    const primaryAxis = this.axisList.find((axis) => axis.primary);
    if (!primaryAxis) {
      return null;
    }
    if (primaryAxis.type === 'enum') {
      return this.getTooltipDataEnum(this.tooltipDirective.chartOrientation === 'vertical' ?
        event[0] :
        event[1], tooltipType, primaryAxis, index);
    } else {
      return this.getTooltipDataNumberAndDate(this.tooltipDirective.chartOrientation === 'vertical' ?
        event[0] :
        event[1], tooltipType, primaryAxis, index);
    }
  }

  public getTooltipDataEnum(
    event: number,
    tooltipType: KruiChartTooltipType,
    primaryAxis: KruiChartAxisProvider,
    index: number,
  ): {
    tooltip: KruiChartTooltipDataLayer;
    pos: number
  } | null {
    const scaleX = this._scales.get(primaryAxis.name) as d3.ScaleBand<any>;
    let tooltipTitle = this.dataLayerList.last?.getTooltipTitleEnum() ?? null;
    let offset: number = this.dataLayerList.last?.getBandWidth() ?? 0;

    if (!tooltipTitle?.length) {
      for (let item of this.dataLayerList) {
        let title = item.getTooltipTitleEnum();
        if (!!title?.length) {
          tooltipTitle = title;
          offset = this.dataLayerList.last.getBandWidth() ?? 0;
          break;
        }
      }
    }

    if (!tooltipTitle) {
      return null;
    }

    const rows: KruiChartTooltipDataRow[] = [];
    this.dataLayerList.forEach(layer => {
      rows.push(...layer.getTooltipDataEnum(tooltipTitle));
    });

    const hiddenArr = [];
    rows.forEach(row => {
      if (row.hidden) {
        hiddenArr.push(true);
      }
    });

    return {
      tooltip: {
        rows: rows,
        title: this.layerTitle,
        value: tooltipTitle,
        hidden: hiddenArr.length === rows.length,
        index,
      },
      pos: scaleX(tooltipTitle) === undefined ? event : (scaleX(tooltipTitle) as number) + offset / 2,
    };
  }

  public getTooltipDataNumberAndDate(
    event: number,
    tooltipType: KruiChartTooltipType,
    primaryAxis: KruiChartAxisProvider,
    index: number,
  ): {
    tooltip: KruiChartTooltipDataLayer;
    pos: number
  } | null {
    let value: string | Date | number = '';
    let eventValue: number | Date | string = 0;
    let scale: KruiChartScaleLinear | null = null;
    let reScale: KruiChartScaleLinear | null = null;

    if (primaryAxis.type === 'time' || primaryAxis.type === 'number') {
      scale = this._scales.get(primaryAxis.name) as KruiChartScaleLinear;
      reScale = (this._zoomEvent ?
        this.tooltipDirective.chartOrientation === 'vertical' ?
          this._zoomEvent?.transform?.rescaleX(scale) :
          this._zoomEvent?.transform?.rescaleY(scale) :
        scale);
      eventValue = reScale.invert(event);
    }

    let tooltipTrend: KruiChartTooltipDataRow | null = null;

    for (let dataLayer of this.dataLayerList) {
      const tooltipDataRow = dataLayer.getTooltipData(eventValue, tooltipType, primaryAxis.type);
      for (let tooltipRow of tooltipDataRow) {
        if (!!tooltipRow.valueTitle) {
          tooltipTrend = tooltipRow;
        }
      }

      if (!!tooltipDataRow?.[0]?.valueTitle) {
        tooltipTrend = tooltipDataRow?.[0];
        break;
      }
    }

    if (this.layerLabels?.inactive) {
      return {
        tooltip: {
          rows: [],
          title: this.layerTitle,
          value: '',
          hidden: true,
          index,
        },
        pos: !!reScale ? reScale(Number(tooltipTrend?.valueTitle)) : event,
      };
    }

    if (primaryAxis.type === 'time') {
      value = new Date(tooltipTrend?.valueTitle as unknown as Date);
    } else {
      value = tooltipTrend?.valueTitle!?.toString();
    }

    const rows: KruiChartTooltipDataRow[] = [];
    this.dataLayerList.forEach(layer => {
      rows.push(...layer.getTooltipData(eventValue, tooltipType, primaryAxis.type));
    });

    const hiddenArr = [];
    rows.forEach(row => {
      if (row.hidden) {
        hiddenArr.push(true);
      }
    });

    return {
      tooltip: {
        rows: rows,
        title: this.layerTitle,
        value,
        hidden: hiddenArr.length === rows.length,
        index: 1,
      },
      pos: !!reScale ? reScale(Number(tooltipTrend?.valueTitle)) : event,
    };
  }
}

