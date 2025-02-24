import { Component, ChangeDetectionStrategy } from '@angular/core';

/** @title Базовый компонент  */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'select-simple-example',
  templateUrl: './select-simple-example.html',
  styleUrls: ['./select-simple-example.scss'],
  standalone: false,
})
export class SelectSimpleExample {
  readonly options: string[] = [
    'АИ-92',
    'АИ-95',
    'AИ-100',
  ];
}
