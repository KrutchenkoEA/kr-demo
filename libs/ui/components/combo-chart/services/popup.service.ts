import { ESCAPE } from '@angular/cdk/keycodes';
import {
  ComponentType,
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  GlobalPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ElementRef, Injectable, InjectionToken, Injector } from '@angular/core';
import { fromEvent, merge, Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

export interface KruiChartPopupConfiguration {
  origin?: ElementRef<HTMLElement>;
  width?: number;
  height?: number;
  positions?: ConnectedPosition[];
  hasBackdrop?: boolean;
  panelClass?: string;
}

export const KRUI_CHART_POPUP_DIALOG_DATA = new InjectionToken<string>('KRUI_CHART_POPUP_DIALOG_DATA');

export class KruiChartPopupReference<T> {
  private readonly closeBroadcast$ = new Subject<T | unknown>();

  constructor(private readonly overlayRef: OverlayRef) {
  }

  public close<V>(result: V | unknown): void {
    this.overlayRef.dispose();
    this.closeBroadcast$.next(result);
  }

  public afterClosed(): Observable<T | unknown> {
    return this.closeBroadcast$.asObservable();
  }

}

@Injectable()
export class KruiChartPopupService {

  constructor(
    private readonly overlay: Overlay,
    private readonly injector: Injector,
  ) {
  }

  public open<T, V = unknown>(
    component: ComponentType<T>,
    data: unknown,
    config: KruiChartPopupConfiguration = {},
  ): { popupRef: KruiChartPopupReference<V>; overlayRef: OverlayRef } {
    const overlayRef = this.createOverlay(config);
    const popupRef = new KruiChartPopupReference<V>(overlayRef);

    this.attachDialogContainer(overlayRef, component, data, popupRef);

    merge(
      fromEvent(document, 'keydown').pipe(
        // @ts-ignore
        takeUntil(popupRef.afterClosed()),
        filter((event: KeyboardEvent) => event.keyCode === ESCAPE),
      ),
      overlayRef.backdropClick(),
    ).subscribe(() => popupRef.close(null));

    return { popupRef, overlayRef };
  }

  private createOverlay(config: KruiChartPopupConfiguration): OverlayRef {
    const overlayConfig = this.getOverlayConfig(config);

    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer<T, V>(
    overlayRef: OverlayRef,
    component: ComponentType<T>,
    data: unknown,
    popupRef: KruiChartPopupReference<V>,
  ): T {
    const injector = Injector.create({
      providers: [
        { provide: KruiChartPopupReference, useValue: popupRef },
        { provide: KRUI_CHART_POPUP_DIALOG_DATA, useValue: data },
      ],
      parent: this.injector,
    });
    const containerPortal = new ComponentPortal(component, null, injector);

    return overlayRef.attach(containerPortal).instance;
  }

  private getOverlayConfig({
    width,
    height,

    panelClass,
  }: KruiChartPopupConfiguration): OverlayConfig {
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    let positionStrategy: GlobalPositionStrategy | FlexibleConnectedPositionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    return new OverlayConfig({
      panelClass: panelClass ?? ['krui-chart-print-background'],
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      height: height ?? 'auto',
      width: width ?? 'auto',
      scrollStrategy,
      positionStrategy,
    });
  }
}
