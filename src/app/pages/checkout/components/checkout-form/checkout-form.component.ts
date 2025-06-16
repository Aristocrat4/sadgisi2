import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { OrderInfoComponent } from '../order-info/order-info.component';

@Component({
  selector: 'app-checkout-form',
  imports: [ReactiveFormsModule, CommonModule, OrderInfoComponent],
  standalone: true,
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css',
})
export class CheckoutFormComponent {
  currentStep = signal(1);
  registerForm: FormGroup;
 cities = signal([
    { value: 'tbilisi', label: 'თბილისი' },
    { value: 'batumi', label: 'ბათუმი' },
    { value: 'kutaisi', label: 'ქუთაისი' },
  ]);
  steps = ['საკონტაქტო ინფრომაცია', 'ლოკაცია', 'გადახდა'];

  goToStep(stepNumber: number): void {
    if (stepNumber <= this.currentStep()) {
      this.currentStep.set(stepNumber);
    }
  }

   constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nameAndSurname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: [''],
      address: ['', Validators.required],
      comment: [''],
      cardInfo: ['', [Validators.required, Validators.pattern(/^[0-9]{1,12}$/)]],
    });
  }

  nextStep(): void {
    if (!this.isCurrentStepValid()) {
      this.markCurrentStepControlsTouched();
      return;
    }

    this.currentStep.update((current) => current + 1);
  }

  markCurrentStepControlsTouched(): void {
    const controls =
      {
        1: ['nameAndSurname', 'email', 'phoneNumber'],
        2: ['city', 'zipCode', 'address'],
      }[this.currentStep()] || [];

    controls.forEach((name) => {
      const control = this.registerForm.get(name);
      control?.markAsTouched();
      control?.updateValueAndValidity();
    });
  }

  prevStep() {
    if (this.currentStep() > 1) this.currentStep.update((n) => n - 1);
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
          !!this.registerForm.get('zipCode')?.valid &&
          !!this.registerForm.get('address')?.valid
        );
      default:
        return true;
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Submitted', this.registerForm.value);
    } else {
      this.markTouched();
    }
  }

  private markTouched() {
    Object.values(this.registerForm.controls).forEach((c) => c.markAsTouched());
  }
}
