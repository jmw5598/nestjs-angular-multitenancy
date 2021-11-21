import { Address } from "src/database/entities/tenant/address.entity";
import { Profile } from "src/database/entities/tenant/profile.entity";
import { User } from "src/database/entities/tenant/user.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

const profileSeeds: Profile[] = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    firstName: 'John',
    lastName: 'Doe',
  } as Profile,
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    firstName: 'Jane',
    lastName: 'Doe',
  } as Profile,
];

export default class CreateProfiles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const users: User[] = await connection
      .createQueryBuilder()
      .select()
      .from(User, 'user')
      .execute();

    const addresses: Address[] = await connection
      .createQueryBuilder()
      .select()
      .from(Address, 'address')
      .execute();

    // @TODO probably have ot add id property for FKs on entities so it can be assinged here.
    const profiles: any[] = profileSeeds.map((profile, index) => ({
      ...profile,
      email: users[index].username,
      addressId: addresses[index].id,
      userId: users[index].id
    } as any));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Profile)
      .values(profiles)
      .execute();
  }
}
