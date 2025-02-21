import { Component, ChangeDetectionStrategy } from '@angular/core';

/** @title Базовый компонент */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'checkbox-simple-example',
  templateUrl: './checkbox-simple-example.html',
  styleUrls: [],
  standalone: false,
})
export class CheckboxSimpleExample {}
