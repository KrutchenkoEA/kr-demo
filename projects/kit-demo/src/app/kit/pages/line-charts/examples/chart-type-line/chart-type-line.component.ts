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
  private randomInt = Math.random() * 10;
  public stream0: [number, number, any][] = kruiChartRdmNumberData(this.randomInt);
  public stream1: [number, number, any][] = kruiChartRdmNumberData(this.randomInt);
  public stream2: [number, number, any][] = kruiChartRdmNumberData(this.randomInt);
  public stream3: [number, number, any][] = kruiChartRdmNumberData(this.randomInt);
}
