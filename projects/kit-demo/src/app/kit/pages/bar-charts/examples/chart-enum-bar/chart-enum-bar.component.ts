import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KruiChartBarInputData } from '@kr-platform/ui';

/** @title Enum */

@Component({
  selector: 'chart-enum-bar',
  templateUrl: './chart-enum-bar.component.html',
  styleUrls: ['./chart-enum-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ChartEnumBarComponent {
  public data = [
    [1, 8065.4, '02.03-08.03'],
    [2, 8564.5, '09.03-15.03'],
    [3, 8792.0, '16.03-22.03'],
    [4, null, '22.03-23.03'],
  ] as KruiChartBarInputData[];

  public data2 = [
    [1, null, '02.03-08.03'],
    [2, null, '09.03-15.03'],
    [3, null, '16.03-22.03'],
    [4, 8787.4, '22.03-23.03'],
  ] as KruiChartBarInputData[];
}
