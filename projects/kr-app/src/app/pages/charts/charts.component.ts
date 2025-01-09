import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KruiChartComboModule, kruiChartNumberMock3, kruiChartNumberMock4 } from '@kr-platform/ui';

@Component({
  selector: 'kr-app-charts',
  imports: [
    KruiChartComboModule,
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsComponent {
  public data = kruiChartNumberMock3;
  public data2 = kruiChartNumberMock4;
}
