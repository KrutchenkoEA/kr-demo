import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KrKitRoutes } from '@kr-platform/kit/kit-routes';


const routes: Routes = KrKitRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KrKitRoutingModule {
}
