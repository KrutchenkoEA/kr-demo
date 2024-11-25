import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnDestroy, Optional } from '@angular/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { KruiButtonSize, KruiButtonStyle } from './enums';
import { KruiButtonGroupComponent } from './button-group/button-group.component';

@Directive({
  selector: '[kruiBtn]',
})
export class KruiButtonDirective implements AfterViewInit, OnDestroy {
  private focused: boolean = false;
  private _style!: KruiButtonStyle;
  private _disabled!: boolean;
  private _size!: KruiButtonSize;

  @HostBinding('class')
  public get class(): string {
    return `krui-btn krui-btn--${this.size} krui-btn--${this.btnStyle}`;
  }

  @Input()
  public set btnStyle(style: KruiButtonStyle) {
    this._style = style;
  }

  @Input()
  public set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  @Input()
  public set size(size: KruiButtonSize) {
    this._size = size;
  }

  public get btnStyle(): KruiButtonStyle {
    return this._style ?? this.group?.btnStyle ?? 'primary';
  }

  public get disabled(): boolean {
    return this._disabled ?? this.group?.disabled ?? false;
  }

  public get size(): KruiButtonSize {
    return this._size ?? this.group?.size ?? 'md';
  }

  constructor(
    @Optional() private readonly group: KruiButtonGroupComponent,
    private readonly focusMonitor: FocusMonitor,
    private readonly elementRef: ElementRef
  ) {}

  public ngAfterViewInit(): void {
    this.focusMonitor.monitor(this.elementRef).subscribe((origin: FocusOrigin) => {
      this.focused = origin === 'keyboard';
    });
  }

  public ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
}
