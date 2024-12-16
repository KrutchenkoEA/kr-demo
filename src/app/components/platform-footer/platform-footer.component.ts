import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'kr-app-platform-footer',
  standalone: true,
  imports: [
    MatIcon,
    MatButton
  ],
  templateUrl: './platform-footer.component.html',
  styleUrl: './platform-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatformFooterComponent {

}
