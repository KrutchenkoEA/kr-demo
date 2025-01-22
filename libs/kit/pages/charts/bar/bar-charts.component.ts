import { Component, HostBinding } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { TableOfContentsComponent } from '../../../components/table-of-contents/table-of-contents.component';
import { ExampleModule } from '../../../example.module';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss'],
  standalone: true,
  imports: [
    TableOfContentsComponent,
    ExampleModule,
  ],
})
export class BarChartsComponent {
  @HostBinding('class') class = 'kit-page';

  constructor(readonly app: AppComponent) {
  }
}
