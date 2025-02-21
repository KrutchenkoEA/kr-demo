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
  selector: 'krui-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KruiRangeComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class KruiRangeComponent
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
  onChange = new EventEmitter<[number, number]>();

  private ngControl!: NgControl | null;

  // @ts-ignore
  @ViewChild('slider') protected readonly slider!: ElementRef<HTMLElement>;

  // @ts-ignore
  @ViewChild('start') protected readonly start!: ElementRef<HTMLElement>;

  // @ts-ignore
  @ViewChild('end') protected readonly end!: ElementRef<HTMLElement>;

  private _onChange!: (value: [number, number]) => void;
  private onTouched!: () => void;

  constructor(
    @Inject(DOCUMENT) override readonly document: Document,
    protected readonly changeDetectorRef: ChangeDetectorRef,
    readonly injector: Injector,
  ) {
    super(document, changeDetectorRef);
  }

  writeValue(value: [number, number] | null): void {
    if (!this.active) {
      this.endControl.patchValue(value?.[1] ?? this.max);
      this.startControl.patchValue(value?.[0] ?? this.min);
      this.active = null;
    }
  }

  registerOnChange(onChange: (value: [number, number]) => void): void {
    this._onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;

    if (this.disabled) {
      this.startControl.disable();
      this.endControl.disable();
    } else {
      this.startControl.enable();
      this.endControl.enable();
    }
  }

  ngOnInit(): void {
    super.onInit();
    this.ngControl = this.injector.get(NgControl, null);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (!this.ngControl) {
        this.writeValue([this.min, this.max]);
      }
    });
  }

  ngOnDestroy(): void {
    super.onDestroy();
  }

  protected override onModelChange(): void {
    if (this._onChange) {
      this._onChange([this.startValue, this.endValue]);
    }

    this.onChange.emit([this.startValue, this.endValue]);
  }
}
