import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLogin = signal(true); // Toggle between login and registration
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      contactInfo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  showError(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return control
      ? control.invalid && (control.dirty || control.touched)
      : false;
  }

  getErrorMessage(form: FormGroup, controlName: string): string {
    const control = form.get(controlName);
    if (control?.errors) {
      if (control.errors['required']) {
        return 'ეს ველი სავალდებულოა';
      }
      if (control.errors['email']) {
        return 'არასწორი იმეილის ფორმატი';
      }
      if (control.errors['minlength']) {
        return 'პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს';
      }
      if (control.errors['passwordMismatch']) {
        return 'პაროლები არ ემთხვევა';
      }
    }
    return '';
  }

  toggleAuthMode() {
    this.isLogin.update((current) => !current);
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log('Login form submitted', this.loginForm.value);
      // Handle login logic
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      console.log('Register form submitted', this.registerForm.value);
      // Handle registration logic
    } else {
      this.markFormGroupTouched(this.registerForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
