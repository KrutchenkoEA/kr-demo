import { ChangeDetectionStrategy, Component } from '@angular/core';
import { formatter, stream1 } from './const';

/** @title Временной */

@Component({
  selector: 'chart-time-line',
  templateUrl: './chart-time-line.component.html',
  styleUrls: ['./chart-time-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartTimeLineComponent {
  public data = stream1;

  public formatter = formatter;
}
