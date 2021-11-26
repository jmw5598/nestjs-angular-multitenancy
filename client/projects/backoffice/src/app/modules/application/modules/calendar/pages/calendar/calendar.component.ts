import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { CalendarOptions, EventInput, FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarEventsService } from '@xyz/backoffice/modules/core/services/calendar-events.service';
import { CalendarEvent, fadeAnimation } from '@xyz/core';
import { take } from 'rxjs/operators';

import { DEFAULT_CALENDAR_OPTIONS } from '@xyz/backoffice/modules/core';
import { calendarEventsToEventInputs } from '../../utils/calendar.utils';

@Component({
  selector: 'xyz-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation]
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar', { static: true }) 
  public calendar!: FullCalendarComponent;

  public calendarOptions: CalendarOptions = DEFAULT_CALENDAR_OPTIONS;

  constructor(
    private _calendarEventService: CalendarEventsService
  ) { }

  ngOnInit(): void {
    const start: Date = new Date();
    const end: Date = new Date();
    this._calendarEventService.findBetweenDates(start, end)
      .pipe(take(1))
      .subscribe(events => {
        if (events?.length) {
          const renderableEvents: EventInput[] = calendarEventsToEventInputs(events);
          this.calendar?.getApi()?.getEventSourceById('Temp')?.remove();
          this.calendar?.getApi().addEventSource({
            events: renderableEvents,
            id: 'Temp'
            // id: CalendarEventType.EVENT
          })
        }
        console.log("got events ", events)
      });
  }
}
