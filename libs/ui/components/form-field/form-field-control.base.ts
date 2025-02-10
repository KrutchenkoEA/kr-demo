import { FocusMonitor } from '@angular/cdk/a11y';
import {
  OnDestroy,
  OnInit,
  ElementRef,
  AfterViewInit,
  Directive,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

import { KruiFormFieldControl } from './form-field';

@Directive()
export class KruiFormFieldControlBase<T>
  implements
    ControlValueAccessor,
    OnInit,
    OnDestroy,
    AfterViewInit,
    KruiFormFieldControl
{
  protected static nextId = 0;

  get id(): string {
    return this._id;
  }

  get focused(): boolean {
    return this._focused;
  }

  get hasError(): boolean {
    return (this.ngControl?.invalid && this.ngControl?.touched) ?? false;
  }

  isButton: boolean = true;

  value!: T | null;
  disabled: boolean = false;
  readonly placeholder: string = ''
  readonly stateChanges: Subject<void> = new Subject<void>();
  readonly focusElement!: ElementRef<any>;
  protected onChange!: (value: T | null) => void;
  protected onTouched!: () => void;
  protected _focused: boolean = false;
  protected _id!: string;

  constructor(
    public readonly controlType: string,
    public readonly ngControl: NgControl | null,
    protected readonly focusMonitor: FocusMonitor
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    this._id = `${this.controlType}-${++KruiFormFieldControlBase.nextId}`;
  }

  ngOnInit() {
    if (this.ngControl) {
      this.ngControl.valueChanges?.subscribe(() => this.stateChanges.next());
      this.ngControl.statusChanges?.subscribe(() => this.stateChanges.next());
    }
  }

  ngAfterViewInit() {
    this.focusMonitor.monitor(this.focusElement).subscribe((origin) => {
      this._focused = !!origin && !this.disabled;
      if (this.onTouched) {
        this.onTouched();
      }
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.focusElement);
    this.stateChanges.complete();
  }

  writeValue(value: T | null): void {
    this.value = value;
  }

  registerOnChange(onChange: (value: T | null) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
