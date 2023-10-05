import { Component, OnInit } from '@angular/core';
import { NavigateEndpointService } from './utils/navigate-endpoint.service';
import { TuiDialogService } from '@taiga-ui/core';

@Component({
  selector: 'mptool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  constructor(
    private navigate: NavigateEndpointService,
    private dialogService: TuiDialogService
  ) {}
  ngOnInit(): void {
    console.log(this.navigate.isMobile);
    this.dialogService.open('Хуйня').subscribe();
  }
}
