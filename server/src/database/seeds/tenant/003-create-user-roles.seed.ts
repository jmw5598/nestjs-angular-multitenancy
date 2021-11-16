import { Role } from "src/database/entities/tenant/role.entity";
import { User } from "src/database/entities/tenant/user.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateUserRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const users: User[] = await connection
      .createQueryBuilder()
      .select()
      .from(User, 'user')
      .execute();

    const roles: Role[] = await connection
      .createQueryBuilder()
      .select()
      .from(Role, 'role')
      .execute();

    const userRoles: any = users
      .map((user, index) => roles.map(role => ({ user_id: user.id, role_id: role.id })))
      .reduce((flat, userRoles) => flat.concat(userRoles), []);

    await connection
      .createQueryBuilder()
      .insert()
      .into('user_role')
      .values(userRoles)
      .execute();
  }
}