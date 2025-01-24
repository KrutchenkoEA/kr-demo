import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss'],
  standalone: false
})
export class BarChartsComponent {
  @HostBinding('class') class = 'kit-page';

  // constructor(readonly app: ComponentType) {
  // }
}
