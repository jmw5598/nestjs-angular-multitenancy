import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './pages/application/application.component';
import { XyzNavbarModule } from '../shared/modules/navbar/navbar.module';

@NgModule({
  declarations: [
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    XyzNavbarModule
  ]
})
export class ApplicationModule { }
