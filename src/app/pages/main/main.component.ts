import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'kr-app-main',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  public openUrl(url: string):void{
    this.document?.defaultView?.open(url, '_blank');
  }
}
