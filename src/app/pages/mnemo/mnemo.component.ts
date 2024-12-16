import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kr-app-mnemo',
  standalone: true,
  imports: [],
  templateUrl: './mnemo.component.html',
  styleUrl: './mnemo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MnemoComponent {

}
