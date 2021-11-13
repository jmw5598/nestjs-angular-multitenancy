import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TenantsModule } from './admin/tenants/tenants.module';
import { TenantResolutionMiddleware } from './common/multitenancy/tenant-resolution.middleware';
import { MultitenancyModule } from './common/multitenancy/multitenancy.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(),
    TenantsModule,
    MultitenancyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(TenantResolutionMiddleware)
      .exclude('admin/(.*)')
      .forRoutes('*');
  }
}
