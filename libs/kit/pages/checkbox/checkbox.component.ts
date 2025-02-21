import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: false,
})
export class CheckboxComponent {
  @HostBinding('class') class = 'kit-page';
  public elementRef = inject(ElementRef);
}
