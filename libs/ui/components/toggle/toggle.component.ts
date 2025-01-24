import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  Renderer2 as Renderer,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export type ToggleSize = 'sm' | 'md' | 'lg' | 'xlg';

@Component({
  selector: 'krui-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KruiToggleComponent),
      multi: true,
    },
  ],
  standalone: false,
})
export class KruiToggleComponent implements AfterViewInit {
  @Input()
  public id!: string;

  @Input()
  public size: string = 'md';

  @Input()
  public iconOn!: string;

  @Input()
  public iconOff!: string;

  @Input()
  public disabled: boolean = false;

  public model!: boolean;

  private onChange!: (value: boolean) => void;
  private onTouched!: () => void;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
  }

  public ngAfterViewInit(): void {
    this.renderer.removeAttribute(this.elementRef.nativeElement, 'id');
  }

  public writeValue(value: boolean): void {
    this.model = !!value;
    this.changeDetector.markForCheck();
  }

  public registerOnChange(onChange: (value: boolean) => void) {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  public onModelChange(value: boolean): void {
    if (this.onChange) {
      this.onChange(value);
    }
    this.model = value;
  }
}
