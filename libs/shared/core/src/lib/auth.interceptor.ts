import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TuiAlertService, TuiNotificationT } from '@taiga-ui/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private alertService: TuiAlertService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(this.alertService);
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `zwnlv6s024hp5butvuclcp7f65cxy1ry`,
      },
    });
    console.log(request);
    return next.handle(request);
  }
}
