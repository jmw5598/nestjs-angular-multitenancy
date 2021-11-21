import { Injectable } from '@angular/core';
import { 
  AbstractStore, 
  ResponseMessage, 
  AuthenticatedUser, 
  AuthenticatedStatus } from '@xyz/core';

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
export class AuthenticationStore extends AbstractStore<AuthenticationState>{
  
  
  public resetState(): void {
    throw new Error('Method not implemented.');
  }
}