import { Component, HostBinding } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss'],
})
export class BarChartsComponent {
  @HostBinding('class') class = 'kit-page';

  constructor(readonly app: AppComponent) {
  }
}
