import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-event-listener',
  templateUrl: './register-event-listener.component.html',
  styleUrls: ['./register-event-listener.component.scss']
})
export class RegisterEventListenerComponent implements OnInit {

  count: number;

  constructor() { 
    this.count = 0;
  }

  ngOnInit() {
  }

  onBtnEvent($event) {
    this.count++;
  }

}
