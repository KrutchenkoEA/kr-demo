import { Routes } from '@angular/router';
import { BarChartsComponent } from './pages/charts/bar/bar-charts.component';

export const routes: Routes = [
  {
    path: 'bar-charts',
    component: BarChartsComponent
  },
  { path: '**', redirectTo: 'bar-charts' },
];
