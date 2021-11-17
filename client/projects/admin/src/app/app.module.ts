import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';

import { environment } from '@xyz/admin/env/environment';
import { XyzCoreModule } from '@xyz/core';
import { XyzAuthModule, JwtTokenInterceptor } from '@xyz/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
    BrowserAnimationsModule,
    XyzCoreModule.forRoot({...environment}),
    XyzAuthModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    jwtTokenInterceptor,
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
