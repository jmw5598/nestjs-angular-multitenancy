import { Tenant } from "src/database/entities/common/tenant.entity";
import { UserSettings } from "./user-settings.model";

export class UserDetails {
  public id: string;
  public username: string;
  public roles: string[];
  public settings: UserSettings;
  public tenant?: Tenant
}
