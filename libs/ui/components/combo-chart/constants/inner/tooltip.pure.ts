import { ConnectionPositionPair } from '@angular/cdk/overlay';

export const tooltipPositionPair = (pos: 'top' | 'bottom' | 'right' | 'left' = 'left'): ConnectionPositionPair[] => {
  if (pos === 'left') {
    return [
      new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }),
      new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
      new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
      new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }),
    ];
  }
  if (pos === 'right') {
    return [
      new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }),
      new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
      new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
      new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }),
    ];
  }
  return [
    new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }),
    new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }),
  ];
};
