import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type KruiCheckboxSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'krui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: KruiCheckboxComponent,
      multi: true,
    },
  ],
  standalone: false,
})
export class KruiCheckboxComponent
  implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private static nextId: number = 0;

  @Input()
  size: KruiCheckboxSize = 'md';

  @Input()
  set id(id: string) {
    this._id = id;
  }

  get id(): string {
    return this._id;
  }

  @Input()
  checked!: boolean;

  @Input()
  indeterminate!: boolean;

  @Input()
  disabled: boolean = false;

  @Input()
  name!: string;

  @Input()
  required!: boolean;

  @Input()
  tabIndex!: number;

  @Input()
  value!: boolean | null;

  @ViewChild('checkbox')
  checkbox!: HTMLInputElement;

  @Input()
  labelPosition: 'before' | 'after' = 'after';

  @Output()
  onChanges: EventEmitter<boolean> = new EventEmitter<boolean>();

  // TODO нужно заменить наследование на CheckboxValueAccessor
  @HostListener('ngModelChange', ['$event'])
  ngModelChange(value: boolean | null) {
    this.writeValue(value);
  }

  focused: boolean = false;
  protected onChange!: (value: boolean | null) => void;
  protected onTouched!: () => void;
  protected _id!: string;

  constructor(protected readonly focusMonitor: FocusMonitor) {
    this._id = `krui-checkbox-${++KruiCheckboxComponent.nextId}`;
  }

  writeValue(value: boolean | null): void {
    this.value = value;
  }

  registerOnChange(onChange: (value: boolean | null) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  ngAfterViewInit(): void {
    this.focusMonitor
      .monitor(this.checkbox)
      .subscribe((origin: FocusOrigin) => {
        if (this.onTouched) {
          this.onTouched();
        }
        this.focused = origin === 'keyboard';
      });
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.checkbox);
  }

  onCheck(value: boolean): void {
    this.value = value;
    if (this.onChange) {
      this.onChange(value);
    }
    this.onChanges.emit(value);
  }
}
