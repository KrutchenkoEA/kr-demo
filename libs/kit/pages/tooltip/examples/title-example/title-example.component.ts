import { Component } from '@angular/core';
import { KruiTooltipParameters } from '@kr-platform/ui';

/** @title Заголовок */

@Component({
  selector: 'title-example',
  templateUrl: './title-example.component.html',
  styleUrls: ['./title-example.component.scss'],
  standalone: false,
})
export class TitleExampleComponent {
  tooltipParameters1: KruiTooltipParameters = {
    text: 'text',
    size: 'sm',
    position: 'top',
    title: '412',
    description: '21.09.2022 20:00',
  };
  tooltipParameters2: KruiTooltipParameters = {
    text: 'text',
    size: 'sm',
    position: 'left',
    title: '412',
    description: '21.09.2022 20:00',
  };
  tooltipParameters3: KruiTooltipParameters = {
    text: 'text',
    size: 'sm',
    position: 'right',
    title: '412',
    description: '21.09.2022 20:00',
  };
  tooltipParameters4: KruiTooltipParameters = {
    text: 'text',
    size: 'sm',
    position: 'bottom',
    title: '412',
    description: '21.09.2022 20:00',
  };
}
