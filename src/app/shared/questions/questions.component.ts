import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
})
export class QuestionsComponent {
  openIndex: number | null = null;

  faqs: { question: string; answer: string; open: boolean }[] = [
    {
      question: 'გაქვთ თუ არა მიტანის სერვისი?',
      answer: 'გვაქვს გვაქვს',
      open: false,
    },
    {
      question: 'როგორ ხდება შეძენა?',
      answer: 'დააჭირეთ დაჭერას',
      open: false,
    },
    {
      question: 'პროდუქტის უკან დაბრუნება?',
      answer: 'ვითომ კი, მაგრამ ისე არა',
      open: false,
    },
    {
      question: 'რეგიონებში მიტანის სერვისი?',
      answer: 'სოფლელებს არ მივყიდით',
      open: false,
    },
  ];

  toggleFaq(index: number): void {
    if (this.openIndex === index) {
      this.openIndex = null;
    } else {
      this.openIndex = index;
    }
  }
}
