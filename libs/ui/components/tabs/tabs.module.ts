import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TluiTabsComponent } from './tabs.component';
import { TluiTabComponent, TluiTabLazyContent } from './tab/tab.component';
import { TluiTabLabelDirective } from './tab-label.directive';
import { TabLazyBodyDirective } from './tab-lazy-body.directive';

@NgModule({
  declarations: [
    TluiTabsComponent,
    TluiTabComponent,
    TluiTabLabelDirective,
    TluiTabLazyContent,
    TabLazyBodyDirective
  ],
  imports: [CommonModule],
  exports: [TluiTabsComponent, TluiTabComponent, TluiTabLabelDirective, TluiTabLazyContent]
})
export class TluiTabsModule {
}
