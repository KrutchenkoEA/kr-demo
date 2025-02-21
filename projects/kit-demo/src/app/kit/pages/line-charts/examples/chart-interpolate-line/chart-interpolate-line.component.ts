import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartRandomDateArray } from '@kr-platform/ui';

/** @title Интерполяция */

@Component({
  selector: 'chart-interpolate-line',
  templateUrl: './chart-interpolate-line.component.html',
  styleUrls: ['./chart-interpolate-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartInterpolateLineComponent {
  public stream1: [any, number, any][] = [];

  public ngOnInit(): void {
    this.update();
  }

  public update(): void {
    this.stream1 = kruiChartRandomDateArray(4000, 20, 400, new Date(2005, 11, 17), 20);
  }
}
