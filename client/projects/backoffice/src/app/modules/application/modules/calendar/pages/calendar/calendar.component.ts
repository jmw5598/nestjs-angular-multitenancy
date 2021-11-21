import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { fadeAnimation } from '@xyz/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
