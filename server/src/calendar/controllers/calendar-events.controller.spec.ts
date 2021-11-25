import { Test, TestingModule } from '@nestjs/testing';
import { CalendarEventsController } from './calendar-events.controller';

describe('CalendarEventsController', () => {
  let controller: CalendarEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarEventsController],
    }).compile();

    controller = module.get<CalendarEventsController>(CalendarEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
