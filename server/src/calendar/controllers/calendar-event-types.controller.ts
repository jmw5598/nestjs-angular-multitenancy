import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';
import { Tenant } from 'src/database/entities/common/tenant.entity';
import { CalendarEventType } from 'src/database/entities/tenant/calendar-event-type.entity';
import { CalendarEventTypesService } from '../services/calendar-event-types.service';

@UseGuards(JwtAuthenticationGuard)
@Controller('calendar/event-types')
export class CalendarEventTypesController {
  constructor(
    private readonly _calendarEventTypesService: CalendarEventTypesService
  ) { }

  @Get()
  public async getAllCalendarEventTypes(@Request() request): Promise<CalendarEventType[]> {
    const tenant: Tenant = request.tenant as Tenant;
    return this._calendarEventTypesService.getCalendarEventTypes();
  }
}
