import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IKruiChartSingleLayerInputModel} from '@kr-platform/ui';
import {IDashboardItemOptions} from '@kr-platform/kit/pages/combo-charts/examples/combo-chart-view/model';

@Injectable({
  providedIn: 'root'
})
export class ComboChartService {
  public chartOptions$ = new BehaviorSubject<IDashboardItemOptions | null>(null);
  public update$ = new BehaviorSubject<IKruiChartSingleLayerInputModel | null>(null);
  public autoRefresh$ = new BehaviorSubject<boolean>(false);
  public reset$ = new BehaviorSubject<null>(null);
}
