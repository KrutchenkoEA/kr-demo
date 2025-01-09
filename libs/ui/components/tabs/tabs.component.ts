import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList
} from '@angular/core';

import { TluiTabComponent } from './tab/tab.component';
import { FADE_IN } from '@kr-platform/ui/animations';

export type TluiTabsPosition = 'top' | 'right' | 'bottom' | 'left';
export type TluiTabsAlignment = 'start' | 'center' | 'end' | 'stretch';
export type TluiTabsSize = 'sm' | 'md' | 'lg' | 'xlg';

@Component({
  selector: 'tlui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [FADE_IN],
  standalone: false
})
export class TluiTabsComponent {
  @Input()
  lazyLoading: boolean = false;

  @Input()
  isNeedDestroy: boolean = true;

  @Input()
  position: TluiTabsPosition = 'top';

  @Input()
  alignment: TluiTabsAlignment = 'start';

  @Input()
  size: TluiTabsSize = 'md';

  @Input()
  isMenu: boolean = false;

  @Input()
  selectedIndex: number = 0;

  @Output()
  selectedIndexChange = new EventEmitter<number>();

  @ContentChildren(TluiTabComponent)
  readonly tabs!: QueryList<TluiTabComponent>;

  public _language: string | null = null;

  @Input() set language(v: string) {
    if (!v) return;
    this._language = v;
  }

  public onTabSelect(index: number): void {
    if (!this.tabs.get(index)?.disabled) {
      this.selectedIndex = index;
      this.selectedIndexChange.emit(this.selectedIndex);
    }
  }
}
