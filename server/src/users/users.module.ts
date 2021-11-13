import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entities/tenant/user.entity';
import { Role } from '../database/entities/tenant/role.entity';

import { UsersService } from './users.service';
import { MultitenancyModule } from 'src/common/multitenancy/multitenancy.module';

@Module({
  imports: [
    MultitenancyModule,
    // TypeOrmModule.forFeature([User, Role])
  ],
  exports: [
    UsersService
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {}
