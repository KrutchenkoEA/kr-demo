import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'kr-app-platform-header',
  standalone: true,
  imports: [
    RouterLink,
    MatButton,
    MatIcon,
    MatSlideToggle,
  ],
  templateUrl: './platform-header.component.html',
  styleUrl: './platform-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlatformHeaderComponent {

}
