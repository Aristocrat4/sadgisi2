import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-info',
  imports: [],
  standalone: true,
  templateUrl: './order-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderInfoComponent {
  @Input() registerForm!: FormGroup;
}
