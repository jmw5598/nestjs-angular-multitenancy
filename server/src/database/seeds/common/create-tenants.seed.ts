import { Tenant } from "src/database/entities/common/tenant.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { v4 as uuid } from 'uuid';

const tenantSeeds: Tenant[] = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    identifier: uuid(), 
    domain: 'localhost', 
    connectionString: 'postgresql://tenantadmin:tenantadmin@localhost:5432/tenant_admin'
  } as Tenant,
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    identifier: uuid(), 
    domain: 'admin', 
    connectionString: 'postgresql://tenantadmin:tenantadmin@localhost:5432/tenant_admin'
  } as Tenant,
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    identifier: uuid(), 
    domain: 'tenant1', 
    connectionString: 'postgresql://tenant1:tenant1@localhost:5432/tenant_1'
  } as Tenant,
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    identifier: uuid(), 
    domain: 'tenant2', 
    connectionString: 'postgresql://tenant2:tenant2@localhost:5432/tenant_2'
  } as Tenant,
];

export default class CreateTenants implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Tenant)
      .values(tenantSeeds)
      .execute();
  }
}
