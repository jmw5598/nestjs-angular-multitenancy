import { Body, Controller, Get, Post, Query, Request, UseGuards } from '@nestjs/common';
import { startOfDay, endOfDay } from 'date-fns';

import { JwtAuthenticationGuard } from 'src/authentication/guards/jwt-authentication.guard';
import { XyzLoggerService } from 'src/common/logger/xyz-logger.service';
import { CalendarEvent } from 'src/database/entities/tenant/calendar-event.entity';
import { CreateCalendarEventDto } from '../dtos/create-calendar-event.dto';
import { CalendarEventsService } from '../services/calendar-events.service';

@UseGuards(JwtAuthenticationGuard)
@Controller('calendar/events')
export class CalendarEventsController {
  constructor(
    private readonly _logger: XyzLoggerService,
    private readonly _calendarEventsService: CalendarEventsService
  ) {
    this._logger.setContext(this.constructor.name);
  }

  @Get()
  public async getAllCalendarEvents(): Promise<CalendarEvent[]> {
    try {
      return this._calendarEventsService.findAll();
    } catch (error) {
      this._logger.error(`Error getting all calendar events`, error);
      throw error;
    }
  }

  @Post()
  public async createCalendarEvent(@Request() request, @Body() createCalendarEventDto: CreateCalendarEventDto): Promise<CalendarEvent> {
    try {
      const userId: string = request.user.userId || null;
      return this._calendarEventsService.create(userId, createCalendarEventDto);
    } catch (error) {
      this._logger.error(`Error creating calendar event`, error);
      throw error;
    }
  }

  @Get('between')
  public async getCalendarEventsBetween(
      @Request() request,
      @Query('startDate') startDate: string,
      @Query('endDate') endDate: string): Promise<CalendarEvent[]> {
    try {
      return this._calendarEventsService.findAllBetween(new Date(startDate), new Date(endDate));
    } catch (error) {
      this._logger.error(`Error getting calendar events between dates ${startDate} & ${endDate}!`, error);
      throw error;
    }
  }
}
