import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import { Connection, createConnection, getConnection } from 'typeorm';

import { Tenant } from 'src/database/entities/common/tenant.entity';
import { extractSubdomainFromRequest } from './multitenancy.utils';

@Injectable()
export class TenantResolutionMiddleware implements NestMiddleware {
  constructor(
    private readonly _connection: Connection
  ) { }

  public async use(req: any, res: any, next: () => void) {
    // Find tenant from subdomain
    const subdomain: string = extractSubdomainFromRequest(req);
    const foundTenant: Tenant = await this._connection
      .getRepository(Tenant)
      .findOne(({ where: { domain: subdomain } }));

    if (!foundTenant || !foundTenant?.connectionString) {
      throw new BadRequestException('Database Connection Error', 'There is a Error with the Database!');
    }

    // Add tenant to request
    const { connectionString, ...tenant } = foundTenant;
    req.tenant = tenant;

    // Check if connections exist else try to create one.
    try {
      getConnection(tenant.identifier);
      next();
    } catch (e) {
      const createdConnection: Connection = await createConnection({
        name: tenant.identifier,
        type: 'postgres',
        url: connectionString,
        entities: ['dist/database/entities/tenant/**/*.entity.js'],
        synchronize: false,
      });

      if (createdConnection) {
        next();
      } else {
        throw new BadRequestException('Database Connection Error', 'There is a Error with the Database!');
      }
    }
  }
}
