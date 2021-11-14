import { UserSettings } from './user-settings.model';

export interface UserDetails {
  id: number;
  username: string;
  roles: string[];
  settings: UserSettings;
}
