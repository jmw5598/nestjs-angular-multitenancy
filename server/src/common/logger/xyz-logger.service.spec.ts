import { Test, TestingModule } from '@nestjs/testing';
import { XyzLoggerService } from './xyz-logger.service';

describe('XyzLoggerService', () => {
  let service: XyzLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XyzLoggerService],
    }).compile();

    service = module.get<XyzLoggerService>(XyzLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
