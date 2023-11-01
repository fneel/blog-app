import { Component } from '@angular/core';
import { ActiveUserService } from '../active-user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toggle-user',
  templateUrl: './toggle-user.component.html',
  styleUrls: ['./toggle-user.component.css'],
})
export class ToggleUserComponent {
  isShow = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
