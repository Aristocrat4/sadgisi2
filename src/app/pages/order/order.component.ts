import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  email = signal('sadgisileather@gmail.com');
  currentStep = signal(1);
  orderForm: FormGroup;

  cities = signal([
    { value: 'tbilisi', label: 'თბილისი' },
    { value: 'batumi', label: 'ბათუმი' },
    { value: 'kutaisi', label: 'ქუთაისი' },
  ]);

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      // Step 1 fields
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      // Step 2 fields
      product: ['', Validators.required],
      contactInfo: ['', Validators.required],
      description: [''],
    });
  }

  showError(controlName: string): boolean {
    const control = this.orderForm.get(controlName);
    return control
      ? control.invalid && (control.dirty || control.touched)
      : false;
  }

  getErrorMessage(controlName: string): string {
    const control = this.orderForm.get(controlName);
    if (control?.errors) {
      if (control.errors['required']) {
        return 'ეს ველი სავალდებულოა';
      }
      if (control.errors['email']) {
        return 'არასწორი იმეილის ფორმატი';
      }
    }
    return '';
  }

  nextStep() {
    if (this.currentStep() === 1) {
      const step1Controls = ['fullName', 'email', 'city', 'zipCode'];
      // Mark all fields as touched to trigger validation display
      step1Controls.forEach((control) => {
        this.orderForm.get(control)?.markAsTouched();
      });

      if (this.isStep1Valid()) {
        this.currentStep.set(2);
      }
    }
  }

  previousStep() {
    if (this.currentStep() === 2) {
      this.currentStep.set(1);
      // Form values are preserved automatically since we're using ReactiveFormsModule
    }
  }

  isStep1Valid(): boolean {
    const step1Controls = ['fullName', 'email', 'city', 'zipCode'];
    return step1Controls.every((control) => this.orderForm.get(control)?.valid);
  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
      // Handle form submission
    }
  }
}
