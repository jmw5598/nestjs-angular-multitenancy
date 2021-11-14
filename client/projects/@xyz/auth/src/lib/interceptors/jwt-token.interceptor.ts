import { Injectable, OnDestroy } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthenticationState, AuthenticationStore } from '../store/authentication.store';
import { AuthenticatedStatus } from '@xyz/core';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor, OnDestroy {
  private _subscriptionSubject: Subject<void> = new Subject<void>();
  private _authenticatedState!: AuthenticationState | null;

  constructor(private _authenticationStore: AuthenticationStore) {
    this._authenticationStore.onStateChanges()
      .pipe(takeUntil(this._subscriptionSubject))
      .subscribe((state: AuthenticationState) => this._authenticatedState = state);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this._authenticatedState?.authenticatedStatus === AuthenticatedStatus.AUTHENTICATED) {
      const accessToken: string = this._authenticatedState?.authenticatedUser?.accessToken || '';
      request = this._addAuthorizationHeader(request, accessToken);
    }
    
    return next.handle(request);
    // .pipe(catchError(error => {
    //   if (error instanceof HttpErrorResponse && error.status === 401 && !request.url.includes('auth/login')) {
    //     return this._handle401Error(request, next);
    //   } else {
    //     return throwError(error);
    //   }
    // }));
  }

  private _addAuthorizationHeader(request: HttpRequest<unknown>, accessToken: string): HttpRequest<unknown> {
    const prefix: string = this._authenticatedState?.authenticatedUser?.prefix || '';
    const authorizationHeaderValue: string = `${prefix} ${accessToken}`;
    return request.clone({
      setHeaders: {
        Authorization: authorizationHeaderValue 
      }
    });
  }

  ngOnDestroy() {
    this._subscriptionSubject.next();
    this._subscriptionSubject.complete();
  }
}
