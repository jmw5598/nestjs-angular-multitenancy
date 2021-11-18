import { Injectable } from "@angular/core";
import { take } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

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

@Injectable()
export class AuthenticationStore extends AbstractStore<AuthenticationState> {
  constructor(private _authenticationService: AuthenticationService) {
    super(initialAuthenticationState);
  }

  public loginUser(credentials: UserCredentials): void {
    this._authenticationService.authenticateUser(credentials)
      .pipe(take(1))
      .subscribe(
        (authenticatedUser: AuthenticatedUser) => this._handleSuccessfulUserAuthentication(authenticatedUser),
        (error) => this._handleErrorOnUserAuthentication(error)
      );
  }

  public refreshToken(user: AuthenticatedUser): void {
    this._authenticationService.refreshToken(user.accessToken, user.refreshToken)
      .pipe(take(1))
      .subscribe(
        (authenticatedUser: AuthenticatedUser) => this._handleSuccessfulUserAuthentication(authenticatedUser),
        (error) => this._handleErrorOnUserAuthentication(error)
      );
  }

  public logoutUser(): void {
    this.setState({ ...initialAuthenticationState });
  }

  public setAuthenticatedUser(authenticatedUser: AuthenticatedUser | null): void {
    this.setState({
      ...this._state,
      authenticatedUser: authenticatedUser
    });
  }

  public resetState(): void {
    // @TODO
  }

  private _handleSuccessfulUserAuthentication(authenticatedUser: AuthenticatedUser): void {
    this.setState({
      ...this._state,
      loginResponseMessage: null,
      authenticatedStatus: AuthenticatedStatus.AUTHENTICATED,
      authenticatedUser: authenticatedUser
    });
  }

  private _handleErrorOnUserAuthentication(error: any): void {
    this.setState({
      ...this._state,
      loginResponseMessage: {
        status: ResponseStatus.ERROR,
        message: error.error.message
      } as ResponseMessage
    });
  }
}