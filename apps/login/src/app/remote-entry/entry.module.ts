import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { FeatLoginModule } from '@mptool/feat-login';
import { AuthorizationModule } from '@mptool/authorization';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    FeatLoginModule,
    AuthorizationModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
