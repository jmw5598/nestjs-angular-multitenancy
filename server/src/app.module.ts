import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TenantsModule } from './admin/tenants/tenants.module';
import { TenantResolutionMiddleware } from './common/multitenancy/tenant-resolution.middleware';
import { MultitenancyModule } from './common/multitenancy/multitenancy.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { CalendarModule } from './calendar/calendar.module';
import { FirebaseModule } from 'nestjs-firebase';
import { NotificationsModule } from './common/notifications/notifications.module';
import { ListOptionsModule } from './list-options/list-options.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(),
    TenantsModule,
    MultitenancyModule,
    AuthenticationModule,
    UsersModule,
    AccountsModule,
    CalendarModule,
    FirebaseModule.forRoot({ googleApplicationCredential: "xyz-project-5d166-firebase-adminsdk-zvnev-7fa05cd1de.json" }),
    NotificationsModule,
    ListOptionsModule
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
