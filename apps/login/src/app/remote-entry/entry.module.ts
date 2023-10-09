import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { FeatLoginModule } from '@mptool/feat-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    FeatLoginModule,
    CommonModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
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
