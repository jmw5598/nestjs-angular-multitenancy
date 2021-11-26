import { Entity, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Address } from './address.entity';
import { CalendarEventType } from './calendar-event-type.entity';
import { User } from './user.entity';

@Entity()
export class CalendarEvent extends BaseEntity {
  @Column({ nullable: false })
  public title: string;

  @Column({ name: 'start_date_time', nullable: false,  type: 'timestamp with time zone' })
  public startDateTime: Date;

  @Column({ name: 'end_date_time', nullable: false, type: 'timestamp with time zone' })
  public endDateTime: Date;

  @Column({ name: 'is_all_day', default: false })
  public isAllDay: boolean = false;
  
  @Column()
  public description: string;

  @ManyToOne(type => CalendarEventType, { nullable: true })
  @JoinColumn({ name: 'address_id' })
  public location: Address;

  @ManyToOne(type => CalendarEventType, { nullable: false })
  @JoinColumn({ name: 'calendar_event_type_id' })
  public type: CalendarEventType;

  @ManyToOne(type => User, { nullable: false })
  @JoinColumn({ name: 'created_by' })
  public createdBy: User;

  @ManyToOne(type => User, { nullable: false })
  @JoinColumn({ name: 'assigned_to' })
  public assignedTo: User;
}
