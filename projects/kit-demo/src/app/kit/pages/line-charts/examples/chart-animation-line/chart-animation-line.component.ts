import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { kruiChartNumberMock3, kruiChartNumberMock4, kruiChartRdmNumberData } from '@kr-platform/ui';

/** @title Анимация */

@Component({
  selector: 'chart-animation-line',
  templateUrl: './chart-animation-line.component.html',
  styleUrls: ['./chart-animation-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartAnimationLineComponent {
  public stream0: [number, number][] = kruiChartNumberMock3;
  public stream1: [number, number][] = kruiChartNumberMock4;
  public durationAnimation1: number = 2000;
  public durationAnimation2: number = 3000;
  public render$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public update(): void {
    this.render$.next(false);
    this.stream1 = kruiChartRdmNumberData(10) as unknown as [number, number][];
    this.stream0 = kruiChartRdmNumberData(10) as unknown as [number, number][];
    setTimeout(() => this.render$.next(true), 0);
  }
}
