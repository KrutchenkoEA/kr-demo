/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unsafe-optional-chaining */
import { Injectable } from '@angular/core';
import { IComboChartComboData, IDataMappingOptionsViewer } from '../combo-chart-view/model';
import { BehaviorSubject } from 'rxjs';
import { DataItemTypeEnum, DataItemTypeEnumComboKey, KruiGeneratorForm } from '../combo-chart-graph/model';

@Injectable()
export class ComboChartViewService {
  public createData(): IDataMappingOptionsViewer {
    return {
      name: '',
      type: DataItemTypeEnum.Line,
      chartData: [],
      chartData$: new BehaviorSubject([]),
      color: '',
      caption: [],
      palette: [],
    };
  }

  public createComboData(keys: DataItemTypeEnumComboKey[]): IComboChartComboData {
    const comboData: Partial<IComboChartComboData> = {};
    keys?.forEach((key: DataItemTypeEnumComboKey) => {
      comboData[key] = this.createData();
    });

    return <IComboChartComboData> comboData;
  }

  public setData(data: IDataMappingOptionsViewer, item: KruiGeneratorForm): IDataMappingOptionsViewer {
    data.chartData.push(item.chartData);
    data.caption.push(item.name);
    data.palette.push(item.color);
    return data;
  }
}
