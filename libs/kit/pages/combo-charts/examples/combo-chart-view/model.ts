import { IKruiChartSingleLayerInputModel } from '@kr-platform/ui';
import { KruiGeneratorForm } from '../combo-chart-graph/model';

export interface IDashboardItemOptions {
  exampleView: boolean;
  view: IKruiChartSingleLayerInputModel;
  data: KruiGeneratorForm[];
}


export interface IDataMappingOptionsViewer extends KruiGeneratorForm {
  caption: string[];
  palette: string[];
}

export interface IComboChartRenderingOptions {
  view: IKruiChartSingleLayerInputModel;
  data: IDataMappingOptionsViewer[];
  comboData: IComboChartComboData;
}

export interface IComboChartComboData {
  comboBar: IDataMappingOptionsViewer;
  comboBarHorizontal: IDataMappingOptionsViewer;
  stackBar: IDataMappingOptionsViewer;
  stackBarHorizontal: IDataMappingOptionsViewer;
}
