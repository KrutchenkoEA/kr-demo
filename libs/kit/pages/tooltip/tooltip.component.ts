import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'kr-kit-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  standalone: false,
})
export class TooltipComponent {
  @HostBinding('class') class = 'kit-page';
}
