import { Component, OnInit } from '@angular/core';
import { KruiTooltipPosition } from '../tooltip.model';
import { POPUP_APPEARANCE } from '@kr-platform/ui';

@Component({
  selector: 'krui-tooltip-component',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  animations: [POPUP_APPEARANCE],
  standalone: false,
})
export class KruiTooltipComponent implements OnInit {
  public text = '';
  public description = '';
  public titles: string[] = [];
  public position: KruiTooltipPosition = 'top';
  public size: 'sm' | 'md' = 'md';
  public showBorder = false;
  public usePopupAnimation = false;

  constructor() {}

  ngOnInit() {}
}

