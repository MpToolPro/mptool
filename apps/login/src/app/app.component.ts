import { Component, Inject } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'mptool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'login';
  constructor(@Inject(TuiAlertService) private alertService: TuiAlertService) {
    this.alertService.open('Всякое говно').subscribe();
  }
}
