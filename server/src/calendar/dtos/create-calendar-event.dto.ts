import { IsNotEmpty } from "class-validator";
import { Address } from "src/database/entities/tenant/address.entity";
import { CalendarEventType } from "src/database/entities/tenant/calendar-event-type.entity";

export class CreateCalendarEventDto {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public startDateTime: Date;

  @IsNotEmpty()
  public endDateTime: Date;

  @IsNotEmpty()
  public isAllDate: boolean;

  @IsNotEmpty()
  public  description;

  public location: Address;

  @IsNotEmpty()
  public type: CalendarEventType;
}
