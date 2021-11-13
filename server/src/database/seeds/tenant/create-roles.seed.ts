import { Role } from "src/database/entities/tenant/role.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

const roleSeeds: Role[] = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'ADMIN'
  } as Role,
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'USER'
  } as Role,
];

export default class CreateRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Role)
      .values(roleSeeds)
      .execute();
  }
}
