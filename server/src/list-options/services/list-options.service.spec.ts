import { Test, TestingModule } from '@nestjs/testing';
import { ListOptionsService } from './list-options.service';

describe('ListOptionsService', () => {
  let service: ListOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListOptionsService],
    }).compile();

    service = module.get<ListOptionsService>(ListOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
