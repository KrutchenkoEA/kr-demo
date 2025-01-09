import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { EXAMPLE_FILES } from '../tokens';

@Injectable()
export class ExampleHttpInterceptor implements HttpInterceptor {
  constructor(
    @Inject(EXAMPLE_FILES)
    private readonly exampleFiles: { [path: string]: string }
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const url = request.url;
    if (url in this.exampleFiles) {
      return of(new HttpResponse({ body: this.exampleFiles[url] }));
    }
    return next.handle(request);
  }
}
