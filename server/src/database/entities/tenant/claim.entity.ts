import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "../base.entity";
import { Role } from "./role.entity";
import { User } from "./user.entity";

@Entity()
export class Claim extends BaseEntity {
  @Column()
  public type: string;

  @Column()
  public value: string;

  @ManyToMany(type => Role, role => role.claims)
  public roles: Role[];

  @ManyToMany(type => User, user => user.claims)
  public users: User[];
}
