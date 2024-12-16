import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PlatformFooterComponent } from './components/platform-footer/platform-footer.component';
import { PlatformMainComponent } from './components/platform-main/platform-main.component';
import { PlatformHeaderComponent } from './components/platform-header/platform-header.component';
import { PlatformSidebarComponent } from './components/platform-sidebar/platform-sidebar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, AppRoutingModule, PlatformHeaderComponent, PlatformFooterComponent, PlatformMainComponent,
    PlatformSidebarComponent,
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
