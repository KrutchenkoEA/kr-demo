import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const THEME_KEY = 'kr-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeConfiguratorService {
  private readonly renderer: Renderer2;
  private themeConfigurator!: ThemeConfigurator;
  public isDarkTheme$!: Observable<boolean>;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public setThemeConfiguratorRoot(document: Document): void {
    this.themeConfigurator = new ThemeConfigurator(document, this.renderer);
    this.isDarkTheme$ = this.themeConfigurator.isDarkThemeObservable;
  }

  public changeTheme(): void {
    this.themeConfigurator.switchTheme();
  }
}

export class ThemeConfigurator {
  private isDarkTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isDarkThemeObservable: Observable<boolean> = this.isDarkTheme$.asObservable();

  constructor(private document: Document, private renderer: Renderer2) {
    this.isDarkThemeObservable.subscribe((ref) => this.setTheme(ref));
    const theme = localStorage.getItem(THEME_KEY);
    if (!theme) {
      this.theme = true;
    } else {
      this.theme = localStorage.getItem(THEME_KEY) === 'true';
    }
  }

  public set theme(value: boolean) {
    localStorage.setItem(THEME_KEY, value.toString());
    this.isDarkTheme$.next(value);
  }

  public get theme(): boolean {
    return this.isDarkTheme$.getValue();
  }

  public switchTheme(): void {
    this.theme = !this.theme;
  }

  public setTheme(isDarkMode: boolean): void {
    if (!this.document) {
      return;
    }
    const hostClass = isDarkMode ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', hostClass);
  }
}
