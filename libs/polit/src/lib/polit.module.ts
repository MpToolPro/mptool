import { NgModule, Sanitizer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticsComponent } from './politics/politics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TUI_SANITIZER,
  TuiButtonModule,
  TuiRootModule,
  TuiScrollbarModule,
} from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    TuiRootModule,
    ReactiveFormsModule,
    TuiScrollbarModule,
    TuiButtonModule,
  ],
  declarations: [PoliticsComponent],
  exports: [PoliticsComponent],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class PolitModule {}
