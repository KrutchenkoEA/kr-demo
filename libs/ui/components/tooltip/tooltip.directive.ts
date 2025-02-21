import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';
import { KruiTooltipComponent } from './tooltip-component/tooltip.component';
import { KruiTooltipParameters } from './tooltip.model';


@Directive({
  selector: '[kruiTooltip]',
  standalone: false,
})
export class KruiTooltipDirective implements OnDestroy {
  @Input() public tooltipParameters: KruiTooltipParameters = {
    position: 'top',
    size: 'sm',
    showBorder: false,
    title: '',
    description: '',
    text: '',
    usePopupAnimation: false
  };

  @Input() public tooltipDisabled: boolean = false;

  private overlayRef: OverlayRef | null = null;

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private overlay: Overlay
  ) {
  }

  @HostListener('mouseenter')
  public onMouseOver(): void {
    if (this.tooltipDisabled) return;

    if ((this.tooltipParameters.text && !this.overlayRef) || (this.tooltipParameters.title && !this.overlayRef)) {
      const positionStrategy = this.overlayPositionBuilder
        .flexibleConnectedTo(this.elementRef)
        .withPositions([this.createPosition()]);
      this.overlayRef = this.overlay.create({ positionStrategy });

      const tooltipPortal = new ComponentPortal(KruiTooltipComponent);
      const tooltipRef: ComponentRef<KruiTooltipComponent> =
        this.overlayRef.attach(tooltipPortal);
      tooltipRef.instance.text = this.tooltipParameters.text || '';
      tooltipRef.instance.position = this.tooltipParameters.position;
      if (this.tooltipParameters.title) {
        tooltipRef.instance.titles =
          typeof this.tooltipParameters.title === 'string'
            ? [this.tooltipParameters.title]
            : [...this.tooltipParameters.title];
      }
      tooltipRef.instance.size = this.tooltipParameters.size;
      tooltipRef.instance.description =
        this.tooltipParameters.description || '';
      tooltipRef.instance.showBorder =
        this.tooltipParameters.showBorder || false;
      tooltipRef.instance.usePopupAnimation = this.tooltipParameters.usePopupAnimation || false;
    }
  }

  @HostListener('mouseleave')
  public onMouseOut(): void {
    this.detachOverlay();
  }

  public ngOnDestroy(): void {
    this.detachOverlay();
  }

  private detachOverlay(): void {
    this.overlayRef?.detach();
    this.overlayRef = null;
  }

  private createPosition(): ConnectedPosition {
    if (this.tooltipParameters.position === 'top') {
      return {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      };
    }

    if (this.tooltipParameters.position === 'left') {
      return {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center'
      };
    }

    if (this.tooltipParameters.position === 'bottom') {
      return {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top'
      };
    }
    return {
      originX: 'end',
      originY: 'center',
      overlayX: 'start',
      overlayY: 'center'
    };
  }
}
