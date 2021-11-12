import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import { Connection, createConnection, getConnection } from 'typeorm';

import { Tenant } from 'src/database/entities/common/tenant.entity';

@Injectable()
export class TenantResolutionMiddleware implements NestMiddleware {
  constructor(
    private readonly _connection: Connection
  ) { }

  public async use(req: any, res: any, next: () => void) {
    const { connectionString, ...tenant }: Tenant = await this._connection
      .getRepository(Tenant)
      .findOne(({ where: { host: req.headers.host } }));
    
    req.tenant = tenant;

    if (!tenant || !connectionString) {
      throw new BadRequestException('Database Connection Error', 'There is a Error with the Database!');
    }

    try {
      getConnection(tenant.identifier);
      next();
    } catch (e) {
      const createdConnection: Connection = await createConnection({
        name: tenant.identifier,
        type: 'postgres',
        url: connectionString,
        entities: ['src/database/entities/tenant/**/*.entity.ts'],
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
