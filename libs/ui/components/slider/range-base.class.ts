import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, merge, Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export abstract class RangeBase {
  min!: number;
  max!: number;
  step!: number;

  get startPercent(): number {
    return ((this.startValue - this.min) / (this.max - this.min)) * 100;
  }

  get endPercent(): number {
    return ((this.endValue - this.min) / (this.max - this.min)) * 100;
  }

  startValue: number = this.min;
  endValue: number = this.max;
  active!: HTMLElement | null;
  readonly startControl = new FormControl(this.min, []);
  readonly endControl = new FormControl(this.max, []);
  protected readonly slider!: ElementRef<HTMLElement>;
  protected readonly start!: ElementRef<HTMLElement>;
  protected readonly end!: ElementRef<HTMLElement>;

  protected get handlerWidth(): number {
    return this.end.nativeElement?.getBoundingClientRect().width ?? 0;
  }

  protected get sliderWidth(): number {
    return this.slider.nativeElement?.getBoundingClientRect().width ?? 0;
  }

  protected delta: number = 0;
  protected readonly destroy$ = new Subject<void>();
  protected readonly dragStart$ = new Subject<number>();
  protected readonly drag$ = new Subject<number>();
  protected readonly dragEnd$ = new Subject<number>();
  protected readonly step$ = new Subject<number>();

  constructor(
    protected readonly document: Document,
    protected readonly changeDetector: ChangeDetectorRef,
  ) {
  }

  onInit(): void {
    merge(this.dragStart$, this.drag$, this.dragEnd$)
      .pipe(
        map((clientX) => this.mouseToValue(clientX)),
        map((value) => this.constrain(value)),
        distinctUntilChanged(),
      )
      .subscribe((value) => this.patchValues(value));

    this.step$
      .pipe(
        map((value) => this.constrain(value)),
        distinctUntilChanged(),
      )
      .subscribe((value) => this.patchValues(value));

    this.startControl.valueChanges
      .pipe(
        tap(() => (this.active = this.start?.nativeElement)),
        map((value) => clamp(value as number, this.min, this.endControl.value as number)),
        tap((value) => (this.startValue = value)),
        tap(() => this.changeDetector.markForCheck()),
        distinctUntilChanged(),
      )
      .subscribe(() => this.onModelChange());

    this.endControl.valueChanges
      .pipe(
        tap(() => (this.active = this.end?.nativeElement)),
        map((value) => clamp(value as number, this.startControl.value as number, this.max)),
        tap((value) => (this.endValue = value)),
        tap(() => this.changeDetector.markForCheck()),
        distinctUntilChanged(),
      )
      .subscribe(() => this.onModelChange());
  }

  onControlBlur(control: FormControl) {
    control.patchValue(
      control === this.startControl ? this.startValue : this.endValue,
    );
    this.active = null;
  }

  onBarMouseDown(e: MouseEvent): void {
    fromEvent<MouseEvent>(this.document, 'mousemove')
      .pipe(takeUntil(this.dragEnd$), takeUntil(this.destroy$))
      .subscribe((e) => this.onBarMouseMove(e));

    fromEvent<MouseEvent>(this.document, 'mouseup')
      .pipe(takeUntil(this.dragEnd$), takeUntil(this.destroy$))
      .subscribe((e) => this.onBarMouseUp(e));

    if (this.start && this.end) {
      const value = this.mouseToValue(e.clientX) as number;
      const start = this.startControl.value as number;
      const end = this.endControl.value as number;
      if (Math.abs(value - start) > Math.abs(value - end)) {
        this.active = this.end.nativeElement;
      } else {
        this.active = this.start.nativeElement;
      }
    } else {
      this.active = this.end.nativeElement;
    }

    this.delta = -this.handlerWidth * 0.5;
    this.dragStart$.next(e.clientX);
  }

  onHandleMouseDown(e: MouseEvent, element: HTMLElement): void {
    fromEvent<MouseEvent>(this.document, 'mousemove')
      .pipe(takeUntil(this.dragEnd$), takeUntil(this.destroy$))
      .subscribe((e) => this.onHandleMouseMove(e));

    fromEvent<MouseEvent>(this.document, 'mouseup')
      .pipe(takeUntil(this.dragEnd$), takeUntil(this.destroy$))
      .subscribe((e) => this.onHandleMouseUp(e));

    this.active = element;
    this.delta = element.getBoundingClientRect().x - e.clientX;
    this.dragStart$.next(e.clientX);
    e.stopPropagation();
  }

  onHandleKeyDown(e: KeyboardEvent, element: HTMLElement): void {
    this.active = element;
    const step = this.step ? this.step : (this.max - this.min) * 0.1;
    const start = this.startControl.value as number;
    const end = this.endControl.value as number;

    if (e.keyCode === LEFT_ARROW) {
      if (element === this.end.nativeElement) {
        this.step$.next(end - step);
      } else {
        this.step$.next(start - step);
      }
    } else if (e.keyCode === RIGHT_ARROW) {
      if (element === this.end.nativeElement) {
        this.step$.next(end + step);
      } else {
        this.step$.next(start + step);
      }
    }
  }

  onDecrease(control: FormControl): void {
    this.active =
      control === this.startControl
        ? this.start.nativeElement
        : this.end.nativeElement;
    const step = this.step ? this.step : (this.max - this.min) * 0.1;
    this.step$.next(control.value - step);
  }

  onIncrease(control: FormControl): void {
    this.active =
      control === this.startControl
        ? this.start.nativeElement
        : this.end.nativeElement;
    const step = this.step ? this.step : (this.max - this.min) * 0.1;
    this.step$.next(control.value + step);
  }

  onDestroy() {
    this.destroy$.next();
  }

  protected onHandleMouseMove(e: MouseEvent): void {
    this.drag$.next(e.clientX);
  }

  protected onHandleMouseUp(e: MouseEvent): void {
    this.dragEnd$.next(e.clientX);
    this.active = null;
  }

  protected onBarMouseMove(e: MouseEvent): void {
    this.drag$.next(e.clientX);
  }

  protected onBarMouseUp(e: MouseEvent): void {
    this.dragEnd$.next(e.clientX);
    this.active = null;
  }

  protected constrain(value: number): number {
    if (this.step) {
      value = Math.round(value / this.step) * this.step;
    }
    const start: number = this.startControl.value as number;
    const end: number = this.endControl.value as number;
    if (this.active === this.end.nativeElement) {
      value = Math.min(this.max, Math.max(start, value));
    } else {
      value = Math.min(end, Math.max(this.min, value));
    }

    return value;
  }

  protected mouseToValue(clientX: number): number {
    const { left } = this.slider.nativeElement.getBoundingClientRect();
    const t =
      (clientX - left + this.delta + this.handlerWidth * 0.5) /
      this.sliderWidth;
    return (this.max - this.min) * t + this.min;
  }

  protected patchValues(value: number): void {
    if (this.active === this.end.nativeElement) {
      this.endControl.setValue(value);
    } else {
      this.startControl.setValue(value);
    }
  }

  protected abstract onModelChange(): void;
}
