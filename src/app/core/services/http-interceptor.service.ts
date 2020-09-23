import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpHandlerService } from '@core/services/http-handler.service';
import { environment } from '@env';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private httpHandler: HttpHandlerService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const reqUrl = request.url;
    if (reqUrl.indexOf('http') === -1) {
      request = request.clone({
        url: `${environment.apiUrl}/${reqUrl}`,
      });
    }

    return next
      .handle(request)
      .pipe(catchError((error) => this.httpHandler.handleError(error)));
  }
}
