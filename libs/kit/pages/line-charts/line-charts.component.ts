import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.scss'],
  standalone: false,
})
export class LineChartsComponent {
  @HostBinding('class') class = 'kit-page';
  public elementRef = inject(ElementRef);
}
