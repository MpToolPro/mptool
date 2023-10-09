import { AfterContentInit, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigateEndpointService } from '../utils/navigate-endpoint.service';
import { TuiAlertService, TuiNotificationT } from '@taiga-ui/core';

@Component({
  selector: 'mptool-loginnn',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterContentInit {
  constructor(
    public navigate: NavigateEndpointService,
    @Inject(TuiAlertService) private alertService: TuiAlertService
  ) {}

  ngAfterContentInit(): void {
    this.alertService
      .open('На счету недостаточно средств', {
        label: 'Ошибка!',
        status: 'error' as TuiNotificationT,
      })
      .subscribe();
  }

  loginForm = new FormGroup({
    emailValue: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    passwordValue: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  async login() {
    //   this.request
    //     .loginRequest(
    //       String(this.loginForm.get('emailValue')!.value),
    //       String(this.loginForm.get('passwordValue')!.value)
    //     )
    //     .subscribe(
    //       (response: any) => {
    //         if (response.auth) {
    //           // console.log(response.auth);
    //           this.alertService.open('Вы успешно вошли').subscribe();
    //           this.auth.successLogin(response);
    //         } else {
    //           const options: any = { label: 'Ошибка!', status: 'error' };
    //           this.alertService.open(response.error.error, options).subscribe();
    //         }
    //       },
    //       (error) => {
    //         const options: any = { label: 'Ошибка!', status: 'error' };
    //         this.alertService.open(error.error.error, options).subscribe();
    //       }
    //     );
  }
}
