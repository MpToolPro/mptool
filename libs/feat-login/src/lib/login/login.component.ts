import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@mptool/shared/auth';

@Component({
  selector: 'mptool-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const username = this.loginForm.get('username')?.value as string;
    const password = this.loginForm.get('password')?.value as string;
    const loggedIn = this.authService.login({ username, password });

    if (loggedIn) {
      this.router.navigateByUrl('/');
    }
  }
}
