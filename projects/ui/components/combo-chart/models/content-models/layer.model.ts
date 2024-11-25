export interface ITluiChartLayerTooltipInputs {
  tooltipEnable: boolean;
  tooltipColor: string;
}

export interface ITluiChartLayerZoomInputs {
  zoomPrimaryEnable: boolean;
  zoomSecondaryEnable: boolean;
}

export interface KruiChartLayerInputs extends ITluiChartLayerTooltipInputs, ITluiChartLayerZoomInputs {
  layerTitle: string;
}
