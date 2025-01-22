import { InjectionToken } from '@angular/core';

import { DemoExample } from '../models/demo-example';

export const EXAMPLES = new InjectionToken<{ [id: string]: DemoExample }>(
  'EXAMPLES'
);
