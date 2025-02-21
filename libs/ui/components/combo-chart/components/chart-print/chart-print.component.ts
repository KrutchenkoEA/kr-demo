import { Component, ElementRef, Inject } from '@angular/core';
import { KRUI_CHART_POPUP_DIALOG_DATA } from '../../services';
import { animate, state, style, transition, trigger } from '@angular/animations';

const popup = trigger('popup', [
  state('void', style({ transform: 'scale3d(0.75, 0.75, 0.75)', opacity: 0 })),
  state('enter', style({ transform: 'scale3d(1.0, 1.0, 1.0)', opacity: 1 })),
  transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')),
]);


@Component({
  selector: 'krui-chart-print',
  template: '',
  styles: [':host { width:100%; height:100%; }'],
  animations: [popup],
  standalone: false,
})
export class KruiChartPrintComponent {
  constructor(
    private readonly elementRef: ElementRef,
    @Inject(KRUI_CHART_POPUP_DIALOG_DATA) public readonly data: { html: string },
  ) {
    this.elementRef.nativeElement.innerHTML = data.html;
  }
}
