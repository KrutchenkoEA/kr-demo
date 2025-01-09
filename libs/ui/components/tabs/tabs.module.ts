import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KruiTabsComponent } from './tabs.component';
import { KruiTabComponent, KruiTabLazyContent } from './tab/tab.component';
import { KruiTabLabelDirective } from './tab-label.directive';
import { KruiTabLazyBodyDirective } from './krui-tab-lazy-body.directive';

@NgModule({
  declarations: [
    KruiTabsComponent,
    KruiTabComponent,
    KruiTabLabelDirective,
    KruiTabLazyContent,
    KruiTabLazyBodyDirective
  ],
  imports: [CommonModule],
  exports: [KruiTabsComponent, KruiTabComponent, KruiTabLabelDirective, KruiTabLazyContent]
})
export class KruiTabsModule {
}
