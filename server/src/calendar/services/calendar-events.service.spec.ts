import { Test, TestingModule } from '@nestjs/testing';
import { CalendarEventsService } from './calendar-events.service';

describe('CalendarEventsService', () => {
  let service: CalendarEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendarEventsService],
    }).compile();

    service = module.get<CalendarEventsService>(CalendarEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
