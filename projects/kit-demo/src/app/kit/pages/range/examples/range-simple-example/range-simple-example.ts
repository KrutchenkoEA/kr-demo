import { Component, ChangeDetectionStrategy } from '@angular/core';

/** @title Базовый компонент */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'range-simple-example',
  templateUrl: './range-simple-example.html',
  styleUrls: ['./range-simple-example.scss'],
  standalone: false,
})
export class RangeSimpleComponent {}
