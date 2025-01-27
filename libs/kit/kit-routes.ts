import { Routes } from '@angular/router';
import { TabsComponent } from '@kr-platform/kit/pages/tabs/tabs.component';
import { ToggleComponent } from '@kr-platform/kit/pages/toggle/toggle.component';
import { TypographyComponent } from '@kr-platform/kit/pages/typography/typography.component';
import { BarChartsComponent } from '@kr-platform/kit/pages/bars/bar-charts.component';

export const KrKitRoutes: Routes = [
  {
    path: 'bars',
    component: BarChartsComponent,
  },
  {
    path: 'tabs',
    component: TabsComponent,
  },
  {
    path: 'toggle',
    component: ToggleComponent,
  },
  {
    path: 'typography',
    component: TypographyComponent,
  },
  { path: '**', redirectTo: 'typography' },
];
