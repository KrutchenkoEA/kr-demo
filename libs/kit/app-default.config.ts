import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAngularSvgIcon, SvgLoader } from 'angular-svg-icon';
import {
  EXAMPLE_FILES,
  EXAMPLE_FILES_TOKEN,
  ExampleHttpInterceptor,
  EXAMPLES,
  EXAMPLES_TOKEN,
} from '@kr-platform/kit';
import { provideRouter, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { KruiSvgLoader } from '@kr-platform/icons';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const getDefaultKrAppConfig = (routes: Routes = []): ApplicationConfig => {
  return {
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideHttpClient(),
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
