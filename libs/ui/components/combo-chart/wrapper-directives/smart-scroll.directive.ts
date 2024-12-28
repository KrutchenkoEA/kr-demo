import { Directive, EventEmitter, forwardRef, Host, Inject, Input, OnInit, Output } from '@angular/core';
import * as d3 from 'd3';
import { getRdmData, line, scaleLinear, scaleTime } from '../constants/inner/smart-scroll.pure';
import { KRUI_CHART_SMART_SCROLL_TOKEN, KRUI_CHART_WRAP_TOKEN } from '../injection-tokens';
import { KruiChartScale, KruiChartScaleLinear, KruiChartSmartScrollInputs } from '../models';
import { KruiChartWrapperDirective } from './wrapper.directive';

const LINE_PADDING = 8;


@Directive({
  selector: 'krui-chart-smart-scroll',
  providers: [
    {
      provide: KRUI_CHART_SMART_SCROLL_TOKEN, useExisting: KruiChartSmartScrollDirective,
    },
  ],
  standalone: false,
})
export class KruiChartSmartScrollDirective implements OnInit, KruiChartSmartScrollInputs {
  @Input() public useDefaultCheck: boolean = true;

  @Output() public scrollEmitter: EventEmitter<number[]> = new EventEmitter<number[]>();

  private points: [number | Date, number][] = [];
  private container!: d3.Selection<SVGGElement, unknown, null, undefined>;
  private gb!: d3.Selection<SVGGElement, unknown, null, undefined>;
  private brush!: d3.BrushBehavior<unknown>;
  private scaleX!: KruiChartScale;
  private scaleY!: KruiChartScale;
  private defaultSelection: number[] | null = null;
  private _isZooming: boolean = false;

  constructor(@Inject(forwardRef(() => KRUI_CHART_WRAP_TOKEN)) @Host() public wrap: KruiChartWrapperDirective) {
  }

  @Input() set data(value: [number | Date | string, number][]) {
    switch (Object.prototype.toString.call(value[0]?.[0])) {
      case '[object Date]':
        value = value.map((d) => [(d[0] as Date), d[1]]);
        value.sort();
        break;
      case '[object String]':
        value = value.map(d => [new Date(d[0]), d[1]]);
        value.sort();
        break;
      case '[object Number]':
        value.sort((a, b) => (a[0] as number) - (b[0] as number));
        break;
    }

    if (value?.length) {
      this.points = value as [number | Date, number][];
    }
  }

  @Input() set moveScroll(event: d3.D3ZoomEvent<any, any>) {
    if (!(event && this.defaultSelection && this.gb && this.scaleX)) {
      return;
    }
    this._isZooming = true;
    const range = event.transform?.rescaleX(this.scaleX as KruiChartScaleLinear).range().map(event.transform.invertX, event.transform);
    let resultSelection = range;

    if (range[0] < this.defaultSelection[0]) {
      resultSelection[0] = this.defaultSelection[0];
    }
    if (range[1] > this.defaultSelection[1]) {
      resultSelection[1] = this.defaultSelection[1];
    }

    this.gb.call(this.brush.move, range as any);
    setTimeout(() => this._isZooming = false);
  }

  public ngOnInit(): void {
  }

  public draw(): void {
    if (this.container) {
      this.container.select('.prev-line').remove();
      this.container.select('.selection').remove();
    }

    if (!this.points?.length) {
      this.points = getRdmData();
    }

    this.createScales();
    this.drawContainer();
    this.drawLine();
    this.drawSelection();
  }

  public reDraw(): void {
    this.createScales();
    this.container
      .attr('transform', `translate(${this.wrap.offsetMarginLeft}, ${this.wrap.workGroundHeight + this.wrap.offsetMarginTop + this.wrap.smartScrollHeight})`)
      .attr('width', this.wrap.workGroundWidth)
      .attr('height', this.wrap.smartScrollHeight);


    this.container.select('path')
      // @ts-ignore
      .attr('d', line(this.scaleX, this.scaleY).curve(d3.curveMonotoneX) as any);

    this.container.select('g.selection')
      .attr('width', this.wrap.width)
      .attr('height', this.wrap.smartScrollHeight);
  }

  private createScales(): void {
    const isNumber = typeof this.points[0][0] === 'number';

    this.scaleX = isNumber
      ? scaleLinear(
        this.points.map(([x]) => Number(x)),
        [0, this.wrap.workGroundWidth],
      )
      : scaleTime(
        this.points.map(([x]) => x as Date),
        [0, this.wrap.workGroundWidth],
      );

    this.scaleY = scaleLinear(
      this.points.map(([, y]) => y),
      [this.wrap.smartScrollHeight - LINE_PADDING, LINE_PADDING],
    );

    this.defaultSelection = this.scaleX.range();
  }

  private drawContainer(): void {
    this.container = this.wrap.svg
      .append('g')
      .attr('id', `smart-scroll-${this.wrap.id}`)
      .attr('transform', `translate(${this.wrap.offsetMarginLeft}, ${this.wrap.workGroundHeight + this.wrap.offsetMarginTop + this.wrap.smartScrollHeight})`)
      .attr('width', this.wrap.workGroundWidth)
      .attr('height', this.wrap.smartScrollHeight)
      .attr('cursor', 'row-resize');
  }

  private drawLine(): void {
    this.container
      .append('path')
      .datum(this.points)
      .attr('class', 'prev-line')
      // @ts-ignore
      .attr('d', line(this.scaleX, this.scaleY).curve(d3.curveMonotoneX) as any);
  }

  private drawSelection(): void {
    const emitter = this.scrollEmitter;

    this.gb = this.container
      .append('g')
      .attr('class', 'selection')
      .attr('width', this.wrap.width)
      .attr('height', this.wrap.smartScrollHeight);

    this.brush = d3
      .brushX()
      .extent([
        [0, 0.5],
        [this.wrap.workGroundWidth, this.wrap.smartScrollHeight + 0.5],
      ])
      .on('end', (event: any) => {
        let selection = event.selection;

        if (!selection && event && event.sourceEvent) {
          selection = this.defaultSelection;
          this.gb
            .call(this.brush.move, selection as any)
            .transition()
            .duration(750);
        }

        if (!this._isZooming) {
          emitter.emit(selection);
        }

        this.gb.select('.selection').attr('fill', `${this.wrap.smartScrollColor}`);
        this.gb.select('.handle').attr('fill', `${this.wrap.smartScrollColor}`);
        this.gb.select('.handle--e').attr('fill', `${this.wrap.smartScrollColor}`);
      });

    this.gb
      .call(this.brush)
      .call(this.brush.move, this.defaultSelection as any)
      .transition()
      .duration(750);
  }
}
