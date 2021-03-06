
  
import { Entity, Column, ManyToMany, JoinTable, OneToOne, OneToMany, Generated, Index } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Role } from './role.entity';
import { RefreshToken } from './refresh-token.entity';
import { Profile } from './profile.entity';
import { Claim } from './claim.entity';
import { DeviceCode } from './device-code.entity';

@Entity({ name: 'app_user' })
export class User extends BaseEntity {
  @Column({ unique: true })
  @Index()
  public username: string;

  @Column({ nullable: false })
  public password: string;

  @Column({ name: 'reset_token' })
  @Generated('uuid')
  public resetToken: string;

  @Column({ name: 'reset_token_expiration', type: 'timestamp with time zone' })
  public resetTokenExpiration: Date;

  @Column({ name: 'is_email_confirmed'})
  public isEmailConfirmed: boolean;

  @Column({ name: 'is_locked_out' })
  public isLockedOut: boolean;

  @OneToOne(type => Profile, profile => profile.user)
  public profile: Profile;

  @ManyToMany(type => Role, { eager: false })
  @JoinTable({ 
    name: 'user_role',
    joinColumn: { name: 'user_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: "id" }
  })
  public roles: Role[];

  @ManyToMany(type => Claim, { eager: false })
  @JoinTable({ 
    name: 'user_claim',
    joinColumn: { name: 'user_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'claim_id', referencedColumnName: "id" }
  })
  public claims: Claim[];

  @ManyToMany(type => DeviceCode, { eager: false })
  @JoinTable({ 
    name: 'user_device_code',
    joinColumn: { name: 'user_id', referencedColumnName: "id" },
    inverseJoinColumn: { name: 'device_code_id', referencedColumnName: "id" }
  })
  public deviceCodes: DeviceCode[];

  @OneToMany(type => RefreshToken, token => token.id)
  public refreshTokens: RefreshToken[];
}