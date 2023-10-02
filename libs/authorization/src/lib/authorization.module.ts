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
  TuiErrorModule,
  TuiRootModule,
  TuiScrollbarModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiCheckboxModule,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
} from '@taiga-ui/kit';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiForAsyncModule } from '@taiga-ui/cdk';

@NgModule({
  imports: [
    CommonModule,
    TuiRootModule,
    TuiErrorModule,
    TuiInputModule,
    ReactiveFormsModule,
    FormsModule,
    TuiFieldErrorPipeModule,
    TuiForAsyncModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiErrorModule,
    TuiTextfieldControllerModule,
    TuiCheckboxModule,
    TuiScrollbarModule,
    TuiInputPhoneModule,
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
