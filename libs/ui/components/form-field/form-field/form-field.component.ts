import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { delay } from 'rxjs/operators';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

import { KruiLabelComponent } from '../label/label.component';
import { KruiHintComponent } from '../hint/hint.component';
import { KruiErrorComponent } from '../error/error.component';
import { KruiFormFieldControl } from '../form-field';
import { FADE_IN } from '@kr-platform/ui';

export type KruiFormFieldColor =
  | 'default'
  | 'warning'
  | 'error'
  | 'success'
  | 'info';

@Component({
  selector: 'krui-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [FADE_IN],
  standalone: false,
})
export class KruiFormFieldComponent implements AfterContentInit {
  @Input()
  color: KruiFormFieldColor = 'default';

  @ContentChild(KruiLabelComponent)
  readonly label!: KruiLabelComponent;

  @ContentChild(KruiHintComponent)
  readonly hint!: KruiHintComponent;

  @ContentChild(KruiFormFieldControl)
  readonly control!: KruiFormFieldControl;

  @ContentChild(KruiErrorComponent)
  readonly error!: KruiErrorComponent;

  get isButton(): boolean {
    return this.control?.isButton;
  }

  get id(): string {
    return this.control?.id;
  }

  get disabled(): boolean {
    return this.control?.disabled;
  }

  get hasError(): boolean {
    return this.control?.hasError;
  }

  get focused(): boolean {
    return this.control?.focused;
  }

  get controlType(): string {
    return this.control?.controlType;
  }

  @ViewChild(CdkOverlayOrigin)
  readonly overlayOrigin!: CdkOverlayOrigin;

  constructor(
    public readonly elementRef: ElementRef<HTMLElement>,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
  }

  ngAfterContentInit(): void {
    if (this.control) {
      this.control.stateChanges
        .pipe(delay(1))
        .subscribe(() => this.changeDetector.markForCheck());
    }
  }
}
