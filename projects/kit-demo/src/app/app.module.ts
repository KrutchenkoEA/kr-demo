import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ExampleModule } from './@shared/example/example.module';
import { KruiMainMenuModule } from '@kr-platform/ui';
import { TableOfContentsModule } from './@shared/table-of-contents/table-of-contents.module';
import { ExampleHttpInterceptor } from './@shared/example/interceptors/example-http.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { BarChartsComponent } from './pages/charts/bar/bar-charts.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    KruiMainMenuModule,
    ExampleModule,
    TableOfContentsModule,
    ScrollingModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExampleHttpInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {
}
