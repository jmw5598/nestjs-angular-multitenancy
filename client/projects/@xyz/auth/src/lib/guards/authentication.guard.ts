import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { AuthenticationState, AuthenticationStore } from '../store/authentication.store';
import { AuthenticatedStatus } from '@xyz/core';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private _authenticationStore: AuthenticationStore,
    private _router: Router
  ) { } 

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._authenticationStore.onStateChanges()
      .pipe(
        take(1), 
        map((state: AuthenticationState) => {
          if (state.authenticatedStatus === AuthenticatedStatus.AUTHENTICATED) {
            return true;
          }
          this._router.navigate(['/auth', 'login']);
          return false;
        }));
  }
}