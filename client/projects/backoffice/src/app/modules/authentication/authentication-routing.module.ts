import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AuthenticationComponent,
  ForgotPasswordComponent,
  LoggingInComponent,
  LoggingOutComponent,
  LoginComponent } from '@xyz/auth';

const routes: Routes = [
  {
    path: 'logging-in',
    component: LoggingInComponent
  },
  {
    path: 'logging-out',
    component: LoggingOutComponent
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
