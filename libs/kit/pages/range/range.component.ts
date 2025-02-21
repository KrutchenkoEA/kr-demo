import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  standalone: false,
})
export class RangeComponent {
  @HostBinding() class = 'kit-page';
  public elementRef = inject(ElementRef);
}
