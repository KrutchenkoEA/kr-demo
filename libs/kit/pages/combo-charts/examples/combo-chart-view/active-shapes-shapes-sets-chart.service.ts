/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unsafe-optional-chaining */
import { Injectable } from '@angular/core';
import { IComboChartComboData, IDataMappingOptionsViewer } from '../combo-chart-view/model';
import { DataItemTypeEnum } from './const';

@Injectable()
export class ActiveShapesShapesSetsChartService {
  public createData(): IDataMappingOptionsViewer {
    return {
      name: '',
      type: DataItemTypeEnum.Line,
      chartData: [],
      color: '',
      caption: [],
      palette: [],
    };
  }

  public createComboData(keys: string[]): IComboChartComboData {
    const comboData = {};
    keys?.forEach((key: string) => {
      // @ts-ignore
      comboData[key] = this.createData();
    });

    return <IComboChartComboData> comboData;
  }

  public setData(data: IDataMappingOptionsViewer, item: IDataMappingOptionsViewer): IDataMappingOptionsViewer {
    data.chartData.push(item.chartData);
    data.caption.push(item.name);
    data.palette.push(item.color);
    return data;
  }
}
