import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entities/tenant/user.entity';
import { Role } from '../database/entities/tenant/role.entity';

import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role])
  ],
  exports: [
    UsersService
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule {}
