import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';

@Entity()
export class RefreshToken extends BaseEntity {
  @Column({ nullable: false, name: 'refresh_token' }) 
  public refreshToken: string;
  
  @Column({ nullable: false, name: 'is_blacklisted', default: false })
  public isBlacklisted: boolean;

  @ManyToOne(type => User, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  public user: User;
}