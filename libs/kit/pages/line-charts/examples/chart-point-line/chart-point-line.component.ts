import { ChangeDetectionStrategy, Component } from '@angular/core';
import { stream0, stream1, stream2, stream3 } from './data';
import { KruiChartPointDataOptions } from '@kr-platform/ui';


/** @title Точки */

@Component({
  selector: 'chart-point-line',
  templateUrl: './chart-point-line.component.html',
  styleUrls: ['./chart-point-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartPointLineComponent {
  public stream0: [number, number][] = stream0;
  public stream1: [number, number][] = stream1;
  public stream2: [number, number][] = stream2;
  public stream3: [number, number][] = stream3;


  public customPointType: { key: string, opt: KruiChartPointDataOptions }[] = [
    {
      key: 'customPoint',
      opt: {
        pointMarkers: ['symbolSquare'],
        pointVisible: true,
        pointColor: 'red',
        pointStrokeColor: 'auto',
        pointSize: 10,
        pointStrokeSize: 2,
        pointLimit: 100
      }
    }
  ] as { key: string, opt: KruiChartPointDataOptions }[];
}
