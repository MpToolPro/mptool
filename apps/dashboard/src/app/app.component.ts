import { Component, Inject, OnInit } from '@angular/core';
import { NavigateEndpointService } from './utils/navigate-endpoint.service';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';

@Component({
  selector: 'mptool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';
  constructor(
    private navigate: NavigateEndpointService,
    @Inject(TuiAlertService) private alertService: TuiAlertService
  ) {}
  ngOnInit(): void {
    console.log(this.navigate.isMobile);
  }
}
