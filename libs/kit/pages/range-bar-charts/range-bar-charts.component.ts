import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'kr-kit-range-bar-charts',
  templateUrl: './range-bar-charts.component.html',
  styleUrls: ['./range-bar-charts.component.scss'],
  standalone: false,
})
export class RangeBarChartsComponent {
  @HostBinding('class') class = 'kit-page';
}
