import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'krui-chart-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KruiChartLegendComponent {
  @Input() title!: string;

  @Input() color!: string;

  @Input() symbol!: string;

  @Input() disabled: boolean = false;

  @Output() eventLabelClick = new EventEmitter<boolean>();

  public isToggled: boolean = false;

  public labelClick(): void {
    this.isToggled = !this.isToggled;
    this.eventLabelClick.emit(this.isToggled);
  }
}
