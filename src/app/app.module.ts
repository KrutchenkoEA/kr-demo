import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PlatformMainComponent } from './components/platform-main/platform-main.component';
import { PlatformHeaderComponent } from './components/platform-header/platform-header.component';
import { PlatformSidebarComponent } from './components/platform-sidebar/platform-sidebar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideHttpClient } from '@angular/common/http';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
    PlatformHeaderComponent,
    PlatformMainComponent,
    PlatformSidebarComponent,
    MatButton,
    MatIcon,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
