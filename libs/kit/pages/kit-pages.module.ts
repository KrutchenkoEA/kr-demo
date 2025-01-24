import { NgModule } from '@angular/core';
import { BarChartsComponent } from '@kr-platform/kit/pages/charts/bar/bar-charts.component';
import { ExampleHttpInterceptor, ExampleViewerComponent, TableOfContentsComponent } from '@kr-platform/kit';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleRoutingModule } from '@kr-platform/kit/example-routing.module';


@NgModule({
  declarations: [BarChartsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ExampleRoutingModule,
    ExampleViewerComponent,
    TableOfContentsComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExampleHttpInterceptor,
      multi: true,
    },
  ],
})
export class KitPagesModule {
}
