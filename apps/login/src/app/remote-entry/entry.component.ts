import { Component } from '@angular/core';
import { LolService } from '@mfe-netlify/shared/auth';

@Component({
  selector: 'mfe-netlify-login-entry',
  template: `
  <div>{{lol.name$ | async}}</div>
<button (click)="sendData()"> Send data to remote mfe</button>

  <mfe-netlify-login></mfe-netlify-login>`,
})
export class RemoteEntryComponent {
  constructor(public lol: LolService) {}
  sendData(): void {
    this.lol.addName('залупа');
  }
}
