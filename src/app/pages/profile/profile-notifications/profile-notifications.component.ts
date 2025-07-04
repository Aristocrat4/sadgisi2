import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-notifications',
  imports: [],
  standalone: true,
  templateUrl: './profile-notifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileNotificationsComponent {
  notifications = [
    'ნიკა, სადგისის მისია შენთვის შოპინგის საუკეთსო გამოცდილების შექმნაა. იმისთვის, რომ მიიღო ინფორმაცია და შეთავაზებები არ გამოგრჩეს თქვენი საკონტაქტოინფორმაციის მითითება',
    'ნიკა, სადგისის მისია შენთვის შოპინგის საუკეთსო გამოცდილების შექმნაა. იმისთვის, რომ მიიღო ინფორმაცია და შეთავაზებები არ გამოგრჩეს თქვენი საკონტაქტოინფორმაციის მითითება',
    'ნიკა, სადგისის მისია შენთვის შოპინგის საუკეთსო გამოცდილების შექმნაა. იმისთვის, რომ მიიღო ინფორმაცია და შეთავაზებები არ გამოგრჩეს თქვენი საკონტაქტოინფორმაციის მითითება',
    'ნიკა, სადგისის მისია შენთვის შოპინგის საუკეთსო გამოცდილების შექმნაა. იმისთვის, რომ მიიღო ინფორმაცია და შეთავაზებები არ გამოგრჩეს თქვენი საკონტაქტოინფორმაციის მითითება',
  ];

  deleteNotifications() {
    this.notifications = [];
  }
}
