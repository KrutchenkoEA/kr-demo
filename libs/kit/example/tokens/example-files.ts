import { InjectionToken } from '@angular/core';

export const EXAMPLE_FILES_TOKEN = new InjectionToken<{ [path: string]: string }>(
  'EXAMPLE_FILES'
);
