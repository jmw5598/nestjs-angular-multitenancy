import { isEmail } from "class-validator";
import { connect } from "http2";
import { Address } from "src/database/entities/tenant/address.entity";
import { Profile } from "src/database/entities/tenant/profile.entity";
import { Role } from "src/database/entities/tenant/role.entity";
import { User } from "src/database/entities/tenant/user.entity";
import { Connection, Repository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { v4 as uuid } from 'uuid';

const userSeeds: User[] = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    username: 'dev@dev.com',
    password: '$2a$12$DKomgaQ50SaFm/LFpWBgCeFBxYLmjlauhuJ4n5MtvhbEGUY24M3re',
    resetToken: uuid(),
    resetTokenExpiration: new Date(),
    isEmailConfirmed: true,
    isLockedOut: false
  } as User,
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    username: 'dev2@dev.com',
    password: '$2a$12$DKomgaQ50SaFm/LFpWBgCeFBxYLmjlauhuJ4n5MtvhbEGUY24M3re',
    resetToken: uuid(),
    resetTokenExpiration: new Date(),
    isEmailConfirmed: true,
    isLockedOut: false
  } as User,
];

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(userSeeds)
      .execute();
  }
}
