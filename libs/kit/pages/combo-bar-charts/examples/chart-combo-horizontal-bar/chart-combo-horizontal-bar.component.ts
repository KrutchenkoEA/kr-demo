import { ChangeDetectionStrategy, Component } from '@angular/core';
import { data, data2, data3, data4 } from './const';

/** @title Горизонтальный */

@Component({
  selector: 'chart-combo-horizontal-bar',
  templateUrl: './chart-combo-horizontal-bar.component.html',
  styleUrls: ['./chart-combo-horizontal-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartComboHorizontalBarComponent {
  public data = data;
  public data2 = data2;
  public data3 = data3;
  public data4 = data4;
}
