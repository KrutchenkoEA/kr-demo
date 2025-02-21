import { ApplicationConfig } from '@angular/core';
import { EXAMPLE_ROUTES, getDefaultKrAppConfig } from '@kr-platform/kit/src';
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
    children: EXAMPLE_ROUTES,
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];

export const appConfig: ApplicationConfig = getDefaultKrAppConfig(routes);
