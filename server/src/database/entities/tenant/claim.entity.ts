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
  @JoinTable({ 
    name: 'role_claim',
    joinColumn: { name: 'claim_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: "id" }
  })
  public roles: Role[];

  @ManyToMany(type => User, user => user.claims)
  @JoinTable({ 
    name: 'user_claim',
    joinColumn: { name: 'claim_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: "id" }
  })
  public users: User[];
}
