import { Module } from '@nestjs/common';

import { LoggerModule } from 'src/common/logger/logger.module';

import { MultitenancyModule } from 'src/common/multitenancy/multitenancy.module';
import { CalendarEventsController } from './controllers/calendar-events.controller';
import { CalendarEventsService } from './services/calendar-events.service';
import { CalendarEventTypesService } from './services/calendar-event-types.service';
import { CalendarEventTypesController } from './controllers/calendar-event-types.controller';
import { AuthenticationModule } from 'src/authentication/authentication.module';

@Module({
  imports: [
    MultitenancyModule,
    AuthenticationModule,
    LoggerModule
  ],
  controllers: [
    CalendarEventsController,
    CalendarEventTypesController
  ],
  providers: [
    CalendarEventsService,
    CalendarEventTypesService
  ]
})
export class CalendarModule {}
