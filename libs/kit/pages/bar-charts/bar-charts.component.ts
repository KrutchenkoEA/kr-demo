import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss'],
  standalone: false,
})
export class BarChartsComponent {
  @HostBinding('class') class = 'kit-page';
  public elementRef = inject(ElementRef);
}
