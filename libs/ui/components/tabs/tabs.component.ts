import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList
} from '@angular/core';

import { KruiTabComponent } from './tab/tab.component';
import { FADE_IN } from '@kr-platform/ui/animations';

export type KruiTabsPosition = 'top' | 'right' | 'bottom' | 'left';
export type KruiTabsAlignment = 'start' | 'center' | 'end' | 'stretch';
export type KruiTabsSize = 'sm' | 'md' | 'lg' | 'xlg';

@Component({
  selector: 'krui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [FADE_IN],
  standalone: false
})
export class KruiTabsComponent {
  @Input()
  lazyLoading: boolean = false;

  @Input()
  isNeedDestroy: boolean = true;

  @Input()
  position: KruiTabsPosition = 'top';

  @Input()
  alignment: KruiTabsAlignment = 'start';

  @Input()
  size: KruiTabsSize = 'md';

  @Input()
  isMenu: boolean = false;

  @Input()
  selectedIndex: number = 0;

  @Output()
  selectedIndexChange = new EventEmitter<number>();

  @ContentChildren(KruiTabComponent)
  readonly tabs!: QueryList<KruiTabComponent>;

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
