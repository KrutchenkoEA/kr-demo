import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KitDemoComponent } from '../../../../../kit-demo/src/app/app.component';

@Component({
  selector: 'kr-app-mnemo',
  imports: [
    KitDemoComponent,
  ],
  templateUrl: './mnemo.component.html',
  styleUrl: './mnemo.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MnemoComponent {

}
