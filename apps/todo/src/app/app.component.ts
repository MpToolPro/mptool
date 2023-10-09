import { Component } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'mptool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  constructor(private alert: TuiAlertService) {
    this.alert.open('Хуй').subscribe();
  }
}
