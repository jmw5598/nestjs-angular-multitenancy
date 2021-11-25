import { IsNotEmpty } from "class-validator";
import { Address } from "src/database/entities/tenant/address.entity";
import { CalendarEventType } from "src/database/entities/tenant/calendar-event-type.entity";
import { User } from "src/database/entities/tenant/user.entity";

export class CreateCalendarEventDto {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public  description;

  @IsNotEmpty()
  public startDateTime: Date;

  @IsNotEmpty()
  public endDateTime: Date;

  @IsNotEmpty()
  public isAllDay: boolean;

  public location: Address;

  @IsNotEmpty()
  public type: CalendarEventType;

  @IsNotEmpty()
  public assignedTo: User;
}
