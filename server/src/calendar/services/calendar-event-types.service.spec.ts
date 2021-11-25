import { Test, TestingModule } from '@nestjs/testing';
import { CalendarEventTypesService } from './calendar-event-types.service';

describe('CalendarEventTypesService', () => {
  let service: CalendarEventTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendarEventTypesService],
    }).compile();

    service = module.get<CalendarEventTypesService>(CalendarEventTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
