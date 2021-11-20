import { Module } from '@nestjs/common';
import { AccountsController } from './controllers/accounts.controller';
import { ProfilesController } from './controllers/profiles.controller';
import { DevicesController } from './controllers/devices.controller';

@Module({
  controllers: [
    AccountsController, 
    ProfilesController, 
    DevicesController
  ]
})
export class AccountsModule {}
