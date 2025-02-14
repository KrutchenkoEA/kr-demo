import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'kr-kit-area-charts',
  templateUrl: './area-charts.component.html',
  styleUrls: ['./area-charts.component.scss'],
  standalone: false,
})
export class AreaChartsComponent {
  @HostBinding('class') class = 'kit-page';
}
