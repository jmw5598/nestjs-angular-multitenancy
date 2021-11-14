import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XyzAuthModule } from '@xyz/auth';

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
