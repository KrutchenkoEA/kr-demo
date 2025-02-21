import { bootstrapApplication } from '@angular/platform-browser';
import { KitDemoComponent } from './app/app.component';
import { getDefaultKrAppConfig } from '@kr-platform/kit/src';
import { EXAMPLE_ROUTES } from '@kr-platform/kit';

bootstrapApplication(KitDemoComponent, getDefaultKrAppConfig(EXAMPLE_ROUTES))
  .catch((err) => console.error(err));
