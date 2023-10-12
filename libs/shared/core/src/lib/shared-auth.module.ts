import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAlertModule, TuiLoaderModule, TuiRootModule } from '@taiga-ui/core';
import { FeatLoginModule } from '@mptool/feat-login';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TuiRootModule,
    FeatLoginModule,
    TuiAlertModule,
  ],
  declarations: [],
})
export class SharedAuthModule {}
