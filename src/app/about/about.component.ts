// about.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit(): void {
    // Sparar i local storage
    const contactData = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    const previousData = localStorage.getItem('contactData');
    const dataToStore = previousData
      ? [...JSON.parse(previousData), contactData]
      : [contactData];

    localStorage.setItem('contactData', JSON.stringify(dataToStore));

    // Skriv ut i konsollen
    console.log('Kontaktformulär skickat:', contactData);
  }
}