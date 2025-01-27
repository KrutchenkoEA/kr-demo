import { bootstrapApplication } from '@angular/platform-browser';
import { KitDemoComponent } from './app/app.component';
import { EXAMPLE_ROUTES, getDefaultKrAppConfig } from '@kr-platform/kit';

bootstrapApplication(KitDemoComponent, getDefaultKrAppConfig(EXAMPLE_ROUTES))
  .catch((err) => console.error(err));
