import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { CalendarOptions, EventInput, FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarEventsService } from '@xyz/backoffice/modules/core/services/calendar-events.service';
import { CalendarEvent, CalendarEventType, fadeAnimation, CalendarEventTypeKey } from '@xyz/core';
import { take } from 'rxjs/operators';

import { DEFAULT_CALENDAR_OPTIONS } from '@xyz/backoffice/modules/core';
import { calendarEventsToEventInputs, calendarEventsToEventInputsGroupedByType } from '../../utils/calendar.utils';

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
    this._configureCalendarOptions();
    const start: Date = new Date();
    start.setDate(1);
    const end: Date = new Date();
    end.setDate(30);
    this._calendarEventService.findBetweenDates(start, end)
      .pipe(take(1))
      .subscribe(events => {
        if (events?.length) {
          const renderabltEventSources: { [key:string]: EventInput[] } = calendarEventsToEventInputsGroupedByType(events);

          Object.keys(renderabltEventSources).forEach(key => {
            this.calendar?.getApi()?.getEventSourceById(key)?.remove();
            this.calendar?.getApi().addEventSource({
                events: renderabltEventSources[key], id: key
              })
          });

          // const renderableEvents: EventInput[] = calendarEventsToEventInputs(events);
          // this.calendar?.getApi()?.getEventSourceById('Temp')?.remove();
          // this.calendar?.getApi().addEventSource({
          //   events: renderableEvents,
          //   id: 'Temp'
          //   // id: CalendarEventType.EVENT
          // })
        }
        console.log("got events ", events)
      });
  }


  public handleCalendarEventClick(args: any): void {
    const sourceType: CalendarEventTypeKey = args?.event?.source?.id || CalendarEventTypeKey.GENERAL;
    switch (sourceType) {
      case CalendarEventTypeKey.GENERAL:
        // this._handleCalendarEventClick(args);
        // break;
      case CalendarEventTypeKey.MEETING:
        // this._handleCalendarTodoListCLick(args);
        // break;
      default:
        alert(`envent clicked ${args.event}`);
    }
  }

  private _configureCalendarOptions(): void {
    this.calendarOptions = DEFAULT_CALENDAR_OPTIONS;
    // this.calendarOptions.dateClick = this.handleCalendarDateClick.bind(this);
    this.calendarOptions.eventClick = this.handleCalendarEventClick.bind(this);
    // this.calendarOptions.loading = this.handleCalendarEventSourceLoading.bind(this);
    // this.calendarOptions.eventDrop = this.handleCalendarEventEdit.bind(this);
    // this.calendarOptions.eventResize = this.handleCalendarEventEdit.bind(this);
    // this.calendarOptions.eventDidMount = this.handleCalendarEvevntDidMount.bind(this);
    // this.calendarOptions.eventSources = [
    //   { id: CalendarEventType.EVENT, events: this.handleCalendarEventsFetch.bind(this) },
    //   { id: CalendarEventType.TODO_LIST, events: this.handleCalendarTodoListsFetch.bind(this) }
    // ];
    // this.calendarOptions.eventDataTransform = this.handleEventDataTransform.bind(this);
  }
}
