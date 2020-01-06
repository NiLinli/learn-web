import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-directly-injector',
  templateUrl: './directly-injector.component.html',
  styleUrls: ['./directly-injector.component.css']
})
export class DirectlyInjectorComponent implements OnInit {

  private userService: UserService;

  constructor() {

  }

  ngOnInit() {
    // 1. 创建injector对象,该组件的上面的injector
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
    // 2. 获得服务，通过injector.get()
    this.userService = injector.get(UserService);
    // 注：没有注入到组件，只是调用获得而已
  }

}
