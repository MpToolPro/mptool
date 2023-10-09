import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { LolService } from '@mptool/shared/core';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'mptool-login-entry',
  template: `
    <tui-root>
      <div>{{ lol.name$ | async }}</div>
      <button (click)="sendData()">Send data to remote mfe</button>
      <mptool-login></mptool-login>
    </tui-root>
  `,
})
export class RemoteEntryComponent {
  constructor(
    public lol: LolService,
    private http: HttpClient,
    @Inject(TuiAlertService) private alertService: TuiAlertService
  ) {
    this.alertService.open('Всякое говно').subscribe();
  }
  sendData(): void {
    this.http.get('https://dummyjson.com/products/2').subscribe({
      next: (res: any) => {
        this.lol.addName(res.title);
      },
    });
  }
}
