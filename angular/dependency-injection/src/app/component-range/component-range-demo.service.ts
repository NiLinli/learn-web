import { Injectable } from '@angular/core';
import { UserService } from '../providers/user.service';

@Injectable()
export class ComponentRangeDemoService {

  title: string;

  constructor(
    private userService: UserService
  ) {
    console.log('ComponentRangeDemoService constructor');
    this.title = 'ComponentRangeDemoService title';
  }

}
