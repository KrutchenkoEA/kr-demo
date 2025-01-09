import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartsComponent } from './pages/charts/bar/bar-charts.component';


const routes: Routes = [
  {
    path: 'bar-charts',
    component: BarChartsComponent,
  },
  { path: '**', redirectTo: 'bar-charts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
