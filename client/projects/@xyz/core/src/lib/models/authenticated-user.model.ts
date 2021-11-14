import { UserDetails } from './user-details.model';

export interface AuthenticatedUser {
  accessToken: string;
  refreshToken: string;
  prefix: string;
  expiresIn: string;
  userDetails: UserDetails;
}
