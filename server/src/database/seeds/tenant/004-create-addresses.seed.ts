import { Address } from "src/database/entities/tenant/address.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";


const addressSeeds: Address[] = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    street: '123 Main Street',
    street2: null,
    city: 'Detroit',
    state: 'MI',
    zip: '48207'
  } as Address,
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    street: '321 Jefferson Ave',
    street2: 'Suite 1111',
    city: 'Detroit',
    state: 'MI',
    zip: '48207'
  } as Address,
];

export default class CreateAddresses implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Address)
      .values(addressSeeds)
      .execute();
  }
}