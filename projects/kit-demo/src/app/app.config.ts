import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAngularSvgIcon, SvgLoader } from 'angular-svg-icon';
import {
  EXAMPLE_FILES,
  EXAMPLE_FILES_TOKEN,
  ExampleHttpInterceptor,
  EXAMPLES,
  EXAMPLES_TOKEN,
  KrKitRoutes,
} from '@kr-platform/kit';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { KruiSvgLoader } from '@kr-platform/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(KrKitRoutes),
    provideAnimations(),
    {
      provide: EXAMPLE_FILES_TOKEN,
      useValue: EXAMPLE_FILES,
    }, {
      provide: EXAMPLES_TOKEN,
      useValue: EXAMPLES,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExampleHttpInterceptor,
      multi: true,
    },
    provideAngularSvgIcon({
      loader: {
        provide: SvgLoader,
        useClass: KruiSvgLoader,
      },
    }),
  ],
};
