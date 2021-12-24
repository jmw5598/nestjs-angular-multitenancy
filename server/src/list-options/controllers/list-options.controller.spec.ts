import { Test, TestingModule } from '@nestjs/testing';
import { ListOptionsController } from './list-options.controller';

describe('ListOptionsController', () => {
  let controller: ListOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListOptionsController],
    }).compile();

    controller = module.get<ListOptionsController>(ListOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
