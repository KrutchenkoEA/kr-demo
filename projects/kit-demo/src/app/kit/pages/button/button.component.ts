import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false,
})
export class ButtonComponent {
  @HostBinding('class') class = 'kit-page';
  public elementRef = inject(ElementRef);
}
