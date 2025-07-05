import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const EMAIL_REGEX =
  /^(?!.*\.\..*)[a-zA-Z0-9](?:(?!\.\.)[a-zA-Z0-9!#$%&'*+/=?^._{|}~-]{0,62}[a-zA-Z0-9])?@(?=.{1,255}$)([a-zA-Z0-9](?!.*--)([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9](?!.*--)([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,63})$/;

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value.trim();

    if (!email) {
      return null;
    }

    const isValid = EMAIL_REGEX.test(email);

    return isValid ? null : { email: true };
  };
}
