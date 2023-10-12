import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooComponent } from './foo.component';

@NgModule({
  declarations: [FooComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FooComponent,
      },
    ]),
  ],
  providers: [],
})
export class FooModule {}
