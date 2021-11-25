import { Controller } from '@nestjs/common';
import { CalendarEventsService } from '../services/calendar-events.service';

@Controller('calendar/events')
export class CalendarEventsController {
  constructor(
    private readonly _calendarEventsService: CalendarEventsService
  ) { }
}
