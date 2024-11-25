import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[kruiBtnIcon]',
})
export class KruiButtonIconDirective {
  @HostBinding('class')
  private readonly class: string = 'krui-btn__icon';

  @HostBinding('class.krui-btn__icon--left')
  private get iconLeft(): boolean {
    return this.elementRef?.nativeElement?.previousSibling === null;
  }

  @HostBinding('class.krui-btn__icon--right')
  private get iconRight(): boolean {
    return this.elementRef?.nativeElement?.nextSibling === null;
  }

  constructor(private readonly elementRef: ElementRef<HTMLButtonElement>) {}
}
