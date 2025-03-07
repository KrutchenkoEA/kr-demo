import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-combo-bar-charts',
  templateUrl: './combo-bar-charts.component.html',
  styleUrls: ['./combo-bar-charts.component.scss'],
  standalone: false,
})
export class ComboBarChartsComponent {
  @HostBinding('class') class = 'kit-page';
  public elementRef = inject(ElementRef);
}
