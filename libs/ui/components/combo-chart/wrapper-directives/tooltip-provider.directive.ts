import { FlexibleConnectedPositionStrategy, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, ContentChildren, Directive, Host, Inject, Input, OnInit, QueryList } from '@angular/core';
import * as d3 from 'd3';
import { KruiChartTooltipComponent } from '../components/tooltip/tooltip.component';
import { KRUI_CHART_TOOLTIP_COLOR } from '../constants/export/constants';
import { tooltipPositionPair } from '../constants/inner/tooltip.pure';
import { KruiChartLayerDirective } from '../content-directives/layer.directive';
import { KruiChartTooltipBaseDirective } from '../content-directives/tooltip.directive';
import { KRUI_CHART_LAYER_TOKEN, KRUI_CHART_TOOLTIP_PROVIDER_TOKEN, KRUI_CHART_WRAP_TOKEN } from '../injection-tokens';
import {
  KruiChartTooltipDataLayer,
  KruiChartTooltipMarkerType,
  KruiChartTooltipModel,
  KruiChartTooltipProviderInputs,
  KruiChartTooltipType
} from '../models';
import { KruiChartWrapperDirective } from './wrapper.directive';
import { getKruiTooltipDefaultInputs } from '../constants';

@Directive({
    selector: 'krui-chart',
    providers: [
        {
            provide: KruiChartTooltipModel, useExisting: KruiChartTooltipProviderDirective
        },
        {
            provide: KRUI_CHART_TOOLTIP_PROVIDER_TOKEN, useExisting: KruiChartTooltipProviderDirective
        }
    ],
    standalone: false
})
export class KruiChartTooltipProviderDirective implements OnInit, KruiChartTooltipModel, KruiChartTooltipProviderInputs {
  @Input() public tooltip: boolean = true;
  @Input() public tooltipComponentType: 'custom' | 'default' = 'default';
  @Input() public tooltipComponent: any | undefined;
  @Input() public tooltipType: KruiChartTooltipType = 'fullLine';
  @Input() public tooltipMarkerType: KruiChartTooltipMarkerType = 'line';
  @Input() public tooltipMarkerCrossSize: number = 10;
  @Input() public tooltipColor: string = KRUI_CHART_TOOLTIP_COLOR;
  @Input() public tooltipWidth: number = 1;
  @Input() public chartOrientation: 'vertical' | 'horizontal' = 'vertical';
  @Input() public tooltipShowMilliseconds: boolean = false;
  @Input() public tooltipDateValuePipeFormat: string = 'dd.MM.yyyy HH:mm';
  @Input() public tooltipTitleDateValuePipeFormat: string = 'dd.MM.yyyy HH:mm:ss';
  @Input() public tooltipNumberValuePipeFormat: string = '1.0-0';
  @Input() public tooltipTitleNumberValuePipeFormat: string = '1.0-0';
  @Input() public useDefaultCheck: boolean = true;
  private _tooltipAttachPoint!: d3.Selection<SVGCircleElement, unknown, null, undefined>;
  private _tooltipMarker!: d3.Selection<SVGLineElement, unknown, HTMLElement, undefined>[];
  private _tooltipPositionStrategy!: FlexibleConnectedPositionStrategy;
  private _tooltipOverlayRef!: OverlayRef;
  private _tooltipRef!: ComponentRef<KruiChartTooltipBaseDirective>;
  private _tooltipPortal!: ComponentPortal<KruiChartTooltipBaseDirective>;
  private _tooltipChartPart: 'left' | 'right' = 'left';
  private _tooltipMouseEventValue: number = 0;
  @ContentChildren(KRUI_CHART_LAYER_TOKEN) private readonly layersList!: QueryList<KruiChartLayerDirective>;

  constructor(
    @Inject(KRUI_CHART_WRAP_TOKEN) @Host() public wrap: KruiChartWrapperDirective,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private overlay: Overlay
  ) {
  }

