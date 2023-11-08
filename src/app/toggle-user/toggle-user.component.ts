import { Component } from '@angular/core';
import { ActiveUserService } from '../active-user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-toggle-user',
  templateUrl: './toggle-user.component.html',
  styleUrls: ['./toggle-user.component.css'],
})
export class ToggleUserComponent {
  constructor(
    public activeUserService: ActiveUserService,
    private router: Router
  ) {}

  toggleUser() {
    this.activeUserService.toggleUserStatus();

    // Kolla om användaren är nu en 'Visitor'
    if (this.activeUserService.getUserStatusString() === 'Visitor') {
      this.router.navigate(['/']); // Navigera till 'Home Page'
    }
  }
}
