import { Component, ChangeDetectionStrategy } from '@angular/core';

/** @title Базовый компонент */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'input-simple-example',
  templateUrl: './input-simple-example.html',
  styleUrls: ['./input-simple-example.scss'],
  standalone: false,
})
export class InputSimpleExample {}
