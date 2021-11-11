import { BaseEntity } from "src/database/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity({ database: 'admin' })
export class Tenant extends BaseEntity {
  @Column()
  public identifier: string;

  @Column()
  public name: string;

  @Column()
  public connectionString: string;
}