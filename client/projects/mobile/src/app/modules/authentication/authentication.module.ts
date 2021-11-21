import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular'

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { LoginComponent } from './pages/login/login.component';
import { LoggingInComponent } from './pages/logging-in/logging-in.component';
import { LoggingOutComponent } from './pages/logging-out/logging-out.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    LoggingInComponent,
    LoggingOutComponent,
    ForgotPasswordComponent
  ],
  imports: [
    NativeScriptCommonModule,
    AuthenticationRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthenticationModule { }
