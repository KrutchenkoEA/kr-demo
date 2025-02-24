import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAngularSvgIcon, SvgLoader } from 'angular-svg-icon';
import { provideRouter, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { KruiSvgLoader } from '@kr-platform/icons';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EXAMPLE_FILES, EXAMPLE_FILES_TOKEN, EXAMPLES, EXAMPLES_TOKEN } from './example';
import { ExampleHttpInterceptor } from './example/interceptors/example-http.interceptor';

export const getDefaultKrAppConfig = (routes: Routes = []): ApplicationConfig => {
  return {
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideHttpClient(withInterceptorsFromDi()),
      provideAnimationsAsync(),
      provideAngularSvgIcon({
        loader: {
          provide: SvgLoader,
          useClass: KruiSvgLoader,
        },
      }),
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
      provideRouter(routes),
    ],
  };
};
