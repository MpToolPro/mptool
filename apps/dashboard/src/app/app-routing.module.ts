import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@mptool/shared/core';
import { LoginComponent } from './login/login.component';
import { PoliticsComponent } from './politics/politics.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RestoreComponent } from './restore/restore.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/todo',
        pathMatch: 'full',
      },
      {
        path: 'todo',
        loadChildren: () =>
          import('todo/Module').then((m) => m.RemoteEntryModule),
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
      },
      {
        path: 'login',
        loadChildren: () =>
          import('login/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'loginn',
        component: LoginComponent,
      },
      {
        path: 'politics',
        component: PoliticsComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'restore',
        component: RestoreComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
