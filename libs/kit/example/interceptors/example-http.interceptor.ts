import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { EXAMPLE_FILES_TOKEN } from '../tokens';

@Injectable()
export class ExampleHttpInterceptor implements HttpInterceptor {
  constructor(
    @Inject(EXAMPLE_FILES_TOKEN)
    private readonly exampleFiles: { [path: string]: string },
  ) {
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const url = request.url;
    if (url in this.exampleFiles) {
      return of(new HttpResponse({ body: this.exampleFiles[url] }));
    }
    return next.handle(request);
  }
}
