import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../base.entity";
import { Subscription } from "./subscription.entity";

@Entity()
export class SubscriptionType extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public description: string;

  @OneToMany(type => Subscription, subscription => subscription.subscriptionType)
  public subscriptions: Subscription[];
}
