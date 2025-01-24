import { Component, ElementRef, HostBinding } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { ExampleViewerComponent, TableOfContentsComponent } from '@kr-platform/kit';


@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss'],
  standalone: true,
  imports: [
    ExampleViewerComponent,
    TableOfContentsComponent,
  ],
})
export class BarChartsComponent {
  @HostBinding('class') class = 'kit-page';

  // constructor(readonly app: ComponentType) {
  // }
}
