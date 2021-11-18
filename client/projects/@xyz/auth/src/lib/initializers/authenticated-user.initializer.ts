import { AuthenticatedUser } from '@xyz/core';
import { map, take } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationStore } from '../store/authentication.store';

export function authenticatedUserInitializer(
    store: AuthenticationStore, 
    authenticationSerivce: AuthenticationService) {
  
  const user: AuthenticatedUser = authenticationSerivce.getStoredAuthenticatedUser();

  return () => new Promise<boolean>(resolve => {
    if (user) {
      store.setAuthenticatedUser(user);
      store.refreshToken(user);
    } else {
      store.setAuthenticatedUser(null);
    }

    store.onStateChanges()
      .pipe(take(1), map(state => state.authenticatedUser))
      .subscribe(user => resolve(true));
  });
};