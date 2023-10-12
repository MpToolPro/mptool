import { AfterContentInit, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigateEndpointService } from '../utils/navigate-endpoint.service';
import { TuiAlertService, TuiNotificationT } from '@taiga-ui/core';

@Component({
  selector: 'mptool-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomePageComponent {
  constructor(
    public navigate: NavigateEndpointService,
    @Inject(TuiAlertService) private alertService: TuiAlertService
  ) {}
}
