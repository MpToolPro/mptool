import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiButtonModule,
  TuiRootModule,
} from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    TuiRootModule,
    TuiAlertModule,
    TuiButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
      {
        path: 'foo',
        loadChildren: () => import('./foo/foo.module').then((m) => m.FooModule),
      },
      {
        path: 'bar',
        loadChildren: () => import('./bar/bar.module').then((m) => m.BarModule),
      },
    ]),
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class RemoteEntryModule {}
