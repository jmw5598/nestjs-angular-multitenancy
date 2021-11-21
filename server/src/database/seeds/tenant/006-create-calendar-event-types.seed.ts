import { CalendarEventType } from "src/database/entities/tenant/calendar-event-type.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

const calednarEventTypeSeeds: CalendarEventType[] = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'General',
    description: 'A general calendar event',
    color: '#65ADF1'
  } as CalendarEventType,
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Meeting',
    description: 'A team meeting.',
    color: '#65ADF1'
  } as CalendarEventType,
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Estimate',
    description: 'A customer estimate appointment',
    color: '#65ADF1'
  } as CalendarEventType,
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Service',
    description: 'A customer service appointment',
    color: '#65ADF1'
  } as CalendarEventType,
];

export default class CreateCalendarEventTypes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(CalendarEventType)
      .values(calednarEventTypeSeeds)
      .execute();
  }
}
