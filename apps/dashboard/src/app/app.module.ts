import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthInterceptor, ErrorInterceptor } from '@mptool/shared/core';
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiAlertService,
  TuiButtonModule,
  TuiDialogModule,
  TuiErrorModule,
  TuiLinkModule,
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
import { ErInterceptor } from './er.interceptor';
import { HomePageComponent } from './homepage/homepage.component';

registerLocaleData(localeRu);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PoliticsComponent,
    RestoreComponent,
    SignUpComponent,
    HomePageComponent,
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
    TuiDialogModule,
    FormsModule,
    TuiFieldErrorPipeModule,
    TuiForAsyncModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiErrorModule,
    TuiTextfieldControllerModule,
    TuiCheckboxModule,
    TuiScrollbarModule,
    TuiAlertModule,
    TuiInputPhoneModule,
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: HTTP_INTERCEPTORS, useClass: ErInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: LOCALE_ID,
      useValue: 'ru',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
