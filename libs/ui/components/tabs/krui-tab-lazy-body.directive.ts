import {
  ComponentFactoryResolver,
  Directive,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[kruiTabLazyBody]',
  standalone: false
})
export class KruiTabLazyBodyDirective extends CdkPortalOutlet implements OnInit, OnDestroy {
  @Input() isNeedDestroy: boolean = false;
  @Input() isSelected: boolean = false;
  @Input('content') _content!: TemplatePortal | null;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) _document: any
  ) {
    super(componentFactoryResolver, viewContainerRef, _document);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!this.hasAttached() && !!changes?.['isSelected']?.currentValue) {
      this.attach(this._content);
    } else {
      if (this.isNeedDestroy) {
        this.detach();
      }
    }
  }
}
