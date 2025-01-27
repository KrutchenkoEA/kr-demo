import { bootstrapApplication } from '@angular/platform-browser';
import { KrAppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule, {
//     ngZoneEventCoalescing: true,
//   })
//   .catch((err) => console.error(err));

bootstrapApplication(KrAppComponent, appConfig).catch((err) => console.error(err));
