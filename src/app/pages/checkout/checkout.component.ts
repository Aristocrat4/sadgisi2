import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { BasketTotalComponent } from './components/basket-total/basket-total.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';

@Component({
  selector: 'app-checkout',
  imports: [BasketTotalComponent, CheckoutFormComponent],
  standalone: true,
  templateUrl: './checkout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  @ViewChild('formRef') formComponent!: CheckoutFormComponent;

  submitFromParent() {
    this.formComponent.onSubmit();
  }

  isStepThree(): boolean {
    return this.formComponent?.currentStep?.() === 3;
  }
}
