import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { KruiTooltipModule } from '@kr-platform/ui';
import { MainChartComponent } from './chart-combo-line-bar/main-chart.component';

@Component({
  selector: 'kr-app-main',
  imports: [
    RouterLink,
    SvgIconComponent,
    KruiTooltipModule,
    MainChartComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  private document = inject<Document>(DOCUMENT);

  public openUrl(url: string): void {
    this.document?.defaultView?.open(url, '_blank');
  }
}
