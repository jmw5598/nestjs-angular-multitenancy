import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '@xyz/backoffice/env/environment';
import { JwtTokenInterceptor, XyzAuthModule } from '@xyz/auth';
import { XyzCoreModule } from '@xyz/core';

const jwtTokenInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtTokenInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    XyzCoreModule.forRoot({ ...environment }),
    XyzAuthModule.forRoot()
  ],
  providers: [
    jwtTokenInterceptor,
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
