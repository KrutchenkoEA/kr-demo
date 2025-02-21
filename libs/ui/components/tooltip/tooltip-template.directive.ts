import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Directive, HostListener, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { KruiTooltipPosition } from './tooltip.model';

@Directive({
  selector: '[kruiTemplateTooltip]',
  standalone: false,
})
export class KruiTooltipTemplateDirective implements AfterViewInit, OnDestroy {
  @Input() templateRef!: TemplateRef<unknown>;
  @Input() templateRefContext: { [key: string]: any } | null = null;
  @Input() position: KruiTooltipPosition = 'top';
  @Input() margin: number = 0;
  private templatePortal: TemplatePortal<unknown> | null = null;
  private overlayRef: OverlayRef | null = null;

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private viewContainer: ViewContainerRef,
    private overlay: Overlay,
  ) {
  }

  public ngAfterViewInit(): void {
    this.templatePortal = new TemplatePortal(
      this.templateRef,
      this.viewContainer,
      this.templateRefContext,
    );

    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.viewContainer.element)
      .withFlexibleDimensions(true)
      .withPush(true)
      .withViewportMargin(this.margin)
      .withPositions([this.createPosition()]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.overlayRef?.attach(this.templatePortal);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.overlayRef?.detach();
  }

  public ngOnDestroy(): void {
    this.overlayRef?.detach();
  }

  private createPosition(): ConnectedPosition {
    if (this.position === 'top') {
      return {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
      };
    }

    if (this.position === 'left') {
      return {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
      };
    }

    if (this.position === 'bottom') {
      return {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
      };
    }
    return {
      originX: 'end',
      originY: 'center',
      overlayX: 'start',
      overlayY: 'center',
    };
  }
}
