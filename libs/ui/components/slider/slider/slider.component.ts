import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { RangeBase } from '../range-base.class';

@Component({
  selector: 'krui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KruiSliderComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class KruiSliderComponent
  extends RangeBase
  implements ControlValueAccessor, OnInit, OnDestroy, AfterViewInit {
  @Input()
  disabled: boolean = false;

  @Input()
  override min: number = 0;

  @Input()
  override max: number = 100;

  @Input()
  override step: number = 1;

  @Input()
  buttons: boolean = false;

  @Input()
  inputs: boolean = false;

  @Input()
  labels: boolean = false;

  @Output()
  onChange = new EventEmitter<number>();

  private ngControl!: NgControl | null;

  // @ts-ignore
  @ViewChild('slider') protected readonly slider!: ElementRef<HTMLElement>;

  // @ts-ignore
  @ViewChild('start') protected readonly start!: ElementRef<HTMLElement>;

  // @ts-ignore
  @ViewChild('end') protected readonly end!: ElementRef<HTMLElement>;

  private _onChange!: (value: number) => void;
  private onTouched!: () => void;

  constructor(
    @Inject(DOCUMENT) override readonly document: Document,
    protected readonly changeDetectorRef: ChangeDetectorRef,
    readonly injector: Injector,
  ) {
    super(document, changeDetectorRef);
  }

  writeValue(value: number): void {
    this.endControl.patchValue(value ?? this.max);
    this.startControl.patchValue(this.min);
    this.active = null;
  }

  registerOnChange(onChange: (value: number) => void): void {
    this._onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
    if (this.disabled) {
      this.endControl.disable();
    } else {
      this.endControl.enable();
    }
  }

  ngOnInit() {
    super.onInit();
    this.ngControl = this.injector.get(NgControl, null);
  }

  ngOnDestroy() {
    super.onDestroy();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (!this.ngControl) {
        this.writeValue(this.max);
      }
    });
  }

  protected override onModelChange(): void {
    if (this._onChange) {
      this._onChange(this.endValue);
    }

    this.onChange.emit(this.endValue);
  }
}
