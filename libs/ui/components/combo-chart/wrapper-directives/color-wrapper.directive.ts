import { Directive, Inject, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { KRUI_CHART_COLOR_PARSE_SERVICE } from '../injection-tokens';
import { KruiChartColorParseService } from '../services';

@Directive({
    selector: '[kruiChartInputColorWrapper]',
    standalone: false
})
export class KruiChartColorWrapperDirective implements OnInit {
  @Input() public isDarkTheme: boolean = true;

  constructor(
    @Optional() @Self() public readonly ngControl: NgControl | null,
    @Inject(KRUI_CHART_COLOR_PARSE_SERVICE) public chartColorParseService: KruiChartColorParseService
  ) {
  }

  public ngOnInit(): void {
    const value = this.ngControl?.value;
    const isCssVar = /var(.*)/i.test(value);
    if (isCssVar) {
      // @ts-ignore
      this.ngControl.control.patchValue(this.chartColorParseService.changeColor(value, this.isDarkTheme), {
        emitEvents: false,
        onlySelf: true
      });
    }
  }
}
