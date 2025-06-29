import { AbstractControl, ValidationErrors } from '@angular/forms';

export function nameAndSurnameValidator(
  control: AbstractControl,
): ValidationErrors | null {
  const value = control.value?.trim();
  if (!value) return null;

  const words = value.split(/\s+/);
  return words.length >= 2 ? null : { nameSurname: true };
}
