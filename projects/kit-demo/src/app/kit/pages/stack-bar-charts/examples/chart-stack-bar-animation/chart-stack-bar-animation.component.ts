import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartRandomValue, kruiChartStackBarMock1 } from '@kr-platform/ui';

/** @title Анимация */

@Component({
  selector: 'chart-stack-bar-animation',
  templateUrl: './chart-stack-bar-animation.component.html',
  styleUrls: ['./chart-stack-bar-animation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartStackBarAnimationComponent {
  public data = kruiChartStackBarMock1;
  public durationAnimation: number = 2000;

  public update(): void {
    this.data = [
      ...this.data, [
        this.data.length + 1,
        [kruiChartRandomValue(10, 40), kruiChartRandomValue(10, 40), kruiChartRandomValue(10, 40)],
        '',
      ],
    ];
  }
}
