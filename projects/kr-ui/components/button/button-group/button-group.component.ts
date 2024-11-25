import { Component, HostBinding, Input } from '@angular/core';

import { KruiButtonSize, KruiButtonStyle } from '../enums';

@Component({
  selector: 'krui-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class KruiButtonGroupComponent {
  @Input()
  public btnStyle: KruiButtonStyle = 'primary';

  @Input()
  public size: KruiButtonSize = 'md';

  @Input()
  public disabled: boolean = false;

  @HostBinding('class')
  private readonly class: string = 'krui-btn-group';
}
