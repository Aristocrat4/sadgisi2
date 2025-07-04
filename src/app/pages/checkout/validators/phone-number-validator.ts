import { AbstractControl, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }

    const trimmedValue = String(control.value).replace(/\s/g, '');

    const pattern = /^(5\d{8}|\+995\d{9})$/;

    if (!pattern.test(trimmedValue)) {
      return { pattern: true };
    }

    return null;
  };
}
