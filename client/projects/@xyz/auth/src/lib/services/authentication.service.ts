import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { EnvironmentService, AuthenticatedUser, UserCredentials, UserSettings } from '@xyz/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class AuthenticationService {
  private readonly AUTH_USER_KEY: string = "AUTHUSER";
  private readonly REMEMBER_ME_KEY: string = "REMEMBERME";

  constructor(
    private _http: HttpClient, 
    private _env: EnvironmentService,
    @Inject(Window) private _window: Window
  ) { }

  public authenticateUser(credentials: UserCredentials): Observable<AuthenticatedUser> {
    const baseUrl: string = this._env.getAuthBaseUrl();
    return this._http.post<AuthenticatedUser>(`${baseUrl}/login`, credentials)
      .pipe(tap((user: AuthenticatedUser) => {
        this._handleRememberMe(credentials);
        this._handleAuthenticatedUser(user);
      }));
  }
  
  public refreshToken(accessToken: string, refreshToken: string): Observable<AuthenticatedUser> {
    const baseUrl: string = this._env.getAuthBaseUrl();
    return this._http.post<AuthenticatedUser>(`${baseUrl}/token`, {
      accessToken: accessToken,
      refreshToken: refreshToken
    });
  }

  public logoutUser(): void {
    this._window.localStorage.removeItem(this.AUTH_USER_KEY);  
  }

  public getStoredAuthenticatedUser(): AuthenticatedUser {
    const userJson: string | null = this._window.localStorage.getItem(this.AUTH_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }

  public getStoredRememberMe(): UserCredentials {
    const credentialsJson: string | null = this._window.localStorage.getItem(this.REMEMBER_ME_KEY);
    return credentialsJson ? JSON.parse(credentialsJson) : null;
  }

  public setStoredUserSettings(settings: UserSettings): void {
    const authenticatedUser: AuthenticatedUser = this.getStoredAuthenticatedUser();
    if (authenticatedUser && authenticatedUser?.userDetails?.settings) {
      authenticatedUser.userDetails.settings = settings;
      this._window.localStorage.setItem(this.AUTH_USER_KEY, JSON.stringify(authenticatedUser));
    }
  }

  private _handleRememberMe(credentials: UserCredentials): void {
    if (credentials.rememberMe) {
      this._window.localStorage.setItem(this.REMEMBER_ME_KEY, JSON.stringify(credentials));
    } else {
      this._window.localStorage.removeItem(this.REMEMBER_ME_KEY);
    }
  }

  private _handleAuthenticatedUser(user: AuthenticatedUser): void {
    this._window.localStorage.setItem(this.AUTH_USER_KEY, JSON.stringify(user));
  }
}
