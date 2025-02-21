import { animate, state, style, transition, trigger } from '@angular/animations';
import { POPUP_TRANSITION } from './transition';

export const POPUP_APPEARANCE = trigger('popup', [
  state('void', style({ transform: 'scale3d(0.75, 0.75, 0.75)', opacity: 0 })),
  state('enter', style({ transform: 'scale3d(1.0, 1.0, 1.0)', opacity: 1 })),
  transition('* => *', animate(POPUP_TRANSITION))
]);
