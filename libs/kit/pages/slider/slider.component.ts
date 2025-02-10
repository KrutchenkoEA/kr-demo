import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'kr-kit-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: false,
})
export class SliderComponent {
  @HostBinding() class = 'kit-page';

}
