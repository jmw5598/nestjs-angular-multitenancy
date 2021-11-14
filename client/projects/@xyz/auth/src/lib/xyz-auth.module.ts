import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthenticationService } from './services/authentication.service';
import { JwtTokenInterceptor } from './interceptors/jwt-token.interceptor';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoggingInComponent } from './pages/logging-in/logging-in.component';
import { LoggingOutComponent } from './pages/logging-out/logging-out.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationStore } from './store/authentication.store';

@NgModule({
  declarations: [
    AuthenticationComponent,
    ForgotPasswordComponent,
    LoggingInComponent,
    LoggingOutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    AuthenticationComponent,
    ForgotPasswordComponent,
    LoggingInComponent,
    LoggingOutComponent,
    LoginComponent
  ],
})
export class XyzAuthModule {
  public static forRoot(): ModuleWithProviders<XyzAuthModule> {
    return {
      ngModule: XyzAuthModule,
      providers: [
        AuthenticationService,
        AuthenticationGuard,
        AuthenticationStore
      ]
    }
  }
}
