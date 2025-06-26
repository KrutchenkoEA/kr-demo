import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'kr-kit-icons',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: false,
})
export class IconComponent {
  @HostBinding('class') class = 'kit-page';
  public elementRef = inject(ElementRef);
}
