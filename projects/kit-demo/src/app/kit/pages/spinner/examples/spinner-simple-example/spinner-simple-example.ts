import { ChangeDetectionStrategy, Component } from '@angular/core';

/** @title Базовый компонент */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'spinner-simple-example',
  templateUrl: './spinner-simple-example.html',
  styleUrls: [],
  standalone: false,
})
export class SpinnerSimpleComponent {
}
