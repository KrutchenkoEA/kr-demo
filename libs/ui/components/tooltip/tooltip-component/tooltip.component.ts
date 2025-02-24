import { Component } from '@angular/core';
import { KruiTooltipPosition } from '../tooltip.model';
import { animate, state, style, transition, trigger } from '@angular/animations';


const POPUP_APPEARANCE = trigger('popup', [
  state('void', style({ transform: 'scale3d(0.75, 0.75, 0.75)', opacity: 0 })),
  state('enter', style({ transform: 'scale3d(1.0, 1.0, 1.0)', opacity: 1 })),
  transition('* => *', animate(`400ms cubic-bezier(0.25, 0.8, 0.25, 1)`)),
]);

@Component({
  selector: 'krui-tooltip-component',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  animations: [POPUP_APPEARANCE],
  standalone: false,
})
export class KruiTooltipComponent {
  public text = '';
  public description = '';
  public titles: string[] = [];
  public position: KruiTooltipPosition = 'top';
  public size: 'sm' | 'md' = 'md';
  public showBorder = false;
  public usePopupAnimation = false;
}

