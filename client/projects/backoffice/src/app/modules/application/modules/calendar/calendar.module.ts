import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';

import { XyzFramingModule } from '@xyz/backoffice/modules/shared/modules';
import { NgIconsModule } from '@ng-icons/core';

import {
  HeroCalendar,
  HeroCog
} from '@ng-icons/heroicons';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FullCalendarModule,
    XyzFramingModule,
    NgIconsModule.withIcons({
      HeroCalendar,
      HeroCog
    })
  ]
})
export class CalendarModule { }
