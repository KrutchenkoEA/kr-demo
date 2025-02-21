import { bootstrapApplication } from '@angular/platform-browser';
import { KitDemoComponent } from './app/app.component';
import { getDefaultKrAppConfig } from './app/kit/app-default.config';
import { EXAMPLE_ROUTES } from './app/kit/example';

bootstrapApplication(KitDemoComponent, getDefaultKrAppConfig(EXAMPLE_ROUTES))
  .catch((err) => console.error(err));
