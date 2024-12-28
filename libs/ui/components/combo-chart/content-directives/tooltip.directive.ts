import { Directive, HostBinding, Input } from '@angular/core';
import { ITluiChartTooltipBase, KruiChartTooltipDataLayer } from '../models';

@Directive({
    selector: 'krui-chart-tooltip-directive',
    standalone: false
})
export class KruiChartTooltipBaseDirective implements ITluiChartTooltipBase {
  @Input() public data: KruiChartTooltipDataLayer[] = [];

  @Input() public engUnits: string = '';
  @Input() public delimiterSymbol: string = ': ';

  @Input() public tooltipShowMilliseconds: boolean = false;
  @Input() public tooltipDateValuePipeFormat: string = 'dd.MM.yyyy HH:mm';
  @Input() public tooltipTitleDateValuePipeFormat: string = 'dd.MM.yyyy HH:mm:ss';
  @Input() public tooltipNumberValuePipeFormat: string = '1.0-0';
  @Input() public tooltipTitleNumberValuePipeFormat: string = '1.0-0';

  @HostBinding('@popup') private readonly popup = true;

  public getValueType(value: any): 'date' | 'string' | 'number' | 'other' {
    switch (Object.prototype.toString.call(value)) {
      case '[object Date]':
        return 'date';
      case '[object Number]':
        return 'number';
      case '[object String]':
        return 'string';
      default:
        return 'other';
    }
  }

  public getDateWithMilliseconds(value: Date | string | number): string {
    return new Date(value as unknown as Date)?.toLocaleString('ru-RU') + ' .' + new Date(value as unknown as Date)?.getMilliseconds();
  }

  public getNumberValue(value: Date | string | number): number {
    return value as number;
  }
}

