import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { CAROUSEL_TRANSITION } from './transition';

export const CAROUSEL = trigger('carousel', [
  transition(':increment', [
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate(
            CAROUSEL_TRANSITION,
            style({ transform: 'translateX(0%)', opacity: 1 })
          ),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)', opacity: 1 }),
          animate(
            CAROUSEL_TRANSITION,
            style({ transform: 'translateX(-100%)', opacity: 0 })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition(':decrement', [
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate(
            CAROUSEL_TRANSITION,
            style({ transform: 'translateX(0%)', opacity: 1 })
          ),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)', opacity: 1 }),
          animate(
            CAROUSEL_TRANSITION,
            style({ transform: 'translateX(100%)', opacity: 0 })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
