/* eslint-disable import/no-extraneous-dependencies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'combo-chart-selector',
  templateUrl: './combo-chart-selector.component.html',
  styleUrls: ['./combo-chart-selector.component.scss'],
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboChartSelectorComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboChartSelectorComponent implements ControlValueAccessor {
  @Input()
  public options: { name: string; value: string }[] = [];

  @Input()
  public disabled: boolean = false;

  private selectedOption: { name: string; value: string } | undefined = undefined;

  private readonly control = new FormControl();

  public get name(): string | undefined {
    return this.selectedOption?.name;
  }

  public get value(): string | undefined {
    return this.selectedOption?.value;
  }

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.control.valueChanges.subscribe((value: unknown | null) => {
      this.onChange(value);
      this.onTouched();
    });
  }

  public registerOnChange(fn: (value: unknown | null) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(value: unknown | null): void {
    this.control.setValue(value);
    const option = this.options.find((it) => it.name === value);
    this.selectedOption = option;
    this.changeDetectorRef.markForCheck();
  }

  public edit(): void {
    if (this.disabled) {
      return;
    }
    this.control.patchValue('');
    this.changeDetectorRef.markForCheck();
  }

  public setValue(option: { name: string; value: string }): void {
    if (this.disabled) {
      return;
    }
    this.writeValue(option.name);
    this.selectedOption = option;
  }

  private onChange = (value: unknown | null): void => {
  };
  private onTouched = (): void => {
  };
}
