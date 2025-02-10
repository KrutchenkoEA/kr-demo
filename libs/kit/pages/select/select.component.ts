import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'kr-kit-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false,
})
export class SelectComponent {
  @HostBinding('class') class = 'kit-page';
}
