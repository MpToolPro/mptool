import { Component } from '@angular/core';
import { NavigateEndpointService } from '../utils/navigate-endpoint.service';

@Component({
  selector: 'mptool-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.scss'],
})
export class PoliticsComponent {
  constructor(public navigate: NavigateEndpointService) {}
}
