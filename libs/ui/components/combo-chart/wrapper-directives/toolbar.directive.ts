import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Host, Inject, Input, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { Subject } from 'rxjs';
import { KruiChartPrintComponent } from '../components/chart-print/chart-print.component';
import { KRUI_CHART_POPUP_SERVICE, KRUI_CHART_TOOLBAR_TOKEN, KRUI_CHART_WRAP_TOKEN } from '../injection-tokens';
import {
  KruiChartToolbarInputs,
  KruiChartToolbarJustifyContent,
  KruiChartToolbarModel,
  KruiChartZoomType,
} from '../models';
import { KruiChartPopupService } from '../services';
import { KruiChartWrapperDirective } from './wrapper.directive';
import { getKruiToolbarDefaultInputs } from '../constants';

@Directive({
  selector: 'krui-chart', providers: [
    {
      provide: KRUI_CHART_TOOLBAR_TOKEN, useExisting: KruiChartToolbarDirective,
    }, {
      provide: KruiChartToolbarModel, useExisting: KruiChartToolbarDirective,
    },
  ],
  standalone: false,
})
export class KruiChartToolbarDirective implements OnInit, KruiChartToolbarModel, KruiChartToolbarInputs {
  @Input() public toolbar: boolean = true;
  @Input() public toolbarPosition: 'top' | 'bottom' = 'top';
  @Input() public toolbarJustifyContent: KruiChartToolbarJustifyContent = 'flex-end';
  @Input() public useDefaultCheck: boolean = true;

  public zoomK: number = 1;
  public readonly zoomArr: number[] = [0.5, 1, 2, 4, 8, 16, 32];
  public zoom$: Subject<number> = new Subject<number>();

  public zoomType!: KruiChartZoomType;
  public zoomTypeDefault!: KruiChartZoomType;
  public zoomType$: Subject<KruiChartZoomType> = new Subject<KruiChartZoomType>();

  constructor(
    @Inject(KRUI_CHART_POPUP_SERVICE) private readonly popupService: KruiChartPopupService,
    @Inject(KRUI_CHART_WRAP_TOKEN) @Host() public wrap: KruiChartWrapperDirective,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly elementRef: ElementRef,
  ) {
  }

  public ngOnInit(): void {
    if (this.useDefaultCheck) {
      Object.entries(getKruiToolbarDefaultInputs())?.forEach(([key, value]) => {
        // @ts-ignore
        if (this[key] === null || this[key] === undefined) {
          // @ts-ignore
          this[key] = value;
        }
      });
    }
  }

  public toolbarZoomIn(): void {
    this.zoomK = this.findNearest(this.zoomK) * 2;
    if (this.zoomK > 32) {
      this.zoomK = 0.5;
    }
    this.zoom$.next(this.zoomK);
  }

  public toolbarZoomOut(): void {
    this.zoomK = this.findNearest(this.zoomK) / 2;
    if (this.zoomK < 0.5) {
      this.zoomK = 32;
    }
    this.zoom$.next(this.zoomK);
  }

  public toggleZoomType(type: 'scroll' | 'brush'): void {
    if (type !== this.zoomType) {
      this.zoomType = type;
    } else {
      this.zoomType = 'none';
    }
    this.zoomType$.next(this.zoomType);
  }

  public toolbarRefresh(): void {
    this.zoomK = 1;
    this.zoomType = this.zoomTypeDefault;
    this.zoomType$.next(this.zoomType);
  }

  public print(): void {
    const ref = this.popupService.open(
      KruiChartPrintComponent,
      {
        html: this.elementRef.nativeElement.innerHTML,
      },
      {
        width: this.document.defaultView!.innerWidth,
        height: this.document.defaultView!.innerHeight,
        positions: [
          {
            originX: 'center',
            originY: 'center',
            overlayX: 'center',
            overlayY: 'center',
          },
        ],
        hasBackdrop: true,
        panelClass: 'krui-chart-print-background',
      },
    );

    ref.popupRef.afterClosed().subscribe();
    window.print();
    ref.popupRef.close(ref);
  }

  public async savePng(): Promise<void> {
    let bgColor: string = '#e0e4eb';
    if (this.document.querySelector('body')?.className.includes('theme-dark')) {
      bgColor = '#29303d';
    }
    const canvas = await html2canvas(this.elementRef.nativeElement, {
      foreignObjectRendering: false,
      backgroundColor: bgColor,
      scale: 4,
    });

    const fileName = `График-${new Date().toLocaleString('ru')}.png`;
    const dataUrl = canvas.toDataURL('image/jpeg', 1);
    const file = this.dataURLtoFile(dataUrl, fileName);
    saveAs(file, fileName);
  }

  private dataURLtoFile = (dataUrl: string, filename: string): File => {
    const arr = dataUrl.split(',');
    // @ts-ignore
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };

  private findNearest(number: number): number {
    return this.zoomArr.reduce((
      closest: number,
      n: number,
    ) => Math.abs(n - number) > Math.abs(closest - number) ? closest : n, 0);
  }
}
