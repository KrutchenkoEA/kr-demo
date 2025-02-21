import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Optional,
  Output,
  QueryList,
  Self,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { delay, filter, map } from 'rxjs/operators';
import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { ConnectedPosition, Overlay } from '@angular/cdk/overlay';
import { FocusMonitor } from '@angular/cdk/a11y';

import { KruiOptionComponent } from './option/option.component';
import { SELECT_LABELS_MAP } from './consts';
import { SelectComponentState } from './interfaces';
import { KruiFormFieldComponent, KruiFormFieldControl, KruiFormFieldControlBase } from '@kr-platform/ui';

const isNil = <T>(value: T) => value === null || value === undefined;

@Component({
  selector: 'krui-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: KruiFormFieldControl,
      useExisting: KruiSelectComponent,
    },
  ],
  standalone: false,
})
export class KruiSelectComponent<T = any> extends KruiFormFieldControlBase<T> {
  @Input()
  multiple: boolean = false;

  @Input()
  override disabled: boolean = false;

  @Input()
  override placeholder: string = '';

  @Input()
  floatPlaceholder: boolean = false;

  @Input()
  viewValueDelimeter: string = '; ';

  @Input()
  closeOnSelect: boolean = true;

  @Input()
  closeOnClickOutside: boolean = true;

  @Input()
  clearTag: boolean = true;

  @Input()
  dropdownMinLength: number = 0;

  @Input()
  dropdownMaxLength: number = 12;

  @Input()
  searchEnabled: boolean = false;

  @Input('emptySearchMessage') set setEmptySearchMessage(v: string | null | undefined) {
    if (!!v && v.length) {
      this.emptySearchMessage = v;
    } else {
      this.emptySearchMessage = null;
    }
  }

  @Input()
  size: 'sm' | 'md' | 'lg' | 'xlg' = 'md';

  @Input()
  togglerEnabled: boolean = false;

  @Input()
  hasBackdrop: boolean = true;

  @Input()
  backdropClass = 'cdk-overlay-transparent-backdrop';

  @Input()
  language: string = 'ru';

  @Input()
  useIcon = false;

  @Input()
  customPositions: ConnectedPosition[] | null = null;

  @Input()
  useViewvalueIcon = '';

  @Input()
  isLoading = false;

  @Input()
  dropdownMinWidthWithIcon?: number;

  @Output() onOpened = new EventEmitter<void>();

  @Output() onClosed = new EventEmitter<void>();

  @Output() onScrollEnd = new EventEmitter<SelectComponentState>();

  @Output() onSearchQueryChanged = new EventEmitter<string | null>();

  isOpen = false;

  readonly ITEM_SIZE = 33;
  readonly POSITIONS: ConnectedPosition[] = [
    {
      panelClass: 'krui-dropdown--bottom',
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    },
    {
      panelClass: 'krui-dropdown--top',
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
    },
  ];

  public readonly SELECT_LABELS = SELECT_LABELS_MAP;
  public emptySearchMessage: string | null | undefined;

  viewValue: string = '';
  searchQuery: string = '';
  // @ts-ignore
  scrollStrategy = this.overlay?.scrollStrategies?.close();
  selectionModel: SelectionModel<KruiOptionComponent<T>> = new SelectionModel(
    this.multiple,
  );

  get isSearchEmpty() {
    return (
      this.searchEnabled &&
      this.searchQuery &&
      this.options.toArray().every((option) => !option.visible)
    );
  }

  get allSelected() {
    return this.selectionModel.selected.length === this.options.length;
  }

  get indeterminateSelected() {
    return (
      this.selectionModel.selected.length !== 0 &&
      this.selectionModel.selected.length !== this.options.length
    );
  }

  override get focused(): boolean {
    return super.focused || this.isOpen;
  }

  @ContentChildren(KruiOptionComponent)
  options!: QueryList<KruiOptionComponent>;

  // @ts-ignore
  @ViewChild('button', { static: false }) readonly focusElement!: ElementRef<HTMLElement>;

  @ViewChild('input', { static: false })
  private inputElement!: ElementRef<HTMLElement>;

  @ViewChild('list', { static: false })
  private listElement!: ElementRef<HTMLElement>;

  private cursor: number = 0;

  @HostListener('window:resize')
  private onDocumentReisze() {
    this.onClose();
  }

  // TODO нужно заменить наследование на SelectValueAccessor
  @HostListener('ngModelChange', ['$event'])
  ngModelChange(value: T | null) {
    this.writeValue(value);
  }

  constructor(
    @Optional() @Self() override readonly ngControl: NgControl | null,
    override readonly focusMonitor: FocusMonitor,
    @Optional() readonly formField: KruiFormFieldComponent,
    private readonly overlay: Overlay,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
    super('krui-select', ngControl, focusMonitor);
  }

