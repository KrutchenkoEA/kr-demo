import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'kr-kit-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  standalone: false,
})
export class RangeComponent {
  @HostBinding() class = 'kit-page';
}
