import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import * as d3 from 'd3';
import { BehaviorSubject, filter, Subject, takeUntil } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {
  getKruiLegendDefaultInputs,
  KRUI_CHART_AXIS_COLOR,
  KRUI_CHART_DEFAULT_LEGEND_HEIGHT,
  KRUI_CHART_DEFAULT_TOOLBAR_HEIGHT,
  KRUI_CHART_GRID_COLOR,
} from '../../constants';
import { KruiChartDataLayerDirective } from '../../content-directives/data-layer.directive';
import { KruiChartLayerDirective } from '../../content-directives/layer.directive';
import {
  KRUI_CHART_AXIS_PALETTE,
  KRUI_CHART_GRID_PALETTE,
  KRUI_CHART_LAYER_TOKEN,
  KRUI_CHART_LEGEND_PROVIDER_TOKEN,
  KRUI_CHART_PALETTE,
  KRUI_CHART_PALETTE_PROVIDER_TOKEN,
  KRUI_CHART_SMART_SCROLL_TOKEN,
  KRUI_CHART_TOOLBAR_TOKEN,
  KRUI_CHART_TOOLTIP_PROVIDER_TOKEN,
  KRUI_CHART_WRAP_TOKEN,
} from '../../injection-tokens';
import {
  KruiChartAxisProvider,
  KruiChartLegendGroup,
  KruiChartLegendLabelDataType,
  KruiChartLegendProvider,
  KruiChartLegendType,
  KruiChartPaletteProvider,
  KruiChartReSizeEvent,
  KruiChartZoomType,
} from '../../models';
import { KruiChartSmartScrollDirective } from '../../wrapper-directives/smart-scroll.directive';
import { KruiChartToolbarDirective } from '../../wrapper-directives/toolbar.directive';
import { KruiChartTooltipProviderDirective } from '../../wrapper-directives/tooltip-provider.directive';
import { KruiChartWrapperDirective } from '../../wrapper-directives/wrapper.directive';


