import { Inject, Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {
  TuiAlertService,
  TuiDialogService,
  TuiNotificationT,
} from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
// eslint-disable-next-line @nx/enforce-module-boundaries

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly alertService: TuiAlertService,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.alertService
      .open('На счету недостаточно средств', {
        label: 'Ошибка!',
        status: 'error' as TuiNotificationT,
      })
      .subscribe();
    console.log('jklj');
    // this.dialogService
    //   .open<number>(new PolymorpheusComponent(LoginComponent, this.injector), {
    //     data: '',
    //     dismissible: true,
    //     size: 'auto',
    //   })
    //   .subscribe();
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 429) {
          this.alertService
            .open(
              'С вашего устройства поступает слишком много запросов, попробуйте через 10 секунд',
              {
                label: 'Ошибка!',
                status: 'error' as TuiNotificationT,
              }
            )
            .subscribe();
        }

        const optionsErorr: any = { status: 'error' };
        switch (error.error.errorID) {
          case 11:
            this.alertService
              .open('На счету недостаточно средств', {
                label: 'Ошибка!',
                status: 'error' as TuiNotificationT,
              })
              .subscribe();
            // this.dialogService
            //   .open<number>(
            //     new PolymorpheusComponent(PaymentModalComponent, this.injector),
            //     {
            //       data: '',
            //       dismissible: true,
            //       size: 'auto'
            //     }
            //   )
            //   .subscribe();
            break;
          case 13:
            this.alertService
              .open(
                'Вы выбрали более ' + 5 + ' товаров на один ПВЗ!',
                optionsErorr
              )
              .subscribe();
            break;
          case 28:
            this.alertService
              .open('Выбранный аккаунт занят другой задачей.', optionsErorr)
              .subscribe();
            break;
          case 30:
            this.alertService
              .open(
                'Фото уже использовалось для отзыва, загрузите другое.',
                optionsErorr
              )
              .subscribe();
            break;
          default:
            break;
        }

        return throwError(error);
      })
    );
  }
}
