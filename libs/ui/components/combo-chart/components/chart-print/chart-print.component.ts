import { Component, ElementRef, Inject } from '@angular/core';
import { KRUI_CHART_POPUP_DIALOG_DATA } from '../../services';
import { POPUP_APPEARANCE } from '../../../../animations';

@Component({
  selector: 'krui-chart-print',
  template: '',
  styles: [':host { width:100%; height:100%; }'],
  animations: [POPUP_APPEARANCE],
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
