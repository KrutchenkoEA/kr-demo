import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
  exportAs: 'code-snippet',
  standalone: false,
})
export class CodeSnippedComponent implements OnInit {
  @Input()
  public path!: string;
  public error!: string;

  public content$ = new Observable<string>();

  constructor(
    private readonly httpClient: HttpClient,
    private readonly clipboard: Clipboard,
  ) {
  }

  public ngOnInit(): void {
    this.content$ = this.httpClient
      .get<string>(this.path)
      .pipe(
        catchError((e) => ((this.error = e), of('Не удалось загрузить данные'))),
        map(content => {
          return content || '\n'
        }),
      );
  }

  public copySource(text: string): void {
    this.clipboard.copy(text);
  }
}
