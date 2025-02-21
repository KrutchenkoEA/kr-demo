import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-combo-charts',
  templateUrl: './combo-charts.component.html',
  styleUrls: ['./combo-charts.component.scss'],
  standalone: false,
})
export class ComboChartsComponent {
  @HostBinding('class') class = 'kit-page';
  public elementRef = inject(ElementRef);
}
