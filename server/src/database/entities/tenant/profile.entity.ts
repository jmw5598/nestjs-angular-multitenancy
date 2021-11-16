import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "../base.entity";
import { Address } from "./address.entity";
import { User } from "./user.entity";

@Entity()
export class Profile extends BaseEntity {
  @Column({ name: 'first_name' })
  public firstName: string;

  @Column({ name: 'last_name' })
  public lastName: string;

  @Column()
  public email: string;

  @OneToOne(type => Address, address => address.profile, { nullable: false })
  @JoinColumn({ name: 'address_id' })
  public address: Address;

  @Column({ name: 'address_id' })
  public addressId: string;

  @OneToOne(type => User, user => user.profile, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @Column({ name: 'user_id' })
  public userId: string;
}