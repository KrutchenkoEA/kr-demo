import { ChangeDetectionStrategy, Component } from '@angular/core';

/** @title Базовый компонент */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'slider-simple-example',
  templateUrl: './slider-simple-example.html',
  styleUrls: ['./slider-simple-example.scss'],
  standalone: false,
})
export class SliderSimpleComponent {
}
