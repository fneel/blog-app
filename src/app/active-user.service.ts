import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveUserService {
  activeUser: User | undefined = undefined;

  constructor() {}
}
