import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateEndpointService {
  constructor(private router: Router) {}

  goLogin() {
    this.router.navigate(['/loginn']);
  }

  goPolitics() {
    this.router.navigate(['/politics']);
  }

  goSignup() {
    this.router.navigate(['/sign-up']);
  }

  goRestore() {
    this.router.navigate(['/restore']);
  }
}
