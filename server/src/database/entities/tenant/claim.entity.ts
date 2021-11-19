import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base.entity";

@Entity()
export class Claim extends BaseEntity {
  @Column()
  public type: string;

  @Column()
  public value: string;
}
