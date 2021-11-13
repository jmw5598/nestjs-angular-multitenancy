import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MultitenancyModule } from 'src/common/multitenancy/multitenancy.module';
import { Tenant } from 'src/database/entities/common/tenant.entity';
import { TenantsController } from './controllers/tenants/tenants.controller';

@Module({
  imports: [
    MultitenancyModule,
    TypeOrmModule.forFeature([
      Tenant
    ])
  ],
  controllers: [
    TenantsController
  ]
})
export class TenantsModule {}
