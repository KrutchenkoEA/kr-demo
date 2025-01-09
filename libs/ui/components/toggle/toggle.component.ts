import {
  Component,
  Input,
  ElementRef,
  Renderer2 as Renderer,
  AfterViewInit,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

export type ToggleSize = 'sm' | 'md' | 'lg' | 'xlg';

@Component({
  selector: 'tlui-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TluiToggleComponent),
      multi: true,
    },
  ],
  standalone: false
})
export class TluiToggleComponent implements AfterViewInit {
  @Input()
  id!: string;

  @Input()
  size: string = 'md';

  @Input()
  iconOn!: string;

  @Input()
  iconOff!: string;

  @Input()
  disabled: boolean = false;

  model!: boolean;

  private onChange!: (value: boolean) => void;
  private onTouched!: () => void;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer,
    private readonly changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.renderer.removeAttribute(this.elementRef.nativeElement, 'id');
  }

  writeValue(value: boolean): void {
    this.model = !!value;
    this.changeDetector.markForCheck();
  }

  registerOnChange(onChange: (value: boolean) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  onModelChange(value: boolean) {
    if (this.onChange) {
      this.onChange(value);
    }
    this.model = value;
  }
}
