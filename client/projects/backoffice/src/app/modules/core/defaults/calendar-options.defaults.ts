import { CalendarOptions } from '@fullcalendar/angular';

// TODO define colors? Enum?
// TODO user tailwind colors? import tailwind.config and use colors
const TEXT_COLOR_DEFAULT: string = '#FFFFFF';
const BORDER_COLOR_DEFAULT: string = '#127ba3';
const BACKGROUND_COLOR_DEFAULT: string = '#158cba'

export const DEFAULT_CALENDAR_OPTIONS: CalendarOptions = {
  initialView: 'dayGridMonth',
  themeSystem: 'bootstrap',
  buttonText: {
    today: 'Today',
    next: 'Next',
    prev: 'Prev'
  },
  eventSources: [
  ],
  eventBackgroundColor: BACKGROUND_COLOR_DEFAULT,
  eventBorderColor: BORDER_COLOR_DEFAULT,
  eventTextColor: TEXT_COLOR_DEFAULT,
  editable: true
};
