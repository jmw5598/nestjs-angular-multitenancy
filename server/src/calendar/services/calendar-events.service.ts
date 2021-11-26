import { Inject } from '@nestjs/common';
import { startOfDay, endOfDay,  } from 'date-fns';

import { TENANT_CONNECTION } from 'src/common/multitenancy/tenant-connection.token';
import { TenantService } from 'src/common/multitenancy/tenant-service.decorator';
import { CalendarEvent } from 'src/database/entities/tenant/calendar-event.entity';
import { Between, Connection, IsNull, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
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

  public async findAllBetween(startDate: Date, endDate: Date): Promise<CalendarEvent[]> {
    const startDateAdjusted: Date = new Date(startDate.valueOf() + startDate.getTimezoneOffset() * 60 * 1000)
    const start: string = startOfDay(startDateAdjusted).toISOString();
    const endDateAdjusted: Date = new Date(endDate.valueOf() + endDate.getTimezoneOffset() * 60 * 1000);
    const end: string = endOfDay(endDateAdjusted).toISOString();
    
    return this._repository.find({
      relations: ['type', 'createdBy', 'assignedTo'],
      where: [
        // If start date 
        {
          // account: { id: accountId },
          deletedAt: IsNull(),
          startDateTime: Between(start, end)
        },
        {
          // account: { id: accountId },
          deletedAt: IsNull(),
          endDateTime: Between(start, end)
        },
        {
          // account: { id: accountId },
          deletedAt: IsNull(),
          startDateTime: LessThanOrEqual(start),
          endDateTime: MoreThanOrEqual(end)
        }
      ],
      order: {
        startDateTime: 'ASC'
      }
    });
  }
}
