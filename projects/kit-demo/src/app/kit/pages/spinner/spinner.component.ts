import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: false,
})
export class SpinnerComponent {
  @HostBinding('class') class = 'kit-page';
  public elementRef = inject(ElementRef);
}
