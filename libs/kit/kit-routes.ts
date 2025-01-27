import { Routes } from '@angular/router';
import { BarChartsComponent } from '@kr-platform/kit/pages/charts/bar/bar-charts.component';
import { TabsComponent } from '@kr-platform/kit/pages/tabs/tabs.component';
import { ToggleComponent } from '@kr-platform/kit/pages/toggle/toggle.component';
import { TypographyComponent } from '@kr-platform/kit/pages/typography/typography.component';

export const KrKitRoutes: Routes = [
  {
    path: 'bar-charts',
    component: BarChartsComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'toggle',
    component: ToggleComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  { path: '**', redirectTo: 'bar-charts' },
];
