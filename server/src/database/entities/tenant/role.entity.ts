import { Entity, Column, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Claim } from './claim.entity';
import { User } from './user.entity';

@Entity()
export class Role extends BaseEntity {
  @Column({ nullable: false, unique: true })
  public name: string

  @ManyToMany(type => User, user => user.roles)
  @JoinTable({ 
    name: 'user_role',
    joinColumn: { name: 'role_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: "id" }
  })
  public users: User[];

  @ManyToMany(type => Claim, claim => claim.roles)
  @JoinTable({ 
    name: 'role_claim',
    joinColumn: { name: 'role_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'claim_id', referencedColumnName: "id" }
  })
  public claims: Claim[];
}
