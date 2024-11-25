import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { BehaviorSubject } from 'rxjs';
import {
  KRUI_CHART_AXIS_COLOR,
  KRUI_CHART_AXIS_HEIGHT,
  KRUI_CHART_AXIS_OFFSET,
  KRUI_CHART_AXIS_WIDTH,
  KRUI_CHART_BG_COLOR,
  KRUI_CHART_DEFAULT_HEIGHT,
  KRUI_CHART_DEFAULT_LEGEND_HEIGHT,
  KRUI_CHART_DEFAULT_WIDTH,
  KRUI_CHART_SMART_SCROLL_COLOR
} from '../constants/export/constants';
import { KRUI_CHART_WRAP_TOKEN } from '../injection-tokens';
import { KruiChartReSizeEvent, KruiChartWrapperInputs } from '../models';
import { getKruiWrapperDefaultInputs } from '../constants';

// workGroundHeight - внутренняя часть
// offsetHeight - внутренняя часть + оси
// height - размер svg

@Directive({
  selector: 'krui-chart',
  providers: [
    {
      provide: KRUI_CHART_WRAP_TOKEN, useExisting: KruiChartWrapperDirective
    }
  ]
})
export class KruiChartWrapperDirective implements OnInit, KruiChartWrapperInputs {
  @Input() public marginLeft: number = 12;
  @Input() public marginRight: number = 12;
  @Input() public marginBottom: number = 12;
  @Input() public marginTop: number = 12;
  @Input() public bgColor: string = KRUI_CHART_BG_COLOR;
  @Input() public borderColor: string = KRUI_CHART_AXIS_COLOR;
  @Input() public borderRadius: number = 4;
  @Input() public smartScrollEnable: boolean = false;
  @Input() public smartScrollHeight: number = 42;
  @Input() public smartScrollColor: string = KRUI_CHART_SMART_SCROLL_COLOR;
  @Input() public language: 'ru' | 'en' | 'fa' = 'ru';
  @Input() public formatFunc: any | undefined | null = null;
  @Input() public setDefIfContainerSizeInvalid: boolean = false;
  @Input() public useDefaultCheck: boolean = true;
  public legendHeight: number = KRUI_CHART_DEFAULT_LEGEND_HEIGHT;
  public toolbarHeight: number = 0;
  public reSize$: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);
  public axisCounter: { left: number, right: number, top: number, bottom: number } = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  public axisLevelMap: Map<string, Map<string, number> | null> = new Map();
  public isFixedSize: boolean = false;

  constructor(
    private el: ElementRef
  ) {
  }

  private _canvas: SVGElement | null = null;

  get canvas(): SVGElement | null {
    return this._canvas;
  }

  private _svg!: d3.Selection<SVGSVGElement, unknown, null, undefined>;

  get svg(): d3.Selection<SVGSVGElement, unknown, null, undefined> {
    return this._svg;
  }

  private _g!: d3.Selection<SVGGElement, unknown, null, undefined>;

  get g(): d3.Selection<SVGGElement, unknown, null, undefined> {
    return this._g;
  }

  private _id: string = 'krui-chart-' + Date.now();

  get id(): string {
    return this._id;
  }

  private _width!: number;

  /** Ширина svg */
  get width(): number {
    return this._width;
  }

  @Input() set width(w: number) {
    this._width = w;
  }

  private _height!: number;

  /** Высота svg */
  get height(): number {
    return this._height;
  }

  @Input() set height(h: number) {
    this._height = h - this.legendHeight - this.toolbarHeight;
  }

  @Input('isFixedSize')
  set _isFixedSize(s: boolean) {
    this.isFixedSize = s;
    if (!s) return;
    if (!this._width) {
      this.width = KRUI_CHART_DEFAULT_WIDTH;
    }
    if (!this._height) {
      this.height = KRUI_CHART_DEFAULT_HEIGHT;
    }
  };

  /** Ширина SVG = this._width */
  get svgWidth(): number {
    return this._width;
  }

  /** Высота SVG = this._height - высота легенды */
  get svgHeight(): number {
    return this._height - this.legendHeight;
  }

  /** Внутренняя часть + оси (может быть несколько с одной стороны) (размер svg - margin) */
  get offsetWidth(): number {
    return this.svgWidth - this.marginLeft - this.marginRight;
  }

  /** Внутренняя часть + оси (может быть несколько с одной стороны) (размер svg - margin) */
  get offsetHeight(): number {
    return this.svgHeight - this.marginBottom - this.marginTop;
  }

  /** Внутренняя часть (размер svg - margin - оси) */
  get workGroundWidth(): number {
    return this.svgWidth - this.marginLeft - this.marginRight - (this.axisCounter.left + this.axisCounter.right) * KRUI_CHART_AXIS_WIDTH;
  }

  /** Внутренняя часть (размер svg - margin - оси) */
  get workGroundHeight(): number {
    return this.svgHeight - this.marginBottom - this.marginTop - (this.axisCounter.bottom + this.axisCounter.top) * KRUI_CHART_AXIS_HEIGHT;
  }

  /** Общий отступ margin + размер оси*/
  get offsetMarginTop(): number {
    return this.marginTop + this.axisCounter.top * KRUI_CHART_AXIS_HEIGHT;
  }

  /** Общий отступ margin + размер оси*/
  get offsetMarginRight(): number {
    return this.marginRight + this.axisCounter.right * KRUI_CHART_AXIS_WIDTH;
  }

  /** Общий отступ margin + размер оси*/
  get offsetMarginBottom(): number {
    return this.marginBottom + this.axisCounter.bottom * KRUI_CHART_AXIS_HEIGHT;
  }

  /** Общий отступ margin + размер оси*/
  get offsetMarginLeft(): number {
    return this.marginLeft + this.axisCounter.left * KRUI_CHART_AXIS_WIDTH;
  }

  @Input() set customResize(v: KruiChartReSizeEvent | null) {
    if (!v?.width || !v?.height) return;
    this.onResize(v);
  }

  /** Внутренняя область */
  get workgroundClipPathId(): string {
    return `${this._id}--clipPath-workground`;
  }

  /** Внутренняя область с небольшими отступами */
  get workgroundClipPathOffsetId(): string {
    return `${this._id}--clipPath-workground-offset`;
  }

  /** Область с осями */
  get clipPathOffsetId(): string {
    return `${this._id}--clipPath--offset`;
  }

  public ngOnInit(): void {
    if (this.useDefaultCheck) {
      Object.entries(getKruiWrapperDefaultInputs())?.forEach(([key, value]) => {
        // @ts-ignore
        if (this[key] === null || this[key] === undefined) {
          // @ts-ignore
          this[key] = value;
        }
      });
    }
  }

  public onResize(v: KruiChartReSizeEvent): void {
    if (!this.isFixedSize) {
      this.width = v?.width;
      this.height = v?.height;

      if (this._height <= 0 && this.setDefIfContainerSizeInvalid) {
        this._height = KRUI_CHART_DEFAULT_HEIGHT;
      }
      if (this._width <= 0 && this.setDefIfContainerSizeInvalid) {
        this._width = KRUI_CHART_DEFAULT_WIDTH;
      }

      this.resizeTrigger();
    }
  }

  public refreshMarginAxis(): void {
    this.axisCounter = { left: 0, right: 0, top: 0, bottom: 0 };
    this.axisLevelMap = new Map();
  }

  public createCanvas(): void {
    if (this._canvas) {
      this._svg.remove();
    }
    const container = this.el.nativeElement;
    if (!this._width) {
      this.width = this.el.nativeElement.offsetWidth;
    }
    if (!this._height) {
      this.height = this.el.nativeElement.offsetHeight;
    }
    if (this.height <= 0 && this.setDefIfContainerSizeInvalid) {
      this._height = KRUI_CHART_DEFAULT_HEIGHT;
    }
    if (this.width <= 0 && this.setDefIfContainerSizeInvalid) {
      this._width = KRUI_CHART_DEFAULT_WIDTH;
    }

    this._svg = d3.select(container).append('svg');
    if (this.isFixedSize) {
      this._svg
        .attr('id', `${this._id}--svg`)
        .attr('width', this.svgWidth)
        .attr('height', this.svgHeight + (this.smartScrollEnable ? this.smartScrollHeight : 0))
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .attr('viewBox', `0 0 ${this.svgWidth} ${this.svgHeight}`);
    } else {
      this._svg
        .attr('id', `${this._id}--svg`)
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', `0 0 ${this.svgWidth} ${this.svgHeight}`);
    }

    this._g = this._svg
      .attr('order', 2)
      .style('order', 2)
      .append('g')
      .attr('id', `${this._id}`)
      .attr('transform', `translate(${this.offsetMarginLeft}, ${this.offsetMarginTop})`);

    this._g.append('clipPath')
      .attr('id', `${this._id}--clipPath-workground`)
      .append('rect')
      .attr('id', `${this._id}--clipPath-workground-rect`)
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', this.workGroundWidth)
      .attr('height', this.workGroundHeight);


    this._g.append('clipPath')
      .attr('id', `${this._id}--clipPath-workground-offset`)
      .append('rect')
      .attr('id', `${this._id}--clipPath-workground-offset-rect`)
      .attr('x', -KRUI_CHART_AXIS_OFFSET)
      .attr('y', -KRUI_CHART_AXIS_OFFSET)
      .attr('width', this.workGroundWidth + KRUI_CHART_AXIS_OFFSET * 2)
      .attr('height', this.workGroundHeight + KRUI_CHART_AXIS_OFFSET * 2);


    this._g.append('clipPath')
      .attr('id', `${this._id}--clipPath-offset`)
      .append('rect')
      .attr('id', `${this._id}--clipPath-offset-rect`)
      .attr('x', -this.axisCounter.left * KRUI_CHART_AXIS_WIDTH)
      .attr('y', -this.axisCounter.top * KRUI_CHART_AXIS_HEIGHT)
      .attr('width', this.offsetWidth)
      .attr('height', this.offsetHeight);

    this._g.append('rect')
      .attr('id', `${this._id}--bg-rect`)
      .attr('width', this.workGroundWidth)
      .attr('height', this.workGroundHeight)
      .attr('class', 'krui-chart-background')
      .attr('rx', this.borderRadius)
      .attr('ry', this.borderRadius)
      .attr('fill', this.bgColor ?? KRUI_CHART_BG_COLOR)
      .attr('stroke', this.borderColor ?? KRUI_CHART_AXIS_COLOR)
      .attr('stroke-width', '1px');

    this._canvas = this._g.node();
  }

  private resizeTrigger(): void {
    this._svg
      .attr('viewBox', `0 0 ${this.svgWidth} ${this.svgHeight}`);

    this._svg
      .select(`#${this._id}--clipPath-workground-rect`)
      .attr('width', this.workGroundWidth)
      .attr('height', this.workGroundHeight);
    this._svg
      .select(`#${this._id}--clipPath-workground-offset-rect`)
      .attr('width', this.workGroundWidth + KRUI_CHART_AXIS_OFFSET * 2)
      .attr('height', this.workGroundHeight + KRUI_CHART_AXIS_OFFSET * 2);
    this._svg
      .select(`#${this._id}--clipPath-offset-rect`)
      .attr('width', this.offsetWidth)
      .attr('height', this.offsetHeight);

    this._svg
      .select(`#${this._id}--bg-rect`)
      .attr('width', this.workGroundWidth)
      .attr('height', this.workGroundHeight);

    this.reSize$.next(true);
  }
}
