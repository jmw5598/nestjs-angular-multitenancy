import { EventInput } from '@fullcalendar/angular';
import { CalendarEvent } from '@xyz/core';

export const calendarEventToEventInput: Function = (event: CalendarEvent): EventInput => ({
  id: event.id.toString(),
  title: event.title,
  start: event.startDateTime,
  end: event.endDateTime,
  allDay: event.isAllDay,
  extendedProps: event,
  color: event?.type?.color,
  sourceId: event?.type?.key
}) as EventInput;

export const calendarEventsToEventInputs: Function = (events: CalendarEvent[]): EventInput[] => {
  return events?.map((event: CalendarEvent) => 
      calendarEventToEventInput(event)) as EventInput[];
}

export const calendarEventsToEventInputsGroupedByType = (events: CalendarEvent[]): { [key: string]: EventInput[] } => {
  return events.reduce((obj, event) => {
    if (!obj.hasOwnProperty(event?.type?.key)) {
      obj[event.type.key] = [];
    }
    obj[event.type.key].push(calendarEventToEventInput(event));
    return obj;
  }, {} as { [key: string]: EventInput[] });
}
  