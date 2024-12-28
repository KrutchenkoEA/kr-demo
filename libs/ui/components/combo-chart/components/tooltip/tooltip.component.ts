import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { KruiChartTooltipBaseDirective } from '../../content-directives/tooltip.directive';


@Component({
  selector: 'krui-chart-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  animations: [
    trigger('popup', [
      state('void', style({ opacity: 0 })),
      state('enter', style({ opacity: 1 })),
      transition('* => *', animate('200ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
    ]),
  ],
  standalone: false,
})
export class KruiChartTooltipComponent extends KruiChartTooltipBaseDirective {
  public getTitle(title: string): string {
    if (title?.length > 24) {
      return title.slice(0, 24) + '...';
    } else {
      return title;
    }
  }
}
