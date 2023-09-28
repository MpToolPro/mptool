import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PoliticsComponent } from './politics/politics.component';
import { RestoreComponent } from './restore/restore.component';
import { RestoreChangeComponent } from './restore-change/restore-change.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {
  TUI_SANITIZER,
  TuiButtonModule,
  TuiRootModule,
  TuiScrollbarModule,
} from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TuiRootModule,
    ReactiveFormsModule,
    TuiScrollbarModule,
    TuiButtonModule,
  ],
  declarations: [
    LoginComponent,
    PoliticsComponent,
    RestoreComponent,
    RestoreChangeComponent,
    SignUpComponent,
  ],
  exports: [
    LoginComponent,
    PoliticsComponent,
    RestoreComponent,
    RestoreChangeComponent,
    SignUpComponent,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AuthorizationModule {}
