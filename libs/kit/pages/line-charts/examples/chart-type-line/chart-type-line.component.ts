import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartRdmNumberData } from '@kr-platform/ui';

/** @title Типы трендов */

@Component({
  selector: 'chart-type-line',
  templateUrl: './chart-type-line.component.html',
  styleUrls: ['./chart-type-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartTypeLineComponent {
  public stream0: [number, number, any][] = kruiChartRdmNumberData(Math.random() * 20);
  public stream1: [number, number, any][] = kruiChartRdmNumberData(Math.random() * 20);
  public stream2: [number, number, any][] = kruiChartRdmNumberData(Math.random() * 20);
  public stream3: [number, number, any][] = kruiChartRdmNumberData(Math.random() * 20);

  public update(): void {
    this.stream0 = kruiChartRdmNumberData(Math.random() * 20);
    this.stream1 = kruiChartRdmNumberData(Math.random() * 20);
    this.stream2 = kruiChartRdmNumberData(Math.random() * 20);
    this.stream3 = kruiChartRdmNumberData(Math.random() * 20);
  }
}
