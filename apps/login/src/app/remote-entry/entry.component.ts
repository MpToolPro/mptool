import { Component } from '@angular/core';
import { LolService } from '@mptool/shared/auth';

@Component({
  selector: 'mptool-login-entry',
  template: `
    <div>{{ lol.name$ | async }}</div>
    <button (click)="sendData()">Send data to remote mfe</button>
    <mptool-politics></mptool-politics>
    <mptool-login></mptool-login>
  `,
})
export class RemoteEntryComponent {
  constructor(public lol: LolService) {}
  sendData(): void {
    this.lol.addName('залупа');
  }
}
