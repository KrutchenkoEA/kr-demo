import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnDestroy, Optional } from '@angular/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { KruiButtonGroupComponent } from './button-group/button-group.component';
import { KruiButtonSize, KruiButtonStyle } from './enums';

@Directive({
  selector: '[kruiButton]',
  host: {
    '[class.krui-btn--outlined]': 'focused',
    '[disabled]': 'disabled',
  },
  standalone: false,
})
export class KruiButtonDirective implements AfterViewInit, OnDestroy {
  @Input()
  set size(size: KruiButtonSize) {
    this._size = size;
  }

  get size(): KruiButtonSize {
    return this._size ?? this.group?.size ?? 'md';
  }

  @Input()
  set btnStyle(style: KruiButtonStyle) {
    this._style = style;
  }

  get btnStyle(): KruiButtonStyle {
    return this._style ?? this.group?.btnStyle ?? 'primary';
  }

  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  get disabled(): boolean {
    return this._disabled ?? this.group?.disabled ?? false;
  }

  private focused: boolean = false;

  @HostBinding('class')
  private get class() {
    return `krui-btn krui-btn--${this.size} krui-btn--${this.btnStyle}`;
  }

  private _size!: KruiButtonSize;
  private _style!: KruiButtonStyle;
  private _disabled!: boolean;

  constructor(
    @Optional() private readonly group: KruiButtonGroupComponent,
    private readonly focusMonitor: FocusMonitor,
    private readonly elementRef: ElementRef,
  ) {
  }

  ngAfterViewInit(): void {
    this.focusMonitor
      .monitor(this.elementRef)
      .subscribe(
        (origin: FocusOrigin) => (this.focused = origin === 'keyboard'),
      );
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
}
