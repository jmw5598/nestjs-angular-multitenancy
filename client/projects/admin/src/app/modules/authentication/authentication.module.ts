import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XyzAuthModule } from 'projects/@xyz/auth/src/public-api';
import { XyzLoadingModule } from '@xyz/admin/modules/shared/modules';

import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    XyzAuthModule,
    XyzLoadingModule
  ]
})
export class AuthenticationModule { }
