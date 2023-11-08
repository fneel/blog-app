import { Component, Output, EventEmitter } from '@angular/core';
import { ToggleUserComponent } from '../toggle-user/toggle-user.component';
import { ActiveUserService } from '../active-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public activeUserService: ActiveUserService) {}

  // @Output() toggleUser = new EventEmitter<boolean>();
  // constructor(private activeUserService: ActiveUserService) {}
  // toggle() {
  //   this.toggleUser.emit(this.activeUserService.User);
  // }
  // toggleAdmin() {
  //   this.toggleUser.emit(this.activeUserService.Admin);
  // }

  // User = ActiveUserService;
  // toggleDisplay = new EventEmitter<boolean>();
  // isShow = false;

  // toggleDisplay() {
  //   this.isShow = !this.isShow;
  // }
}
