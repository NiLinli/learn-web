import { Directive, Output, EventEmitter, HostListener, ElementRef, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit {

  @Output() btnEvent: EventEmitter<boolean>;



  constructor(
    private elementRef: ElementRef
  ) {
    this.btnEvent = new EventEmitter();

  }


  ngOnInit() {
    // fromEvent 注册监听事件
    fromEvent(this.elementRef.nativeElement, 'click')
      .subscribe(value => void this.btnEvent.emit(true))
  }


}
