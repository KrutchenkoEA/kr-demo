import { Component, ChangeDetectionStrategy } from '@angular/core';

/** @title Нативные контроллы */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'input-native-example',
  templateUrl: './input-native-example.html',
  styleUrls: ['./input-native-example.scss'],
  standalone: false,
})
export class InputNativeExample {}
