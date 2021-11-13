import { Controller, Get, Inject, Req } from '@nestjs/common';
import { Request } from 'express';
import { TENANT_CONNECTION } from 'src/common/multitenancy/tenant-connection.token';
import { Tenant } from 'src/database/entities/common/tenant.entity';
import { Connection } from 'typeorm';

@Controller('tenants')
export class TenantsController {
  
  constructor(
    @Inject(TENANT_CONNECTION)
    private readonly _connection: Connection
  ) { }

  @Get()
  public async GetTenants(@Req() request: Request): Promise<any> {
    const connection = this._connection;
    const tenant: Tenant = (request as any)?.tenant as Tenant || null;
    return tenant;
  }
}
