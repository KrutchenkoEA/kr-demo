import { InjectionToken } from '@angular/core';

export const EXAMPLE_FILES = new InjectionToken<{ [path: string]: string }>(
  'EXAMPLE_FILES'
);
