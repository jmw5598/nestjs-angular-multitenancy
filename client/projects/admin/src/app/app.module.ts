import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from '@xyz/admin/env/environment';
import { XyzCoreModule } from '@xyz/core';
import { 
  XyzAuthModule, 
  JwtTokenInterceptor, 
  AuthenticationStore, 
  AuthenticationService, 
  authenticatedUserInitializer } from '@xyz/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';

const jwtTokenInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtTokenInterceptor,
  multi: true
}

const authenticatedUserAppInitializer = { 
  provide: APP_INITIALIZER, 
  useFactory: authenticatedUserInitializer, 
  multi: true,
  deps: [AuthenticationStore, AuthenticationService]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    XyzCoreModule.forRoot({...environment}),
    XyzAuthModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    jwtTokenInterceptor,
    authenticatedUserAppInitializer,
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
