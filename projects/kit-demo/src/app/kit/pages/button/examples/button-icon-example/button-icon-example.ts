import { ChangeDetectionStrategy, Component } from '@angular/core';

/** @title Иконки */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'button-icon-example',
  templateUrl: './button-icon-example.html',
  styleUrls: ['./button-icon-example.scss'],
  standalone: false,
})
export class ButtonIconExample {
}
