import { ChangeDetectionStrategy, Component } from '@angular/core';

/** @title Размер */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'button-size-example',
  templateUrl: './button-size-example.html',
  styleUrls: ['./button-size-example.scss'],
  standalone: false,
})
export class ButtonSizeExample {
}
