import { Column, Entity, Index } from "typeorm";
import { BaseEntity } from "../base.entity";

@Entity()
export class DeviceCode extends BaseEntity {
  @Column()
  @Index()
  public token: string;
}