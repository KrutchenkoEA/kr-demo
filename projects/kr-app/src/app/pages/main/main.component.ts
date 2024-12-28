import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'kr-app-main',
  imports: [
    RouterLink,
    MatIcon,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  public openUrl(url: string): void {
    this.document?.defaultView?.open(url, '_blank');
  }

  public saveRezume(): void {
    // console.log('REZUME', REZUME);
  }
}
