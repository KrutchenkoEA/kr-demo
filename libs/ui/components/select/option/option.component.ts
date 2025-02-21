import {
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { KruiSelectComponent } from '../select.component';

@Component({
  selector: 'krui-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  standalone: false,
})
export class KruiOptionComponent<T = any> {
  @Input()
  value!: T;

  @Input()
  set viewValue(viewValue: string) {
    this._viewValue = viewValue;
  }

  get viewValue(): string {
    return this._viewValue || this.content.nativeElement.innerText?.trim();
  }

  @Input()
  public visible: boolean = true;

  @Input()
  public disabled: boolean = false;

  @ViewChild('content', { static: false }) content!: ElementRef<HTMLElement>;

  public isSelected: boolean = false;
  public isFocused: boolean = false;

  @HostBinding('class.hidden')
  private get hidden() {
    return !this.visible;
  }

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent) {
    if (!this.disabled) {
      this.select.onOptionSelect(this, $event);
    }
  }

  private _viewValue!: string;

  public constructor(
    @Inject(forwardRef(() => KruiSelectComponent))
    public readonly select: KruiSelectComponent,
    public readonly viewContainerRef: ViewContainerRef,
  ) {
  }
}
