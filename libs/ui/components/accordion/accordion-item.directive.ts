import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kruiAccordionItem]',
  standalone: false,
})
export class KruiAccordionItemDirective {
  @Input()
  public kruiAccordionItem: string = '';

  @Input()
  public kruiAccordionItemId: string = '';

  @Input()
  public kruiAccordionItemDisabled: boolean = false;

  @Input()
  public kruiAccordionItemExpanded: boolean = false;

  @Input()
  public kruiAccordionItemRightIcon: string = '';

  public kruiAccordionItemRightIconText: string = '';

  @Input()
  public kruiAccordionItemHeaderClass: string = '';

  @Input()
  public kruiAccordionItemBodyClass: string = '';

  @Input()
  public kruiAccordionTemplateRef: TemplateRef<unknown> | null = null;

  @Input()
  public kruiAccordionTemplateRefContext: { [key: string]: any } | null = null;

  public constructor(public readonly templateRef: TemplateRef<unknown>) {
  }

  @Input('kruiAccordionItemRightIconText')
  set _kruiAccordionItemRightIconText(value: string | number) {
    this.kruiAccordionItemRightIconText = value?.toString();
  }
}
