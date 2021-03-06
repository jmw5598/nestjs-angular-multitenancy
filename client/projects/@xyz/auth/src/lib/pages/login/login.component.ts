import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { buildLoginForm } from './login-form.builder';
import { AuthenticationState, AuthenticationStore } from '../../store/authentication.store';
import { 
  AuthenticatedStatus,
  ResponseMessage, 
  ResponseStatus,
  UserCredentials,
  isFormControlValid,
  markFormGroupTouched } from '@xyz/core';

@Component({
  selector: 'xyz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  private _subscriptionSubject: Subject<void> = new Subject<void>();
  public loginForm: FormGroup;
  public loginResponseMessage: ResponseMessage | null;
  public isFormControlValid: Function;

  constructor(
    private _cd: ChangeDetectorRef,
    private _formBuilder: FormBuilder, 
    private _router: Router,
    private _authenticationStore: AuthenticationStore  
  ) {
    this.loginForm = buildLoginForm(this._formBuilder);
    this.isFormControlValid = isFormControlValid;
    this.loginResponseMessage = null;
  }

  ngOnInit(): void {
    this._authenticationStore
      .select(state => state.authenticatedStatus)
      .pipe(takeUntil(this._subscriptionSubject))
      .subscribe((status: AuthenticatedStatus | null) => {
        if (status === AuthenticatedStatus.AUTHENTICATED) {
          this._router.navigate(['/auth', 'logging-in']);
        }
      });
    
    this._authenticationStore
      .select(state => state.loginResponseMessage)
      .pipe(takeUntil(this._subscriptionSubject))
      .subscribe(message => {
        this.loginResponseMessage = message;
        this._cd.markForCheck();
      });
  }

  public submitForm(credentials: UserCredentials): void {
    markFormGroupTouched(this.loginForm);
    if (this.loginForm.invalid) return;
    this._authenticationStore.loginUser(credentials)
  }

  ngOnDestroy(): void {
    this._subscriptionSubject.next();
    this._subscriptionSubject.complete();
  }
}
