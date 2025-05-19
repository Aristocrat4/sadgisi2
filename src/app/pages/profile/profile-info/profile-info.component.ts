import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-info.component.html',
})
export class ProfileInfoComponent {
  iliauni = signal('SABA.GOGOLADZE.2@ILIAUNI.EDU.GE');
  isEditMode = false;

  profileData = {
    fullName: 'სახელი გოგოლაძე',
    email: 'SABA.GOGOLADZE.2@ILIAUNI.EDU.GE',
    birthDate: '01/10/2002',
    city: 'თბილისი',
    phone: '+995 574 151 580',
    sex: 'მამრობითი',
  };

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
