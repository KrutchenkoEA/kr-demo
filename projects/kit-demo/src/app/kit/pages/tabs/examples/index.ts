import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsSimpleExample } from './tabs-simple-example/tabs-simple-example';
import { KruiTabsModule } from '@kr-platform/ui';
import { KruiSvgLoader } from '@kr-platform/icons';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';

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
    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useClass: KruiSvgLoader
      }
    })
  ],
})
export class TabsExampleModule {
}
