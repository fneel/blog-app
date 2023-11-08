import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root',
})
export class ActiveUserService {
  private userActive: boolean = false;

  toggleUserStatus() {
    this.userActive = !this.userActive;
  }

  getUserStatus(): boolean {
    return this.userActive;
  }
  getUserStatusString(): string {
    return this.userActive ? 'Admin' : 'Visitor';
  }
}
