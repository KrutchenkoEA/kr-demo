import { Component, ChangeDetectionStrategy } from '@angular/core';

/** @title Базовый компонент */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'accordion-simple-example',
  templateUrl: './accordion-simple-example.html',
  styleUrls: ['./accordion-simple-example.scss'],
  standalone: false
})
export class AccordionSimpleExample {}
