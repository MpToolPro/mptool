import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LolService } from '@mptool/shared/core';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'mptool-wildberries-entry',
  template: ` <tui-root>
    <div class="wildberries-list">
      это вайлдбериз ребята
      <img src="../../assets/img/banner.jpg" alt="" />
      <div>{{ lol.name$ | async }}</div>
      <button (click)="sendData()">Send data to remote mfe</button>
      <h1>wildberries</h1>
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
    </div>
  </tui-root>`,
})
export class RemoteEntryComponent implements OnInit {
  constructor(
    public lol: LolService,
    private http: HttpClient,
    private alerts: TuiAlertService
  ) {}

  ngOnInit(): void {
    this.alerts.open('Some bullshit').subscribe();
    localStorage.setItem('fuck', 'some bullshit');
  }
  sendData(): void {
    this.http.get('https://dummyjson.com/products/1').subscribe({
      next: (res: any) => {
        this.lol.addName(res.title);
      },
    });
  }
}
