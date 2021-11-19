import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './pages/calendar/calendar.component';

import { CalendarRoutingModule } from './calendar-routing.module';

import { XyzFramingModule } from '@xyz/backoffice/modules/shared/modules/framing/framing.module';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    XyzFramingModule
  ]
})
export class CalendarModule { }
