import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BarComponent } from './bar.component';

@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BarComponent,
      },
    ]),
  ],
  providers: [],
})
export class BarModule {}
