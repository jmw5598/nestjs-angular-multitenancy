import { Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Tenant } from 'src/database/entities/common/tenant.entity';
import { Connection, getConnection } from 'typeorm';
import { extractSubdomainFromRequest } from './multitenancy.utils';
import { TENANT_CONNECTION } from './tenant-connection.token';

@Module({
  providers: [
    {
      provide: TENANT_CONNECTION,
      inject: [
        REQUEST,
        Connection,
      ],
      scope: Scope.REQUEST,
      useFactory: async (request, connection) => {
        const domain: string = extractSubdomainFromRequest(request);
        const tenant: Tenant = await connection.getRepository(Tenant).findOne(({ where: { domain: domain } }));
        return getConnection(tenant.identifier);
      }
    }
  ],
  exports: [
    TENANT_CONNECTION
  ]
})
export class MultitenancyModule {}
