import { Module } from '@nestjs/common';

import { LoggerModule } from 'src/common/logger/logger.module';
import { MultitenancyModule } from 'src/common/multitenancy/multitenancy.module';

import { ListOptionsController } from './controllers/list-options.controller';
import { ListOptionsService } from './services/list-options.service';

@Module({
  imports: [
    MultitenancyModule,
    LoggerModule
  ],
  controllers: [
    ListOptionsController
  ],
  providers: [
    ListOptionsService
  ]
})
export class ListOptionsModule {}
