import { Injectable, OnDestroy } from '@angular/core';
import { UserService } from '../../providers/user.service';


@Injectable()
export class ComponentService implements OnDestroy {

    title: string;

    constructor(
        private userService: UserService
    ) {
        console.log('ComponentService constructor');
        this.title = 'service title';
        console.log(userService.title);
    }

    // service 没有这个方法
    // ngOnInit() {
    //     console.log('注入到组件中的服务init');
    // }

    ngOnDestroy() {
        console.log('ComponentService destory');
    }

    setTitle(newTitle): void {
        this.title = newTitle;
    }

    logTitle(): void {
        console.log(`this service's title is ${this.title}`);
    }


}
