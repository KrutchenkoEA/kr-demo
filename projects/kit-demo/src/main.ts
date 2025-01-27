import { bootstrapApplication } from '@angular/platform-browser';
import { KitDemoComponent } from './app/app.component';
import { getDefaultKrAppConfig, KrKitRoutes } from '@kr-platform/kit';

bootstrapApplication(KitDemoComponent, getDefaultKrAppConfig(KrKitRoutes))
  .catch((err) => console.error(err));
