import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const buildLoginForm: Function = (formBuilder: FormBuilder): FormGroup => formBuilder.group({
  username: ['', [
    Validators.required,
    Validators.email
  ]],
  password: ['', [
    Validators.required
  ]],
  rememberMe: [false, [
    Validators.required
  ]]
});
