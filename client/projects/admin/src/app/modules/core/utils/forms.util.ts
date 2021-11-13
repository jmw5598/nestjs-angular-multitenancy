import { FormControl, FormGroup } from '@angular/forms';

export const markFormGroupTouched = (formGroup: FormGroup) => {
  (<any>Object).values(formGroup.controls).forEach((control: any) => {
    control.markAsTouched();

    if (control.controls) {
      markFormGroupTouched(control);
    }
  });
};

export const isFormControlValid = (form: FormGroup, formControlName: string): boolean => {
  const control: FormControl = form.get(formControlName) as FormControl;
  return control?.touched && !control?.valid;
};