@Component({
  selector: 'krui-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [
    {
      provide: KRUI_CHART_PALETTE_PROVIDER_TOKEN, useExisting: KruiChartComponent,
    },
    {
      provide: KRUI_CHART_LEGEND_PROVIDER_TOKEN, useExisting: KruiChartComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KruiChartComponent implements OnInit, AfterViewInit, OnDestroy, KruiChartPaletteProvider, KruiChartLegendProvider {
  @Input() public legend: boolean = true;
  @Input() public legendPosition: 'top' | 'bottom' = 'bottom';
  @Input() public legendLayer: boolean = false;
  @Input() public legendAxis: boolean = false;
  @Input() public legendTrend: boolean = true;
  @Input() public legendHoverEffect: boolean = true;
  @Input() public legendType: KruiChartLegendType = 'default';
  @Output() public legendGroupsEmitter: EventEmitter<KruiChartLegendGroup[]> = new EventEmitter<KruiChartLegendGroup[]>();
  public legendGroups: KruiChartLegendGroup[] = [];

  /** resizeObserver - может работать некорректно, если нет жесткого родительского контейнера */
  @Input() public resizeObserveType: 'hostListener' | 'resizeObserver' = 'hostListener';
  @Input() public zoomType: KruiChartZoomType = 'scroll';

  @Input() public useDefaultCheck: boolean = true;

  @ViewChild('toolbarContainer') public toolbarContainer: HTMLDivElement | null = null;
  @ViewChild('legendContainer') public legendGroupDiv: HTMLDivElement | null = null;
  @ViewChild('simpleLegendContainer') public simpleLegendGroupDiv: HTMLDivElement | null = null;
  @ViewChild('customLegendContainer') public customLegendGroupDiv: HTMLElement | null = null;
  @ViewChild('resizeContainer', { static: true }) public resizer!: ElementRef<HTMLDivElement>;
  public nextColorId: number = -1;

  public orders: { toolbar: number, legend: number, chart: number, resizeContainer: number } = {
    toolbar: 0, legend: 1, chart: 2, resizeContainer: 10,
  };
  public zoomK$: BehaviorSubject<string> = new BehaviorSubject<string>('1');
  @ContentChildren(KRUI_CHART_LAYER_TOKEN) private readonly layersList!: QueryList<KruiChartLayerDirective>;
  @ContentChild(KRUI_CHART_SMART_SCROLL_TOKEN) private readonly smartScroll!: KruiChartSmartScrollDirective;
  private stateLegendMap: Map<string, Map<string, boolean>> = new Map<string, Map<string, boolean>>();
  private _zoom: d3.ZoomBehavior<SVGSVGElement, any> | null = null;
  private _zoomEvent!: d3.D3ZoomEvent<any, any>;
  private _brush: any;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  private _resize$: BehaviorSubject<KruiChartReSizeEvent | null> = new BehaviorSubject<KruiChartReSizeEvent | null>(null);
  private _resizeObserver: ResizeObserver | null = null;

  constructor(
    @Inject(KRUI_CHART_PALETTE) private readonly CHART_PALETTE: string[],
    @Inject(KRUI_CHART_AXIS_PALETTE) private readonly CHART_AXIS_PALETTE: string[],
    @Inject(KRUI_CHART_GRID_PALETTE) private readonly CHART_GRID_PALETTE: string[],
    @Inject(KRUI_CHART_WRAP_TOKEN) @Host() public wrap: KruiChartWrapperDirective,
    @Inject(KRUI_CHART_TOOLBAR_TOKEN) @Host() public toolbarDirective: KruiChartToolbarDirective,
    @Inject(KRUI_CHART_TOOLTIP_PROVIDER_TOKEN) @Host() public tooltipDirective: KruiChartTooltipProviderDirective,
    private readonly elementRef: ElementRef,
    private readonly cdr: ChangeDetectorRef,
  ) {
  }

  @HostListener('document:resize', ['$event'])
  public OnResize(): void {
    if (this.resizeObserveType === 'resizeObserver') return;
    this._resize$.next({
      width: this.resizer.nativeElement.offsetWidth,
      height: this.resizer.nativeElement.offsetHeight,
    });
  }

  public ngOnInit(): void {
    this.toolbarDirective.zoomType = this.zoomType;
    this.toolbarDirective.zoomTypeDefault = this.zoomType;

    if (this.toolbarDirective.toolbarPosition === 'bottom') {
      this.orders.toolbar = 4;
    }

    if (this.legendPosition === 'bottom') {
      this.orders.legend = 3;
    }

    if (this.useDefaultCheck) {
      Object.entries(getKruiLegendDefaultInputs())?.forEach(([key, value]) => {
        // @ts-ignore
        if (this[key] === null || this[key] === undefined) {
          // @ts-ignore
          this[key] = value;
        }
      });
    }


    this.wrap.reSize$
      .pipe(filter(x => !!x), takeUntil(this.unsubscribe$))
      .subscribe(r => {
        this.tooltipDirective.onGraphMouseLeave();
        this._zoom!.translateExtent([
          [-this.wrap.marginLeft, -this.wrap.marginTop],
          [this.wrap.width + 8, this.wrap.height + this.wrap.marginBottom],
        ]);
        this.layersList.forEach(l => l.reDraw(this._zoomEvent, true, false));
        if (this.wrap.smartScrollEnable) {
          this.smartScroll.reDraw();
          this.smartScroll.moveScroll = this._zoomEvent;
        }
      });

    this.toolbarDirective.zoom$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(k => {
        if (!k) return;
        this.zoomK$.next((k ?? 1).toFixed(1));
        const zoomPoint = this._zoomEvent ? [
          this._zoomEvent.transform.x / this._zoomEvent.transform.k,
          this._zoomEvent.transform.y / this._zoomEvent.transform.k,
        ] : [-this.wrap.workGroundWidth / 2, -this.wrap.workGroundHeight / 2];
        this.wrap.svg.call(this._zoom!.transform, d3.zoomIdentity.scale(k).translate(zoomPoint[0], zoomPoint[1]));
      });

    this.toolbarDirective.zoomType$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((zoomType) => {
        this.wrap.svg.call(this._zoom!.transform, d3.zoomIdentity.scale(1).translate(0, 0));
        this.zoomType = zoomType;
        this.wrap.createCanvas();
        this.drawStart();
      });

    this.cdr.markForCheck();
  }

  public ngAfterViewInit(): void {
    this.initStart();

    this.initResizeObserve();
  }

  public ngOnDestroy(): void {
    this._resizeObserver?.unobserve(this.elementRef.nativeElement);
    this.tooltipDirective.onGraphMouseLeave();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public nextColor(): string {
    return this.CHART_PALETTE[(this.nextColorId = (this.nextColorId + 1) % this.CHART_PALETTE.length)];
  }

  public onTrendInactivityChange(
    type: KruiChartLegendLabelDataType,
    dataLayer: KruiChartDataLayerDirective<any, any>,
    layerId: string,
    layerIndex: number,
    trendIndex: number,
    hidden: boolean,
  ): void {
    dataLayer.toggleState(trendIndex, hidden);

    if (this.legendGroups?.length > 1) {
      const group = this.legendGroups[layerIndex].dataLayer;
      const stateLegendMap = this.stateLegendMap.get(layerId);
      stateLegendMap?.set(dataLayer.id, hidden);
      const activeArr: number[] = [];
      if (stateLegendMap) {
        for (let val of stateLegendMap.values()) {
          if (val) {
            activeArr.push(1);
          }
        }
      }
      d3.select(`#${layerId}`).attr('display', `${activeArr.length === group?.length ? 'none' : 'inline'}`);
    }
    this.cdr.markForCheck();
  }

  public onInactivityChange(type: 'layer' | 'axis' | 'grid', layerId: string, name: string, hidden: boolean): void {
    if (type === 'layer') {
      d3.select(`#${layerId}`).attr('display', `${hidden ? 'none' : null}`);
    } else {
      d3.select(`#${layerId}--${type}-${name}`).attr('display', `${hidden ? 'none' : null}`);
    }
    this.cdr.markForCheck();
  }

  public onTrendMouseEnter(
    dataLayer: KruiChartDataLayerDirective<any, any>,
    trendIndex: number,
    hidden: boolean,
  ): void {
    if (!this.legendHoverEffect) return;
    dataLayer.toggleOpacity(trendIndex, hidden);
    this.layersList.forEach(layer => layer.renderOpacity(hidden));
  }

  public onTrendMouseLeave(
    dataLayer: KruiChartDataLayerDirective<any, any>,
    trendIndex: number,
    hidden: boolean,
  ): void {
    dataLayer.toggleOpacity(trendIndex, hidden);
    this.layersList.forEach(layer => layer.renderOpacity(hidden));
  }

  private initStart(): void {
    this.legendGroups = [];
    this.wrap.refreshMarginAxis();

    this.layersList.forEach(l => {
      this.stateLegendMap.set(l.layerId, new Map());
      this.legendGroups.push(l.getLegendLabels());

      this.wrap.axisLevelMap.set(l.layerId, new Map());
      l.getAxis().forEach((axis: KruiChartAxisProvider) => {
        if (!axis.drawAxis) return;
        switch (axis.position) {
          case 'left':
            this.wrap.axisLevelMap.get(l.layerId)?.set('left', this.wrap.axisCounter.left);
            this.wrap.axisCounter.left += 1;
            break;
          case 'right':
            this.wrap.axisLevelMap.get(l.layerId)?.set('right', this.wrap.axisCounter.right);
            this.wrap.axisCounter.right += 1;
            break;
          case 'bottom':
            this.wrap.axisLevelMap.get(l.layerId)?.set('bottom', this.wrap.axisCounter.bottom);
            this.wrap.axisCounter.bottom += 1;
            break;
          case 'top':
            this.wrap.axisLevelMap.get(l.layerId)?.set('top', this.wrap.axisCounter.top);
            this.wrap.axisCounter.top += 1;
            break;
        }
      });
    });

    let legendHeight: number = 0;

    if (this.legend) {
      switch (this.legendType) {
        case 'default':
          legendHeight = this.legendGroupDiv?.offsetHeight ?
            this.legendGroupDiv?.offsetHeight :
            KRUI_CHART_DEFAULT_LEGEND_HEIGHT;
          break;
        case 'simple-style':
          legendHeight = this.simpleLegendGroupDiv?.offsetHeight ?
            this.simpleLegendGroupDiv?.offsetHeight :
            KRUI_CHART_DEFAULT_LEGEND_HEIGHT;
          break;
        case 'custom':
          legendHeight = this.customLegendGroupDiv?.offsetHeight ?
            this.customLegendGroupDiv?.offsetHeight :
            KRUI_CHART_DEFAULT_LEGEND_HEIGHT;
          break;
        default:
          break;
      }
    }

    if (this.toolbarDirective.toolbar) {
      this.wrap.toolbarHeight = this.toolbarContainer?.offsetHeight ?? KRUI_CHART_DEFAULT_TOOLBAR_HEIGHT;
    }

    this.wrap.legendHeight = legendHeight;
    this.wrap.createCanvas();

    this.legendGroups.forEach((g, i) => {
      g.axis.forEach(a => a.color ? null : a.color = this.CHART_AXIS_PALETTE[i] ?? KRUI_CHART_AXIS_COLOR);
      g.grid.forEach(g => g.color ? null : g.color = this.CHART_GRID_PALETTE[i] ?? KRUI_CHART_GRID_COLOR);
    });

    this.legendGroupsEmitter.emit(this.legendGroups);

    this.drawStart();
    this.cdr.markForCheck();
  }

  private drawStart(): void {
    this.layersList.forEach(l => l.draw());

    if (this.tooltipDirective.tooltip) {
      // @ts-ignore
      this.wrap._g.on('mousemove', (event) => this.tooltipDirective.onGraphMouseMove(event))
        .on('mouseenter', () => this.tooltipDirective.onGraphMouseEnter())
        .on('mouseleave', () => this.tooltipDirective.onGraphMouseLeave());
    }

    this.tooltipDirective.drawTooltipMarker();

    this.setZoom();
    setTimeout(() => this.cdr.markForCheck());
  }

  private setZoom(): void {
    this.wrap.svg.select('.brush-container')?.remove();
    this._brush = null;
    this._zoom = null;

    this._zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 32])
      .translateExtent([
        [-this.wrap.marginLeft, -this.wrap.marginTop],
        [this.wrap.width + this.wrap.marginRight, this.wrap.height + this.wrap.marginBottom],
      ])
      .on('start', () => this.tooltipDirective.onGraphMouseLeave())
      .on('zoom', (event: any) => {
        if (event.sourceEvent === 'mousemove' && this.zoomType === 'brush') return;
        this._zoomEvent = event;
        this.layersList.forEach((l) => l.zoom(event));
      })
      .on('end', (event: any) => {
        const zoomK = this._zoomEvent?.transform?.k ?? 1;
        this.toolbarDirective.zoomK = zoomK;
        this.zoomK$.next(zoomK.toFixed(1));

        this.tooltipDirective.onGraphMouseEnter();
        if (this.wrap.smartScrollEnable) {
          this.smartScroll.moveScroll = event;
        }
      });

    if (this.zoomType === 'brush') {
      let timer = false;
      const baseExtent: [[number, number], [number, number]] = [
        [this.wrap.offsetMarginLeft, this.wrap.marginTop], [this.wrap.svgWidth, this.wrap.offsetHeight],
      ];

      this._brush = d3.brush()
        .extent(baseExtent)
        .on('start', () => this.tooltipDirective.onGraphMouseLeave())
        .on('end', (event: any) => {
          this.tooltipDirective.onGraphMouseEnter();
          if (timer) {
            return;
          }
          timer = true;
          const selection = event?.selection ? event.selection : baseExtent;
          const zoomK = this.wrap.workGroundWidth / (selection[1][0] - selection[0][0]) ?? 1;
          this.wrap.svg
            .transition()
            .duration(750)
            .call(
              this._zoom!.transform,
              d3.zoomIdentity.scale(zoomK).translate(-selection[0][0], -selection[0][1]),
            );

          this.toolbarDirective.zoomK = zoomK;
          this.zoomK$.next(zoomK.toFixed(1));

          this.wrap.svg.select('.brush-container').call(this._brush.move, null);
          setTimeout(() => timer = false, 500);
        });

      this.wrap.svg
        .append('g')
        .attr('class', 'brush-container')
        .call(this._brush);

    }
    if (this.zoomType === 'scroll') {
      this.wrap.svg
        .call(this._zoom)
        .transition()
        .duration(750);
    }

    this.wrap.svg.call(this._zoom.transform, d3.zoomIdentity
      .scale(1)
      .translate(0, 0));

    if (this.wrap.smartScrollEnable) {
      this.smartScroll.draw();
      this.smartScroll.scrollEmitter
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(event => {
          this.wrap.svg.transition()
            .duration(750)
            .call(this._zoom!.transform, d3.zoomIdentity
              .scale(this.wrap.workGroundWidth / (event[1] - event[0]))
              .translate(-event[0], 0));
        });
    }
  }

  private initResizeObserve(): void {
    if (this.resizeObserveType === 'resizeObserver') {
      this._resizeObserver = new ResizeObserver((entries) => {
        if (entries?.[0]?.contentRect) {
          this._resize$.next({
            width: entries?.[0]?.contentRect.width,
            height: entries?.[0]?.contentRect.height,
          });
        }
      });
      this._resizeObserver.observe(this.resizer.nativeElement);
    }

    this._resize$
      .pipe(debounceTime(300), takeUntil(this.unsubscribe$))
      .subscribe(v => {
        if (!v?.height || !v.width) return;
        this.wrap.onResize(v);
      });
  }


}
