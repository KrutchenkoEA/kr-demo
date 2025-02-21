import { Subject } from 'rxjs';
import { NgControl } from '@angular/forms';

export abstract class KruiFormFieldControl {
  abstract readonly id: string;
  abstract readonly controlType: string;
  abstract readonly disabled: boolean;
  abstract readonly hasError: boolean;
  abstract readonly focused: boolean;
  abstract readonly ngControl: NgControl | null;
  abstract readonly stateChanges: Subject<void>;
  abstract readonly isButton: boolean;
  abstract readonly placeholder: string;
}
