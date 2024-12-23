import { Component, Inject } from '@angular/core';
import { ThemeConfiguratorService } from './services/theme-configurator.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'kr-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'kr-demo';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeConfiguratorService,
  ) {
  }

  public ngOnInit(): void {
    this.themeService.setThemeConfiguratorRoot(this.document);
  }

  public scrollTop(): void {
    this.document.body.firstElementChild?.scrollTo(0, 0);
  }
}
