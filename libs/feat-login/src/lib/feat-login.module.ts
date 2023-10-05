import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiLoaderModule } from '@taiga-ui/core';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TuiLoaderModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class FeatLoginModule {}
