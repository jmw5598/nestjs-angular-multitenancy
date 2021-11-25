import { Module } from '@nestjs/common';
import { XyzLoggerService } from './xyz-logger.service';

@Module({
  providers: [
    XyzLoggerService
  ],
  exports: [
    XyzLoggerService
  ]
})
export class LoggerModule {}
