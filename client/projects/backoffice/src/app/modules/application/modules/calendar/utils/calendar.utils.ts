import { EventInput } from '@fullcalendar/angular';
import { CalendarEvent } from '@xyz/core';

export const calendarEventsToEventInputs: Function = (events: CalendarEvent[]): EventInput[] => {
    return events?.map((event: CalendarEvent) => {
      return {
        id: event.id.toString(),
        title: event.title,
        start: event.startDateTime,
        end: event.endDateTime,
        allDay: event.isAllDay,
        extendedProps: event,
        color: event?.type?.color,
        sourceId: 'Temp'
        // sourceId: CalendarEventType.EVENT
      } as EventInput
    }) as EventInput[];
  }
  