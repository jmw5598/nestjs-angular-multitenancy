import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XyzAuthModule } from 'projects/@xyz/auth/src/public-api';

import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    XyzAuthModule
  ]
})
export class AuthenticationModule { }
