import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { CalendarEventsService } from '@xyz/backoffice/modules/core/services/calendar-events.service';
import { fadeAnimation } from '@xyz/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'xyz-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation]
})
export class CalendarComponent implements OnInit {
  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  constructor(
    private _calendarEventService: CalendarEventsService
  ) { }

  ngOnInit(): void {
    const start: Date = new Date();
    const end: Date = new Date();
    this._calendarEventService.findBetweenDates(start, end)
      .pipe(take(1))
      .subscribe(events => {
        console.log("got events ", events)
      });
  }
}
