import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: false,
})
export class AccordionComponent {
  @HostBinding('class') class = 'kit-page';
  public elementRef = inject(ElementRef);
}
