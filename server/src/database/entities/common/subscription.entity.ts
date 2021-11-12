import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../base.entity";
import { SubscriptionType } from "./subscription-type.entity";
import { Account } from "./account.entity";

@Entity()
export class Subscription extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public description: string;

  // @Note - this is the key provided by the payment processor (ej stripe).
  @Column()
  @Index()
  public identifier: string;

  // @Note - may add trial_starts_on and trial_ends_on

  @Column({ name: 'starts_on', nullable: false, type: 'timestamp with time zone' })
  public startsOn: Date;

  @Column({ name: 'ends_on', nullable: false, type: 'timestamp with time zone' })
  public endsOn: Date;

  @ManyToOne(type => SubscriptionType, subscriptionType => subscriptionType.subscriptions, { nullable: false })
  @JoinColumn({ name: 'subscription_type_id' })
  public subscriptionType: SubscriptionType;

  @OneToOne(type => Account, account => account.subscription, { nullable: false })
  @JoinColumn({ name: 'account_id' })
  public account: Account;
}