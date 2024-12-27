import { animate, style, transition, trigger } from '@angular/animations';

import { FADE_INOUT_TRANSITION } from './transition';

export const FADE_INOUT = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(FADE_INOUT_TRANSITION, style({ opacity: 1 })),
  ]),
  transition(':leave', [animate(FADE_INOUT_TRANSITION, style({ opacity: 0 }))]),
]);

export const FADE_IN = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(FADE_INOUT_TRANSITION, style({ opacity: 1 })),
  ]),
]);
