import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[kruiFitHeight]',
  standalone: false,
})
export class KruiFitHeightDirective implements OnInit {
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    const el = this.el.nativeElement as HTMLElement;
    el.style.display = 'flex';
    el.style.flexDirection = 'column';

    const div = el.querySelector<HTMLDivElement>('div');
    if (div) {
      div.style.flex = '1';
      div.style.display = 'flex';
      div.style.flexDirection = 'column';
      div.style.alignItems = 'baseline';

      const control = div.querySelector<HTMLElement>('textarea');
      if (control) {
        control.style.flex = '1';
      }
    }
  }
}
