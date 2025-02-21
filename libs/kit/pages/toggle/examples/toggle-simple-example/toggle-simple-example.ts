import { Component, ChangeDetectionStrategy } from '@angular/core';

/** @title Базовый компонент */

@Component({
  selector: 'toggle-simple-example',
  templateUrl: './toggle-simple-example.html',
  styleUrls: [],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleSimpleExample {}
