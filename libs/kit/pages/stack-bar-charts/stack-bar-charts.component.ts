import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-stack-bar-charts',
  templateUrl: './stack-bar-charts.component.html',
  styleUrls: ['./stack-bar-charts.component.scss'],
  standalone: false,
})
export class StackBarChartsComponent {
  @HostBinding('class') class = 'kit-page';
  public elementRef = inject(ElementRef);
}
