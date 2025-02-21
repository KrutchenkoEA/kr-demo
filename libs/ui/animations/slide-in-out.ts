import { animate, state, style, transition, trigger } from '@angular/animations';

export const SLIDE_INOUT_TOP = trigger('slideInOutTop', [
  transition(':enter', [
    style({ opacity: 0, height: 0 }),
    animate(`180ms cubic-bezier(0, 0, .2, 1)`, style({ opacity: 1, height: '*' })),
  ]),
  transition(':leave', [
    animate(`180ms cubic-bezier(0, 0, .2, 1)`, style({ height: 0, opacity: 0 })),
  ]),
]);

export const SLIDE_CONTENT = trigger('slideContent', [
  state('void', style({ transform: 'translateX(100%)', opacity: 0 })),
  state('enter', style({ transform: 'translateX(0%)', opacity: 1 })),
  transition('* => *', animate(`400ms cubic-bezier(0.25, 0.8, 0.25, 1)`)),
]);
