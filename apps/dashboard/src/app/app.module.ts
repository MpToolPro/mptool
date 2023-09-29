import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthGuard, AuthInterceptor } from '@mptool/shared/auth';
import { TUI_SANITIZER, TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { LoginComponent } from 'libs/authorization/src/lib/login/login.component';
import { EventPluginsModule } from '@tinkoff/ng-event-plugins';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    EventPluginsModule,
    CommonModule,
    BrowserAnimationsModule,
    TuiRootModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          children: [
            {
              path: '',
              redirectTo: '/todo',
              pathMatch: 'full',
            },
            {
              path: 'todo',
              loadChildren: () =>
                import('todo/Module').then((m) => m.RemoteEntryModule),
              canActivate: [AuthGuard],
              canActivateChild: [AuthGuard],
            },
            {
              path: 'login',
              loadChildren: () =>
                import('login/Module').then((m) => m.RemoteEntryModule),
            },
            {
              path: 'loginn',
              component: LoginComponent,
            },
          ],
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
