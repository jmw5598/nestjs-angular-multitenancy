import { Address } from './address.model';
import { CalendarEventType } from './calendar-event-type.model';
import { User } from './user.model';

export interface CalendarEvent {
  id: string,
  title: string,
  description: string,
  startDateTime: Date,
  endDateTime: Date,
  isAllDay: boolean,
  location: Address,
  type: CalendarEventType,
  assignedTo: User,
  createdBy: User,
}