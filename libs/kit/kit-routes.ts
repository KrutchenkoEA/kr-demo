import { Routes } from '@angular/router';
import { BarChartsComponent } from '@kr-platform/kit/pages/charts/bar/bar-charts.component';

export const KrKitRoutes: Routes = [
  {
    path: 'bar-charts',
    component: BarChartsComponent
  },
  { path: '**', redirectTo: 'bar-charts' },
];
