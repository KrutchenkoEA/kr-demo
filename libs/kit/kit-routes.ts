import { Routes } from '@angular/router';
import { BarChartsComponent } from '@kr-platform/kit/pages/charts/bar/bar-charts.component';
import { TabsComponent } from '@kr-platform/kit/pages/tabs/tabs.component';
import { ToggleComponent } from '@kr-platform/kit/pages/toggle/toggle.component';

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
  { path: '**', redirectTo: 'bar-charts' },
];
