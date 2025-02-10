import { Component, Input } from '@angular/core';

export type SpinnerType = 'ring' | 'doubleRing' | 'gears';

@Component({
  selector: 'krui-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: false,
})
export class KruiSpinnerComponent {
  @Input()
  type: SpinnerType = 'ring';

  @Input()
  size!: number;

  readonly typeIcon = {
    ring: 'kruiIconSpinnerRing',
    doubleRing: 'kruiIconSpinnerDoubleRing',
    gears: 'kruiIconSpinnerGears',
  };
}
