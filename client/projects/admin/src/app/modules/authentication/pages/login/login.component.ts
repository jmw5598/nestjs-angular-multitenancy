import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from '@xyz/admin/modules/core/models';
import { isFormControlValid, markFormGroupTouched } from '@xyz/admin/modules/core/utils';
import { buildLoginForm } from './login-form.builder';

@Component({
  selector: 'xyz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isFormControlValid: Function;

  constructor(private _formBuilder: FormBuilder, private _router: Router) {
    this.loginForm = buildLoginForm(this._formBuilder);
    this.isFormControlValid = isFormControlValid;
  }

  ngOnInit(): void {
  }

  public submitForm(credentials: UserCredentials): void {
    markFormGroupTouched(this.loginForm);
    if (this.loginForm.invalid) return;
    this._router.navigate(['/auth', 'logging-in'])
  }
}
