import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  KruiChartBarInputData,
  kruiChartNumberMock1,
  kruiChartNumberMock2,
  kruiChartRdmNumberData,
} from '@kr-platform/ui';

/** @title Анимация */

@Component({
  selector: 'chart-animation-bar',
  templateUrl: './chart-animation-bar.component.html',
  styleUrls: ['./chart-animation-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartAnimationBarComponent {
  public stream0: KruiChartBarInputData[] = kruiChartNumberMock2;
  public stream1: KruiChartBarInputData[] = kruiChartNumberMock1;
  public durationAnimation1: number = 2000;
  public durationAnimation2: number = 3000;

  public update(): void {
    this.stream1 = kruiChartRdmNumberData(10);
    this.stream0 = kruiChartRdmNumberData(10);
  }
}
