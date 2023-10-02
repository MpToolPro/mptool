import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthInterceptor } from '@mptool/shared/auth';
import {
  TUI_SANITIZER,
  TuiButtonModule,
  TuiErrorModule,
  TuiRootModule,
  TuiScrollbarModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { EventPluginsModule } from '@tinkoff/ng-event-plugins';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiCheckboxModule,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
} from '@taiga-ui/kit';
import { TuiForAsyncModule } from '@taiga-ui/cdk';
import { LoginComponent } from './login/login.component';
import { PoliticsComponent } from './politics/politics.component';
import { RestoreComponent } from './restore/restore.component';
import { SignUpComponent } from './sign-up/sign-up.component';

registerLocaleData(localeRu);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PoliticsComponent,
    RestoreComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EventPluginsModule,
    CommonModule,
    BrowserAnimationsModule,
    TuiRootModule,
    AppRoutingModule,
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
