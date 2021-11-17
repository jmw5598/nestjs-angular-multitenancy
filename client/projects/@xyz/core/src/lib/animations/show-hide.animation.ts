import { animate, style, transition, trigger } from '@angular/animations';

const ANIMATION_TRANSITION_TIME: string = '150ms';

export const showHide = trigger('showHide', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: 'scaleX(0.98) scaleY(0)',
      position: 'relative'
    }),
    animate(ANIMATION_TRANSITION_TIME, style({ 
      opacity: 1,
      transform: 'scale(1)'
    }))
  ]),
  transition(':leave', [
    style({ 
      opacity: 1,
      transform: 'scale(1)'
    }),
    animate(ANIMATION_TRANSITION_TIME, style({ 
      opacity: 0,
      transform: 'scaleX(0.98) scaleY(0)'
    }))
  ])
]);
