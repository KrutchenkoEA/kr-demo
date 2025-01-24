import { Component, ChangeDetectionStrategy } from '@angular/core';

import { french, english, russian } from './lorem';

/** @title Базовый компонент */

@Component({
  selector: 'tabs-simple-example',
  templateUrl: './tabs-simple-example.html',
  styleUrls: ['./tabs-simple-example.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsSimpleExample {
  readonly russian = russian;
  readonly english = english;
  readonly french = french;
}
