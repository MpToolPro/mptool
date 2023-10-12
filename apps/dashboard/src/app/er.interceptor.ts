import { Inject, Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  TuiAlertService,
  TuiDialogService,
  TuiNotificationT,
} from '@taiga-ui/core';

@Injectable()
export class ErInterceptor implements HttpInterceptor {
  constructor(
    private alertService: TuiAlertService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // this.alertService
    //   .open('На счету недостаточно средств', {
    //     label: 'Ошибка!',
    //     status: 'error' as TuiNotificationT,
    //   })
    //   .subscribe();
    return next.handle(request);
  }
}
