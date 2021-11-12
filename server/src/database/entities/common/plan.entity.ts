import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base.entity";

@Entity()
export class Plan extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public description: string;
}
