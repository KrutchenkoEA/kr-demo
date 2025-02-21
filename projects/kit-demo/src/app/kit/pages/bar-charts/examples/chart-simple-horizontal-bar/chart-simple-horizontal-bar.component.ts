import { ChangeDetectionStrategy, Component } from '@angular/core';
import { kruiChartNumberMock2 } from '@kr-platform/ui';

/** @title Горизонтальный */

@Component({
  selector: 'chart-simple-horizontal-bar',
  templateUrl: './chart-simple-horizontal-bar.component.html',
  styleUrls: ['./chart-simple-horizontal-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartSimpleHorizontalBarComponent {
  public data = kruiChartNumberMock2;
}
