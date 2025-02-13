import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FormGroupDirective, FormGroupName } from '@angular/forms';

@Component({
  selector: 'kr-app-combo-chart-generator',
  imports: [],
  templateUrl: './combo-chart-generator.component.html',
  styleUrl: './combo-chart-generator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ComboChartGeneratorComponent {
  constructor(
    private readonly parentForm: FormGroupDirective,
    @Optional() public formGroupName: FormGroupName,
  ) {
  }
}
