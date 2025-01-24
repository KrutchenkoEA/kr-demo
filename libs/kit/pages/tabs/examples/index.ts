import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsSimpleExample } from './tabs-simple-example/tabs-simple-example';
import { KruiTabsModule } from '@kr-platform/ui';

export {
  TabsSimpleExample,
};

@NgModule({
  declarations: [
    TabsSimpleExample,
  ],
  imports: [
    CommonModule,
    KruiTabsModule,
  ],
})
export class TabsExampleModule {
}
