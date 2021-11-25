import { Inject } from "@nestjs/common";
import { TENANT_CONNECTION } from "src/common/multitenancy/tenant-connection.token";
import { TenantService } from "src/common/multitenancy/tenant-service.decorator";
import { CalendarEventType } from "src/database/entities/tenant/calendar-event-type.entity";
import { Connection, Repository } from "typeorm";

@TenantService()
export class CalendarEventTypesService {
  private readonly _repository: Repository<CalendarEventType>;

  constructor(
    @Inject(TENANT_CONNECTION)
    private readonly _connection: Connection
  ) {
    this._repository = this._connection.getRepository(CalendarEventType);
  }

  public getCalendarEventTypes(): Promise<CalendarEventType[]> {
    return this._repository.find();
  }
}
