import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'krui-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  standalone: false,
})
export class KruiLabelComponent {
  get viewContent(): string {
    return this.elementRef?.nativeElement?.innerHTML ?? '';
  }

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {
  }
}
