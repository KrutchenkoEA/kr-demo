import { ApplicationConfig } from '@angular/core';
import { getDefaultKrAppConfig, KrKitRoutes } from '@kr-platform/kit';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main.component').then((m) => m.MainComponent),
  },
  {
    path: 'rezume',
    loadComponent: () => import('./pages/rezume/rezume.component').then((m) => m.RezumeComponent),
  },
  {
    path: 'charts',
    loadComponent: () => import('./pages/charts/charts.component').then((m) => m.ChartsComponent),
  },
  {
    path: 'mnemo',
    loadComponent: () => import('./pages/mnemo/mnemo.component').then((m) => m.MnemoComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'kit',
    loadComponent: () => import('../../../kit-demo/src/app/app.component').then((m) => m.KitDemoComponent),
    children: KrKitRoutes,
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];

export const appConfig: ApplicationConfig = getDefaultKrAppConfig(routes);