  public ngOnInit(): void {
    if (this.useDefaultCheck) {
      Object.entries(getKruiTooltipDefaultInputs())?.forEach(([key, value]) => {
        // @ts-ignore
        if (this[key] === null || this[key] === undefined) {
          // @ts-ignore
          this[key] = value;
        }
      });
    }
  }

  public onGraphMouseEnter(): void {
    this.onGraphMouseLeave();
    this._tooltipPositionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this._tooltipAttachPoint?.node()!)
      .withPush(true)
      .withFlexibleDimensions(false)
      .withPositions(tooltipPositionPair(this._tooltipChartPart));

    this._tooltipOverlayRef = this.overlay.create({
      positionStrategy: this._tooltipPositionStrategy,
      hasBackdrop: false
    });

    this._tooltipPortal = new ComponentPortal(this.tooltipComponentType === 'default' ?
      KruiChartTooltipComponent :
      this.tooltipComponent);
    this._tooltipRef = this._tooltipOverlayRef.attach(this._tooltipPortal);
    this._tooltipRef.instance.tooltipShowMilliseconds = this.tooltipShowMilliseconds;
    this._tooltipRef.instance.tooltipDateValuePipeFormat = this.tooltipDateValuePipeFormat;
    this._tooltipRef.instance.tooltipTitleDateValuePipeFormat = this.tooltipTitleDateValuePipeFormat;
    this._tooltipRef.instance.tooltipNumberValuePipeFormat = this.tooltipNumberValuePipeFormat;
    this._tooltipRef.instance.tooltipTitleNumberValuePipeFormat = this.tooltipTitleNumberValuePipeFormat;
  }

  public onGraphMouseMove(event: MouseEvent): void {
    let pos = d3.pointer(event);
    if (!event.offsetX) {
      // @ts-ignore
      pos = [event.layerX, event.layerY];
    }


    if (this.tooltipType === 'fullLine') {
      this.highlightTooltipMarker(pos[0], pos[1], pos[0], pos[1], this.tooltipColor);
    }

    const tooltipData: KruiChartTooltipDataLayer[] = [];
    this.layersList.forEach((l, i) => {
      const tooltipValue = l.getTooltipData(pos, this.tooltipType, i);
      tooltipData.push(<KruiChartTooltipDataLayer> tooltipValue?.tooltip);
      if (i === 0 && this.tooltipType === 'dataPoint') {
        this.chartOrientation === 'vertical'
          ? this.highlightTooltipMarker(tooltipValue?.pos, pos[1], pos[0], pos[1], this.tooltipColor)
          : this.highlightTooltipMarker(pos[0], tooltipValue?.pos, pos[0], pos[1], this.tooltipColor);
      }
    });
    const currentKSize = event.offsetX / this.wrap.width;
    const currentDir = currentKSize > 0.5 ? 'right' : 'left';
    const currentMouseDir = event.offsetX >= this._tooltipMouseEventValue ? 'right' : 'left';

    if (currentMouseDir === 'left' && currentDir === 'left') {
      this._tooltipChartPart = 'right';
    } else if (currentMouseDir === 'right' && currentDir === 'left') {
      this._tooltipChartPart = 'left';
    } else if (currentMouseDir === 'left' && currentDir === 'right') {
      this._tooltipChartPart = 'right';
    } else if (currentMouseDir === 'right' && currentDir === 'right') {
      this._tooltipChartPart = 'left';
    }

    this._tooltipMouseEventValue = event.offsetX;
    this._tooltipRef.instance.data = tooltipData;
    this._tooltipOverlayRef?.updatePosition();
  }

  public onGraphMouseLeave(): void {
    this._tooltipRef?.destroy();
    this._tooltipOverlayRef?.detach();
    this.highlightTooltipMarker(0, 0, 0, 0);
  }

  public drawTooltipMarker(): void {
    const scaleHeight: number[] = [this.wrap.workGroundHeight, 0];
    const scaleWidth: number[] = [0, this.wrap.workGroundWidth];

    this._tooltipAttachPoint = this.wrap.g
      .append('circle')
      .attr('id', `${this.wrap.id}--tooltip-point`)
      .attr('class', 'krui-tooltip-point')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 2)
      .attr('fill', 'transparent')
      .attr('stroke', 'transparent')
      .attr('clip-path', `url(#${this.wrap.workgroundClipPathId})`);

    if (this.tooltipMarkerType === 'none') {
      return;
    }

    this._tooltipMarker = [
      d3.select(`#${this.wrap.id}`)
        .append('line')
        .attr('id', `${this.wrap.id}--tooltip-marker-x`)
        .attr('class', 'krui-tooltip-line')
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', 0)
        .attr('fill', 'transparent')
        .attr('stroke', 'transparent')
        .attr('stroke-width', this.tooltipWidth)
        .attr('clip-path', `url(#${this.wrap.workgroundClipPathId})`),

      d3.select(`#${this.wrap.id}`)
        .append('line')
        .attr('id', `${this.wrap.id}--tooltip-marker-y`)
        .attr('class', 'krui-tooltip-line')
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', 0)
        .attr('fill', 'transparent')
        .attr('stroke', 'transparent')
        .attr('stroke-width', this.tooltipWidth)
        .attr('clip-path', `url(#${this.wrap.id}-clipPath)`)
    ];

    if (this.tooltipMarkerType === 'line') {
      this._tooltipMarker[0]
        .attr('y1', scaleHeight[0])
        .attr('y2', scaleHeight[1]);
    }

    // extend lineTooltip
    if (this.tooltipMarkerType === 'fullscreenCross') {
      this._tooltipMarker[1]
        .attr('x1', scaleWidth[0])
        .attr('x2', scaleWidth[1]);
    }
  }

  public highlightTooltipMarker(
    x: number = 0,
    y: number = 0,
    pointX: number,
    pointY: number,
    color: string = 'transparent'
  ): void {
    const scaleHeight: number[] = [this.wrap.workGroundHeight, 0];
    const scaleWidth: number[] = [0, this.wrap.workGroundWidth];

    this._tooltipAttachPoint
      .attr('cx', pointX)
      .attr('cy', pointY - 5);

    switch (this.tooltipMarkerType) {
      case 'line':
        this._tooltipMarker[0]
          .attr('x1', x)
          .attr('x2', x)
          .attr('y1', scaleHeight[0])
          .attr('y2', scaleHeight[1])
          .attr('stroke', color);
        break;
      case 'horizontal-line':
        this._tooltipMarker[1]
          .attr('x1', scaleWidth[0])
          .attr('x2', scaleWidth[1])
          .attr('y1', y)
          .attr('y2', y)
          .attr('stroke', color);
        break;
      case 'smallCross':
        this._tooltipMarker[0]
          .attr('x1', x - this.tooltipMarkerCrossSize)
          .attr('x2', x + this.tooltipMarkerCrossSize)
          .attr('y1', y)
          .attr('y2', y)
          .attr('stroke', color);
        this._tooltipMarker[1]
          .attr('x1', x)
          .attr('x2', x)
          .attr('y1', y - this.tooltipMarkerCrossSize)
          .attr('y2', y + this.tooltipMarkerCrossSize)
          .attr('stroke', color);
        break;
      case 'fullscreenCross':
        this._tooltipMarker[0]
          .attr('x1', x)
          .attr('x2', x)
          .attr('y1', scaleHeight[0])
          .attr('y2', scaleHeight[1])
          .attr('stroke', color);
        this._tooltipMarker[1]
          .attr('y1', scaleWidth[0])
          .attr('y2', scaleWidth[1])
          .attr('y1', y)
          .attr('y2', y)
          .attr('stroke', color);
        break;
    }
  }
}
