import { Component, HostBinding, Input } from '@angular/core';

import { KruiButtonSize, KruiButtonStyle } from '../enums';

@Component({
  selector: 'krui-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  standalone: false,
})
export class KruiButtonGroupComponent {
  @Input()
  btnStyle: KruiButtonStyle = 'primary';

  @Input()
  size: KruiButtonSize = 'md';

  @Input()
  disabled: boolean = false;

  @HostBinding('class')
  private class: string = 'krui-btn-group';
}
