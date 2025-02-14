import { Component } from '@angular/core';
import { KruiTooltipParameters } from '@kr-platform/ui';

/** @title Базовый */

@Component({
  selector: 'sides-small-example',
  templateUrl: './sides-small-example.component.html',
  styleUrls: ['./sides-small-example.component.scss'],
  standalone: false,
})
export class SidesSmallExampleComponent {
  public tooltipParameters1: KruiTooltipParameters = {
    text: 'text',
    size: 'sm',
    position: 'top',
  };
  public tooltipParameters2: KruiTooltipParameters = {
    text: 'text',
    size: 'sm',
    position: 'left',
  };
  public tooltipParameters3: KruiTooltipParameters = {
    text: 'text',
    size: 'sm',
    position: 'right',
  };
  public tooltipParameters4: KruiTooltipParameters = {
    text: 'text',
    size: 'sm',
    position: 'bottom',
  };

  constructor() {
  }
}
