import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LolService } from '@mptool/shared/core';

@Component({
  selector: 'mptool-login-entry',
  template: `
    <div>{{ lol.name$ | async }}</div>
    <button (click)="sendData()">Send data to remote mfe</button>
  `,
})
export class RemoteEntryComponent {
  constructor(public lol: LolService, private http: HttpClient) {}
  sendData(): void {
    this.http.get('https://dummyjson.com/products/2').subscribe({
      next: (res: any) => {
        this.lol.addName(res.title);
      },
    });
  }
}
