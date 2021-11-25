import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';
import { XyzLoggerService } from 'src/common/logger/xyz-logger.service';
import { CalendarEventType } from 'src/database/entities/tenant/calendar-event-type.entity';
import { CalendarEventTypesService } from '../services/calendar-event-types.service';

@UseGuards(JwtAuthenticationGuard)
@Controller('calendar/event-types')
export class CalendarEventTypesController {
  constructor(
    private readonly _logger: XyzLoggerService,
    private readonly _calendarEventTypesService: CalendarEventTypesService
  ) {
    this._logger.setContext(this.constructor.name);
  }

  @Get()
  public async getAllCalendarEventTypes(@Request() request): Promise<CalendarEventType[]> {
    try {
      return this._calendarEventTypesService.getCalendarEventTypes();
    } catch (error) {
      this._logger.error(`Error getting all calendar event types`, error);
      throw error;
    } 
  }
}
