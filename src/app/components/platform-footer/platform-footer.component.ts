import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'kr-app-platform-footer',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
  ],
  templateUrl: './platform-footer.component.html',
  styleUrl: './platform-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlatformFooterComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  public scrollTop(): void {
    this.document.body.firstElementChild?.scrollTo(0, 0);
  }
}
