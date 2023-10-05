import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiLoaderModule } from '@taiga-ui/core';
import { FeatLoginModule } from '@mptool/feat-login';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FeatLoginModule],
  declarations: [],
})
export class SharedAuthModule {}
