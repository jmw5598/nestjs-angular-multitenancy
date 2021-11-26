import { CalendarEventTypeKey } from './calendar-event-type-key.enum';

export interface CalendarEventType {
  id: string,
  name: string,
  key: CalendarEventTypeKey,
  description: string,
  color: string
}
