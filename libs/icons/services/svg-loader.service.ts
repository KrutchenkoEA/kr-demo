import { Injectable } from '@angular/core';
import { SvgLoader } from 'angular-svg-icon';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import * as registry from '../constants';

@Injectable({
  providedIn: 'root',
})
export class KruiSvgLoader implements SvgLoader {
  public constructor(private readonly httpClient: HttpClient) {}

  public getSvg(url: string): Observable<string> {
    if (url in registry) {
      return of(registry[url as keyof typeof registry]);
    } else {
      return this.httpClient.get(url, { responseType: 'text' });
    }
  }
}
