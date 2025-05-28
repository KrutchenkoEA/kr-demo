import { ApplicationConfig } from '@angular/core';
import { Routes } from '@angular/router';
import { getDefaultKrAppConfig } from 'projects/kit-demo/src/app/kit/app-default.config';
import { EXAMPLE_ROUTES } from 'projects/kit-demo/src/app/kit/example/constants/example-routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'kr-demo/main',
    pathMatch: 'full',
  },
  {
    path: 'kr-demo/main',
    loadComponent: () => import('./pages/main/main.component').then((m) => m.MainComponent),
  },
  {
    path: 'kr-demo/rezume',
    loadComponent: () => import('./pages/rezume/rezume.component').then((m) => m.RezumeComponent),
  },
  {
    path: 'kr-demo/mnemo',
    loadComponent: () => import('./pages/mnemo/mnemo.component').then((m) => m.MnemoComponent),
  },
  {
    path: 'kr-demo/dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'kr-demo/kit',
    loadComponent: () => import('../../../kit-demo/src/app/app.component').then((m) => m.KitDemoComponent),
    children: EXAMPLE_ROUTES,
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];

export const appConfig: ApplicationConfig = getDefaultKrAppConfig(routes);
