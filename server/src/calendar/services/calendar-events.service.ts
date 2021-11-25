import { Inject } from '@nestjs/common';
import { TENANT_CONNECTION } from 'src/common/multitenancy/tenant-connection.token';
import { TenantService } from 'src/common/multitenancy/tenant-service.decorator';
import { CalendarEvent } from 'src/database/entities/tenant/calendar-event.entity';
import { Connection, Repository } from 'typeorm';
import { CreateCalendarEventDto } from '../dtos/create-calendar-event.dto';

@TenantService()
export class CalendarEventsService {
  private readonly _repository: Repository<CalendarEvent>;

  constructor(
    @Inject(TENANT_CONNECTION)
    private readonly _connection: Connection
  ) {
    this._repository = this._connection.getRepository(CalendarEvent);
  }

  public async createCalendarEvent(createCalendarEventDto: CreateCalendarEventDto): Promise<CalendarEvent> {
    // @TODO check if address exists first?
    const calendarEvent: CalendarEvent = this._repository.create({
      ...createCalendarEventDto
    });
    return this._repository.save(calendarEvent);
  }
}
