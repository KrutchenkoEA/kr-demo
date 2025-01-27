import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'kr-kit-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
  standalone: false,
})
export class TypographyComponent {
  @HostBinding('class') class = 'kit-page';
}
