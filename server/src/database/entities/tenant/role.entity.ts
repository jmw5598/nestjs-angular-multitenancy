import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Claim } from './claim.entity';

@Entity()
export class Role extends BaseEntity {
  @Column({ nullable: false, unique: true })
  public name: string

  @ManyToMany(type => Role, { eager: false })
  @JoinTable({ 
    name: 'role_claim',
    joinColumn: { name: 'role_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'claim_id', referencedColumnName: "id" }
  })
  public claims: Claim[];
}
