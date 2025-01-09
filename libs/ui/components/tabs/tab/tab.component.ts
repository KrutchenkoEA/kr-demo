import {
  ChangeDetectorRef, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import { TluiTabLabelDirective } from '../tab-label.directive';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: '[tluiTabLazyContent]',
  standalone: false
})
export class TluiTabLazyContent {
  constructor(public template: TemplateRef<any>) {
  }
}


@Component({
  selector: 'tlui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  standalone: false
})
export class TluiTabComponent {
  @Input() label!: string;

  @Input() title!: string;

  @Input() disabled: boolean = false;

  @Input() tabClass: string = '';

  @ContentChild(TluiTabLabelDirective, { read: TemplateRef }) readonly labelTemplateRef!: TemplateRef<any>;

  @ContentChild(TluiTabLazyContent, { read: TemplateRef, static: true }) _explicitContent!: TemplateRef<any>;

  @ViewChild(TemplateRef, { static: true }) _implicitContent!: TemplateRef<any>;

  constructor(private _viewContainerRef: ViewContainerRef, private readonly changeDetector: ChangeDetectorRef) {
  }

  private _contentPortal: TemplatePortal | null = null;

  get contentPortal(): TemplatePortal | null {
    return this._contentPortal;
  }

  get contentTemplateRef(): TemplateRef<any> {
    return this._implicitContent;
  }

  public ngOnInit(): void {
    this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }

  public ngAfterContentInit(): void {
    this.changeDetector.detectChanges();
  }
}
