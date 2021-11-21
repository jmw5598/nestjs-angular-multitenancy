import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'xyz-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {
  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