  override ngOnInit() {
    if (this.useIcon) {
      this.setIconSize();
    }

    this.selectionModel = new SelectionModel(this.multiple);
    super.ngOnInit();

    this.selectionModel.changed
      .pipe(delay(1))
      .subscribe((e) => this.onSelectionModelChange(e));

    this.onClosed.pipe(delay(1)).subscribe(() => {
      this.onSearch('');
      this.resetCursor();
    });

    this.onOpened
      .pipe(
        delay(1),
        map(() => this.listElement?.nativeElement),
        filter((element) => !!element),
      )
      .subscribe((dropdown) => {
        this.scrollToSelected(dropdown);
      });
  }

  ngAfterContentInit() {
    this.writeValue(this.value);
  }

  override writeValue(value: T | null): void {
    super.writeValue(value);

    this.selectionModel.clear();
    new Array<T | null>()
      .concat(value)
      .map((value) => this.getOptionByValue(value))
      .filter((option) => option !== null)
      .forEach((value) =>
        this.selectionModel.select(value as KruiOptionComponent<T>),
      );
  }

  onOptionSelect(option: KruiOptionComponent, event: Event) {
    if (this.multiple) {
      this.selectionModel.toggle(option);
    } else {
      this.selectionModel.select(option);
      if (this.closeOnSelect) {
        this.isOpen = false;
      }
    }
    this.emitSelection();
  }

  onKeydown(e: KeyboardEvent) {
    if (e.keyCode === DOWN_ARROW) {
      this.cursor = (this.cursor + 1) % this.options.length;
      this.updateCursor();
    } else if (e.keyCode === UP_ARROW) {
      this.cursor =
        (this.cursor - 1 + this.options.length) % this.options.length;
      this.updateCursor();
    } else if (e.keyCode === ENTER) {
      const option = this.options?.get(this.cursor);
      if (option) {
        this.onOptionSelect(option, e);
      }
    }
  }

  onOutsideClick(e: MouseEvent) {
    const path = e.composedPath();
    if (path.includes(this.inputElement.nativeElement)) {
      return;
    }

    if (this.closeOnClickOutside) {
      this.isOpen = false;
    }
  }

  onOpen() {
    this.onOpened.emit();
    this.focusMonitor.focusVia(this.focusElement, 'program');
  }

  onClose() {
    this.onClosed.next();
    this.isOpen = false;
    this.stateChanges.next();
    if (this.searchQuery) {
      this.onSearchQueryChanged.emit(null);
    }
  }

  onDropdownToggle() {
    this.isOpen = !this.isOpen && !this.disabled;
  }

  onClearSelection(e: MouseEvent) {
    this.selectionModel.clear();
    e.stopPropagation();
    this.emitSelection();
  }

  onSearch(query: string | unknown) {
    this.searchQuery = query as string;
    const pattern = new RegExp(
      (query as string).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
      'i',
    );

    this.options.forEach(
      (option) =>
        (option.visible = query ? pattern.test(option.viewValue) : true),
    );

    if (this.isOpen) {
      this.onSearchQueryChanged.emit(query as string);
    }
  }

  onScroll(event: any): void {
    if (Math.abs(event.target.scrollHeight - event.target.scrollTop - event.target.clientHeight) <= 1) {
      this.onScrollEnd.emit({ hasSearchQuery: !!this.searchQuery });
    }
  }

  toggleAll() {
    if (this.allSelected) {
      this.options.forEach((option) => this.selectionModel.deselect(option));
    } else {
      this.options
        .filter((option) => !this.selectionModel.isSelected(option))
        .forEach((option) => this.selectionModel.select(option));
    }

    this.emitSelection();
  }

  private getOptionByValue(value: T | null): KruiOptionComponent | null {
    return this.options?.find((option) => option.value === value) ?? null;
  }

  private resetCursor() {
    this.cursor = -1;
    this.updateCursor();
  }

  private updateCursor() {
    this.options.forEach(
      (option, index) => (option.isFocused = this.cursor === index),
    );
    this.changeDetector.markForCheck();
  }

  private emitSelection() {
    if (this.onChange) {
      this.onChange(
        this.multiple
          ? (this.selectionModel.selected.map(
            (option) => option.value,
          ) as unknown as T)
          : this.selectionModel.selected?.[0].value ?? null,
      );
    }
  }

  private onSelectionModelChange(
    selectionChange: SelectionChange<KruiOptionComponent<T>>,
  ) {
    selectionChange.removed.forEach((option) => (option.isSelected = false));
    selectionChange.added.forEach((option) => (option.isSelected = true));

    this.viewValue = Array.from(this.selectionModel.selected)
      .filter((option) => !isNil(option.value))
      .map((option) => option.viewValue)
      .join(this.viewValueDelimeter);

    this.changeDetector.markForCheck();
  }

  private scrollToSelected(dropdown: HTMLElement) {
    dropdown.scrollTop =
      this.ITEM_SIZE *
      this.options.toArray().findIndex((option) => option.isSelected);
  }

  private setIconSize(): void {
    this.formField.elementRef.nativeElement.style.minWidth = '36px';
    this.formField.elementRef.nativeElement.style.width = '36px';
    this.formField.elementRef.nativeElement.style.height = '36px';
    (this.formField.elementRef.nativeElement.lastElementChild as HTMLElement).style.height = '100%';
    (this.formField.elementRef.nativeElement.lastElementChild as HTMLElement).style.padding = '0';
  }
}
