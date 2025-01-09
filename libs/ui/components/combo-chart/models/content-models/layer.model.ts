export interface IKruiChartLayerTooltipInputs {
  tooltipEnable: boolean;
  tooltipColor: string;
}

export interface IKruiChartLayerZoomInputs {
  zoomPrimaryEnable: boolean;
  zoomSecondaryEnable: boolean;
}

export interface KruiChartLayerInputs extends IKruiChartLayerTooltipInputs, IKruiChartLayerZoomInputs {
  layerTitle: string;
}
