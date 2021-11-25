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

  public async findAll(): Promise<CalendarEvent[]> {
    return this._repository.find();
  }

  public async findByPage(): Promise<any> {
    return null;
  }

  public async create(userId: string, createCalendarEventDto: CreateCalendarEventDto): Promise<CalendarEvent> {
    const calendarEvent: CalendarEvent = this._repository.create({
      ...createCalendarEventDto,
      createdBy: { id: userId }
    });
    return this._repository.save(calendarEvent);
  }
}
