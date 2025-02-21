import { Directive, Self } from '@angular/core';
import { KRUI_CHART_DATA_LAYER_TOKEN } from '../injection-tokens';
import {
  KruiChartAxisType,
  KruiChartDataLayerProvider,
  KruiChartDataLayerRenderer,
  KruiChartDataLayerTooltipProvider,
  KruiChartLayerDrawContext,
  KruiChartLegendLabelData,
  KruiChartRenderTarget,
  KruiChartTooltipDataRow,
  KruiChartTooltipType,
  KruiChartWorkgroundPadding,
} from '../models';


@Directive({
  selector: 'krui-chart-data-layer',
  providers: [
    {
      provide: KRUI_CHART_DATA_LAYER_TOKEN, useClass: KruiChartDataLayerDirective,
    },
  ],
  standalone: false,
})
export class KruiChartDataLayerDirective<U, V> {
  private static nextId: number = 0;
  public state: Map<number, boolean> = new Map<number, boolean>();
  public opacityState: Map<number, boolean> = new Map<number, boolean>();

  public readonly id: string = `krui-chart-data-layer-${++KruiChartDataLayerDirective.nextId}`;

  constructor(
    @Self() public readonly dataProvider: KruiChartDataLayerProvider<U, V>,
    @Self() public readonly dataRenderer: KruiChartDataLayerRenderer,
    @Self() public readonly dataTooltipProvider: KruiChartDataLayerTooltipProvider<U>,
  ) {
  }

  public getDomain(axisType: KruiChartAxisType | null): U[] {
    return this.dataProvider.getDomain(axisType);
  }

  public getRange(): V[] {
    return this.dataProvider.getRange();
  }

  public getWorkgroundPadding(axisType: KruiChartAxisType): KruiChartWorkgroundPadding {
    return this.dataProvider.getWorkgroundPadding(axisType);
  }

  public getLegendData(): KruiChartLegendLabelData[] | null {
    return this.dataProvider.getLegendData();
  }

  public getTooltipData(
    value: U,
    tooltipType: KruiChartTooltipType,
    axisType: KruiChartAxisType,
  ): KruiChartTooltipDataRow[] {
    return this.dataTooltipProvider.getTooltipData(value, tooltipType, axisType);
  }

  public getBandWidth(): number {
    return this.dataTooltipProvider.getBandWidth();
  }

  public getTooltipTitleEnum(): string | null {
    return this.dataTooltipProvider.getTooltipTitleEnum();
  }

  public getTooltipDataEnum(value: U): KruiChartTooltipDataRow[] {
    return this.dataTooltipProvider.getTooltipDataEnum(value);
  }

  public toggleState(trendIndex: number, hidden: boolean, durationToggleAnimation?: number): void {
    this.dataRenderer.toggleState(trendIndex, hidden, durationToggleAnimation);
  }

  public toggleOpacity(trendIndex: number, hidden: boolean): void {
    this.dataRenderer.toggleOpacity(trendIndex, hidden);
  }

  public renderOpacity(active: boolean): void {
    this.dataRenderer.renderOpacity(active);
  }

  public render(target: KruiChartRenderTarget, context: KruiChartLayerDrawContext): void {
    this.dataRenderer.render(target, context, this.id);
  }

  public reScale(
    target: KruiChartRenderTarget,
    context: KruiChartLayerDrawContext,
    event: any,
    zoomXEnable: boolean,
    zoomYEnable: boolean,
    animation: boolean,
  ): void {
    this.dataRenderer.reScale(target, context, event, zoomXEnable, zoomYEnable, animation);
  }
}
