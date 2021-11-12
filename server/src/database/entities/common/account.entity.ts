import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../entities/base.entity";
import { Tenant } from "./tenant.entity";
import { Subscription } from "./subscription.entity";

@Entity()
export class Account extends BaseEntity {
  @Column()
  public name: string;

  @OneToOne(type => Tenant, tenant => tenant.account, { nullable: false })
  public tenant: Tenant;

  @OneToOne(type => Subscription, subscription => subscription.account)
  public subscription: Subscription;
}
