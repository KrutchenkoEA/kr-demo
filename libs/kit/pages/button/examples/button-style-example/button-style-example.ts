import { ChangeDetectionStrategy, Component } from '@angular/core';

/** @title Стиль */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'button-style-example',
  templateUrl: './button-style-example.html',
  styleUrls: ['./button-style-example.scss'],
  standalone: false,
})
export class ButtonStyleExample {
}
