import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'kr-kit-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false,
})
export class InputComponent {
  @HostBinding('class') class = 'kit-page';
}
