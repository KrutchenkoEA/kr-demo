import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { exampleRoutes } from '@kr-platform/kit/example-routes';


const routes: Routes = exampleRoutes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {
}
