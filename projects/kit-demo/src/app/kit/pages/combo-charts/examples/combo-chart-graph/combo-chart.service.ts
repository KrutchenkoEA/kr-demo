import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IKruiChartSingleLayerInputModel } from '@kr-platform/ui';
import { IDashboardItemOptions } from '../combo-chart-view/model';

@Injectable({
  providedIn: 'root',
})
export class ComboChartService {
  public chartOptions$ = new BehaviorSubject<IDashboardItemOptions | null>(null);
  public chartDataUpdate$ = new Subject<IDashboardItemOptions['data'] | null>();
  public update$ = new BehaviorSubject<IKruiChartSingleLayerInputModel | null>(null);
  public autoRefresh$ = new BehaviorSubject<boolean>(false);
  public reset$ = new BehaviorSubject<null>(null);
  public chartSizeChanged$: BehaviorSubject<{ width: number; height: number }> = new BehaviorSubject<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
}
