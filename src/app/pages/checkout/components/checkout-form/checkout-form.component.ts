import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { OrderInfoComponent } from '../order-info/order-info.component';
import { emailValidator } from '../../validators/email-validator';
import { nameAndSurnameValidator } from '../../validators/nameAndUsernameValidator';
import { phoneNumberValidator } from '../../validators/phone-number-validator';

@Component({
  selector: 'app-checkout-form',
  imports: [ReactiveFormsModule, CommonModule, OrderInfoComponent],
  standalone: true,
  templateUrl: './checkout-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutFormComponent {
  currentStep = signal<number>(1);

  registerForm: FormGroup;

  cities = signal<{ value: string; label: string }[]>([
    { value: 'tbilisi', label: 'თბილისი' },
    { value: 'batumi', label: 'ბათუმი' },
    { value: 'kutaisi', label: 'ქუთაისი' },
  ]);

  steps: string[] = ['საკონტაქტო ინფრომაცია', 'ლოკაცია', 'გადახდა'];

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nameAndSurname: ['', [Validators.required, nameAndSurnameValidator]],
      email: ['', [Validators.required, emailValidator()]],
      phoneNumber: ['', [Validators.required, phoneNumberValidator()]],
      city: ['', Validators.required],
      zipCode: [''],
      address: ['', Validators.required],
      comment: [''],
      cardInfo: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{1,12}$/)],
      ],
    });
  }

  goToStep(stepNumber: number): void {
    if (stepNumber <= this.currentStep()) {
      this.currentStep.set(stepNumber);
    }
  }

  nextStep(): void {
    if (!this.isCurrentStepValid()) {
      this.markCurrentStepControlsTouched();
      return;
    }
    this.currentStep.update((current) => current + 1);
  }

  markCurrentStepControlsTouched(): void {
    const controlsToMark =
      {
        1: ['nameAndSurname', 'email', 'phoneNumber'],
        2: ['city', 'zipCode', 'address'],
      }[this.currentStep()] || [];

    controlsToMark.forEach((name) => {
      const control = this.registerForm.get(name);
      control?.markAsTouched();
      control?.updateValueAndValidity();
    });
  }

  prevStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update((n) => n - 1);
    }
  }

  showError(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    return control
      ? control.invalid && (control.dirty || control.touched)
      : false;
  }

  getErrorMessage(controlName: string): string {
    const control = this.registerForm.get(controlName);
    if (control?.errors) {
      if (control.errors['required']) return 'ეს ველი სავალდებულოა';
      if (control.errors['email']) return 'არასწორი იმეილის ფორმატი';
      if (control.errors['pattern']) return 'შეიყვანეთ სწორი მობილურის ნომერი';
      if (control.errors['nameSurname']) return 'მიუთითეთ სახელი და გვარი';
    }
    return '';
  }

  isCurrentStepValid(): boolean {
    switch (this.currentStep()) {
      case 1:
        return (
          !!this.registerForm.get('nameAndSurname')?.valid &&
          !!this.registerForm.get('email')?.valid &&
          !!this.registerForm.get('phoneNumber')?.valid
        );
      case 2:
        return (
          !!this.registerForm.get('city')?.valid &&
          !!this.registerForm.get('address')?.valid
        );
      case 3:
        return !!this.registerForm.get('cardInfo')?.valid;
      default:
        return true;
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
    } else {
      this.markAllControlsTouched();
      console.log('Form is invalid. Please check the errors.');
    }
  }

  private markAllControlsTouched(): void {
    Object.values(this.registerForm.controls).forEach((control) => {
      control.markAsTouched();
      control.updateValueAndValidity();
    });
  }
}
