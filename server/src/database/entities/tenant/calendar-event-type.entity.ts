import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base.entity";

@Entity()
export class CalendarEventType extends BaseEntity {
  @Column({ name: 'calendar_event_type'})
  public name: string;
  
  @Column()
  public description: string;

  @Column()
  public color: string;
}