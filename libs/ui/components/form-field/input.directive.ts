import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import { KruiFormFieldControl } from './form-field';

export type KruiInputSize = 'sm' | 'md' | 'lg' | 'xlg';

@Directive({
  selector: 'select[kruiInput], input[kruiInput], textarea[kruiInput]',
  providers: [
    {
      provide: KruiFormFieldControl,
      useExisting: KruiInputDirective
    }
  ],
  exportAs: 'kruiInput',
  standalone: false,
})
export class KruiInputDirective
  implements OnInit, OnDestroy, KruiFormFieldControl {
  private static counter: number = 0;

  @Input()
  kruiInputClass: string = '';

  @Input()
  size: KruiInputSize = 'md';

  @Input()
  floatPlaceholder: boolean = false;

  @HostBinding()
  get id(): string {
    return this._id;
  }

  get value(): string {
    return this.ngControl?.value ?? this.elementRef.nativeElement.value;
  }

  get disabled(): boolean {
    return this.elementRef.nativeElement.disabled;
  }

  get hasError(): boolean {
    return (this.ngControl?.invalid && this.ngControl?.touched) ?? false;
  }

  get placeholder(): string {
    return this.elementRef.nativeElement.placeholder;
  }

  focused: boolean = false;
  isButton: boolean = false;
  controlType!: string;

  readonly stateChanges: Subject<void> = new Subject<void>();
  private _id!: string;

  @HostBinding()
  private get class(): string {
    return `krui-input krui-input--${this.size} ${this.kruiInputClass}`;
  }

  constructor(
    @Optional() @Self() public readonly ngControl: NgControl | null,
    private readonly elementRef: ElementRef<HTMLInputElement>,
    private readonly focusMonitor: FocusMonitor,
    private readonly cdr: ChangeDetectorRef
  ) {
    this._id = `krui-input-${++KruiInputDirective.counter}`;
    this.controlType =
      this.elementRef.nativeElement.tagName.toLocaleLowerCase();
  }

  ngOnInit() {
    this.setFloatPlaceholder();
    if (this.ngControl) {
      this.ngControl.valueChanges?.subscribe(() => this.stateChanges.next());
      this.ngControl.statusChanges?.subscribe(() => this.stateChanges.next());
    } else {
      this.elementRef.nativeElement.addEventListener('input', (event: Event) => {
        this.stateChanges.next();
      });
    }

    this.focusMonitor.monitor(this.elementRef).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });

    this.stateChanges.subscribe(() => {
      this.setFloatPlaceholder();
    });
  }

  setFloatPlaceholder() {
    if (!this.floatPlaceholder || this.size === 'sm') {
      return;
    }
    const elem = this.elementRef.nativeElement.closest('div');
    const placeholder = elem?.getElementsByTagName(`krui-label`)[0];
    if (!placeholder && this.value !== null && this.value !== undefined && this.value?.toString()?.length > 0) {
      const tempDiv = document.createElement('krui-label');
      tempDiv.id = `label-${this.id}`;
      tempDiv.innerHTML = this.placeholder;
      tempDiv.className = 'krui-input-float-placeholder';
      this.elementRef.nativeElement.insertAdjacentElement(
        'beforebegin',
        tempDiv
      );
      this.elementRef.nativeElement.className = `krui-input krui-input--${this.size} ${this.kruiInputClass} krui-input--padding-${this.size}`;
    } else if (this.value === null || this.value === undefined || this.value?.toString()?.length === 0) {
      this.elementRef.nativeElement.className = `krui-input krui-input--${this.size} ${this.kruiInputClass}`;
      placeholder?.remove();
    }

    if (this.elementRef.nativeElement.tagName === 'TEXTAREA') {
      const style = this.elementRef.nativeElement.style;
      style.marginTop = '16px';
      style.paddingTop = '2px';
    }

    this.cdr.markForCheck();
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this.stateChanges.complete();
    this.stateChanges.unsubscribe();
  }
}
