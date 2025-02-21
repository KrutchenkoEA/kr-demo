import { animate, state, style, transition, trigger } from '@angular/animations';

import { DEFAULT_TRANSITION, SLIDE_CONTENT_TRANSITION } from './transition';

export const SLIDE_INOUT_TOP = trigger('slideInOutTop', [
  transition(':enter', [
    style({ opacity: 0, height: 0 }),
    animate(DEFAULT_TRANSITION, style({ opacity: 1, height: '*' }))
  ]),
  transition(':leave', [
    animate(DEFAULT_TRANSITION, style({ height: 0, opacity: 0 }))
  ])
]);

export const SLIDE_CONTENT = trigger('slideContent', [
  state('void', style({ transform: 'translateX(100%)', opacity: 0 })),
  state('enter', style({ transform: 'translateX(0%)', opacity: 1 })),
  transition('* => *', animate(SLIDE_CONTENT_TRANSITION))
]);
