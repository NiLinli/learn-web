import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'test-mat-sidenav',
    templateUrl: './test-mat-sidenav.component.html',
    styleUrls: ['./test-mat-sidenav.component.css']
})
export class TestMatSidenavComponent implements OnInit {

    events: string[];
    openedStart: boolean;
    openedEnd: boolean;

    @ViewChild('sidenavStart') sidenavStart: MatSidenav;
 
    constructor() {
        this.events = [];
    }

    ngOnInit() {
        console.log(this.sidenavStart);

        // setTimeout(() => {
        //     this.sidenavStart.toggle();
        // }, 5000);
    }

    onClosedStart_end() {
        console.log('closedStart');
    }

    onOpenedChange_end() {
        console.log('openedChange');
    }

    onOpenedStart_end() {
        console.log('openedStart');
    }


    // mode
    // 1. over 悬浮在上面覆盖
    // 2. push 推开(比较好)
    // 3. side 压缩 content 空间

    // fixed 
    // fixedInViewport="true" 是否开启 fixed 模式
    // fixedBottomGap="20"    fixed 下方留白
    // fixedTopGap="10"       fixed 上方留白

}
