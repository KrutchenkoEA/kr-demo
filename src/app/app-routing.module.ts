import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rezume',
    pathMatch: 'full',
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
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
