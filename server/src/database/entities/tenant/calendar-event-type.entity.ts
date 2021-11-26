import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base.entity";

@Entity()
export class CalendarEventType extends BaseEntity {
  @Column()
  public name: string;
  
  @Column()
  public description: string;

  @Column()
  public color: string;
}