import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';
import { CalendarEventType } from 'src/database/entities/tenant/calendar-event-type.entity';
import { CalendarEventTypesService } from '../services/calendar-event-types.service';

@UseGuards(JwtAuthenticationGuard)
@Controller('calendar/event-types')
export class CalendarEventTypesController {
  constructor(
    private readonly _calendarEventTypesService: CalendarEventTypesService
  ) { }

  @Get()
  public async getAllCalendarEventTypes(): Promise<CalendarEventType[]> {
    return this._calendarEventTypesService.getCalendarEventTypes();
  }
}
