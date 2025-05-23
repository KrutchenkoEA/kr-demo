import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  standalone: false
})
export class ToggleComponent {
  @HostBinding('class') class = 'kit-page';
  public elementRef = inject(ElementRef);
}
