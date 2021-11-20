import { Module } from '@nestjs/common';
import { AccountsController } from './controllers/accounts.controller';
import { ProfilesController } from './controllers/profiles.controller';
import { DevicesController } from './controllers/devices.controller';
import { DevicesService } from './services/devices.service';
import { MultitenancyModule } from 'src/common/multitenancy/multitenancy.module';

@Module({
  imports: [
    MultitenancyModule
  ],
  controllers: [
    AccountsController, 
    ProfilesController, 
    DevicesController
  ],
  providers: [
    DevicesService
  ]
})
export class AccountsModule {}
