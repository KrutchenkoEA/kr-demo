import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { KruiAccordionItemDirective } from './accordion-item.directive';
import { animate, style, transition, trigger } from '@angular/animations';

const INITIAL_HEADER_PADDING_LEFT = 16;
const TRANSITION_CURVE = 'cubic-bezier(0, 0, .2, 1)';
const DEFAULT_TRANSITION = `180ms ${TRANSITION_CURVE}`;


const SLIDE_INOUT_TOP = trigger('slideInOutTop', [
  transition(':enter', [
    style({ opacity: 0, height: 0 }),
    animate(DEFAULT_TRANSITION, style({ opacity: 1, height: '*' })),
  ]),
  transition(':leave', [
    animate(DEFAULT_TRANSITION, style({ height: 0, opacity: 0 })),
  ]),
]);

@Component({
  selector: 'krui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [SLIDE_INOUT_TOP],
  standalone: false,
})
export class KruiAccordionComponent {
  @Input()
  public multiple: boolean = false;

  @Input()
  public headerPaddingLeft: number = 0;

  @ContentChildren(KruiAccordionItemDirective)
  public items!: QueryList<KruiAccordionItemDirective>;

  @Output() kruiAccordionClickEmitter: EventEmitter<{
    item: string, id: string, expanded: boolean
  }> = new EventEmitter<{
    item: string, id: string, expanded: boolean
  }>();

  public get padding(): number {
    return this.headerPaddingLeft + INITIAL_HEADER_PADDING_LEFT;
  }

  public onClickItem(accordionItem: CdkAccordionItem, item: KruiAccordionItemDirective): void {
    accordionItem.toggle();
    this.kruiAccordionClickEmitter.emit({
      item: item.kruiAccordionItem,
      id: item.kruiAccordionItemId,
      expanded: accordionItem.expanded,
    });
  }
}
