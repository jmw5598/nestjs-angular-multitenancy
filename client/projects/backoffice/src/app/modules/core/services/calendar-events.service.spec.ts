import { TestBed } from '@angular/core/testing';

import { CalendarEventsService } from './calendar-events.service';

describe('CalendarEventsService', () => {
  let service: CalendarEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
