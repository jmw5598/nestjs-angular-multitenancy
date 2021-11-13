import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const buildForgotPasswordForm: Function = (formBuilder: FormBuilder): FormGroup => formBuilder.group({
  email: ['', [
    Validators.required,
    Validators.email
  ]]
});
