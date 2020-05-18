import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class UserService implements OnDestroy {
  title: string;
  user: any;
  constructor() {
    console.log('UserService constructor');
    this.title = 'UserService title';
  }

  setUser(newUser) {
    this.user = newUser;
  }

  getUser(): any {
    return this.user;
  }

  ngOnDestroy() {
    console.log('UserService destroy');
  }
}
