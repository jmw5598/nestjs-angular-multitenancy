import { Column, Entity, Generated, Index, OneToOne } from "typeorm";
import { BaseEntity } from "../base.entity";
import { Account } from "./account.entity";

@Entity()
export class Tenant extends BaseEntity {
  @Column({ type: 'uuid' })
  @Index()
  @Generated('uuid')
  public identifier: string;

  @Column()
  public domain: string;

  @Column({ name: 'connection_string' })
  public connectionString: string;

  @Column({ name: 'is_locked_out '})
  public isLockedOut: boolean;

  @OneToOne(type => Account, account => account.tenant)
  public account: Account;
}
