import { Test, TestingModule } from '@nestjs/testing';
import { CalendarEventTypesController } from './calendar-event-types.controller';

describe('CalendarEventTypesController', () => {
  let controller: CalendarEventTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarEventTypesController],
    }).compile();

    controller = module.get<CalendarEventTypesController>(CalendarEventTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
