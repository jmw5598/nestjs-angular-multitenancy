import { Injectable } from "@angular/core";
import { take } from 'rxjs/operators';

import { AuthenticationService } from '../services';

import { 
  AbstractStore, 
  AuthenticatedStatus, 
  AuthenticatedUser, 
  ResponseMessage, 
  ResponseStatus, 
  UserCredentials } from '@xyz/core';

export interface AuthenticationState {
  loginResponseMessage: ResponseMessage | null,
  authenticatedStatus: AuthenticatedStatus | null,
  authenticatedUser: AuthenticatedUser | null
}

export const initialAuthenticationState: AuthenticationState = {
  loginResponseMessage: null,
  authenticatedUser: null,
  authenticatedStatus: AuthenticatedStatus.UNAUTHENTICATED
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStore extends AbstractStore<AuthenticationState> {
  constructor(private _authenticationService: AuthenticationService) {
    super(initialAuthenticationState);
  }

  public loginUser(credentials: UserCredentials): void {
    this._authenticationService.authenticateUser(credentials)
      .pipe(take(1))
      .subscribe(
        (authenticatedUser: AuthenticatedUser) => {
          this.setState({
            ...this._state,
            loginResponseMessage: null,
            authenticatedStatus: AuthenticatedStatus.AUTHENTICATED,
            authenticatedUser: authenticatedUser
          });
        },
        (error) => {
          this.setState({
            ...this._state,
            loginResponseMessage: {
              status: ResponseStatus.ERROR,
              message: error.error.message
            } as ResponseMessage
          });
        }
      );
  }

  public logoutUser(): void {
    this.setState({ ...initialAuthenticationState });
  }

  public resetState(): void {
    // @TODO
  }
}