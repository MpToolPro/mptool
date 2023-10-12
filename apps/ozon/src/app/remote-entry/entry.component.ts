import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LolService } from '@mptool/shared/core';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'mptool-ozon-entry',
  template: `<div class="ozon-list">
    <div>{{ lol.name$ | async }}</div>
    <button (click)="sendData()">Send data to remote mfe</button>
    <h1>ozon</h1>
    <h2>хрень какая-то</h2>
    <img src="../../assets/sbp.png" alt="" />
    <button
      appearance="primary"
      tuiButton
      type="button"
      class="tui-space_right-10 tui-space_bottom-3"
    >
      primary
    </button>
    <button
      appearance="secondary"
      tuiButton
      type="button"
      class="tui-space_right-10 tui-space_bottom-3"
    >
      secondary
    </button>
    <div class="list">
      <label> <input type="checkbox" name="item" /> Item </label>
    </div>
  </div> `,
})
export class RemoteEntryComponent {
  constructor(
    public lol: LolService,
    private http: HttpClient,
    private alerts: TuiAlertService
  ) {
    this.alerts.open('Пизда').subscribe();
  }
  sendData(): void {
    this.http.get('https://dummyjson.com/products/1').subscribe({
      next: (res: any) => {
        this.lol.addName(res.title);
      },
    });
  }
}
