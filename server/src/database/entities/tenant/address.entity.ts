import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../base.entity";
import { Profile } from "./profile.entity";

@Entity()
export class Address extends BaseEntity {
  @Column()
  public street: string;

  @Column({ nullable: true, name: 'street_2' })
  public street2: string;

  @Column()
  public city: string;

  @Column()
  public state: string;

  @Column()
  public zip: string;

  @OneToOne(type => Profile, profile => profile.address)
  public profile: Profile;
}