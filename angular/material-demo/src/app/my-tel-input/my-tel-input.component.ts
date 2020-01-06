import { Component, OnInit, Input, OnDestroy, HostBinding, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';


class MyTel {
  constructor(
    public area: string,
    public exchange: string,
    public subscriber: string
  ) { }
}

@Component({
  selector: 'my-tel-input',
  templateUrl: './my-tel-input.component.html',
  styleUrls: ['./my-tel-input.component.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: MyTelInputComponent }]
})

export class MyTelInputComponent implements OnInit, OnDestroy, MatFormFieldControl<MyTel> {

  static nextId = 0;

  @HostBinding() id = `my-tel-input-${MyTelInputComponent.nextId++}`;

  parts: FormGroup;

  stateChanges = new Subject<void>();

  @Input()
  get value(): MyTel | null {
    const n = this.parts.value;
    if (n.area.length === 3 && n.exchange.length === 3 && n.subscriber.length === 4) {
      return new MyTel(n.area, n.exchange, n.subscriber);
    }
    return null;
  }

  set value(tel: MyTel | null) {
    tel = tel || new MyTel('', '', '');
    this.parts.setValue({ area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber });

    this.stateChanges.next();
  }

  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  private _placeholder: string;

  ngControl: NgControl = null;

  focused = false;

  errorState = false;

  controlType = 'my-tel-input';

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  get empty() {
    const n = this.parts.value;
    return !n.area && !n.exchange && !n.subscriber;
  }

  @Input()
  get required() {
    return this._required;
  }
  set required(req) {
    this._required = Boolean(req);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(dis) {
    this._disabled = Boolean(dis);
    this.stateChanges.next();
  }
  private _disabled = false;

  @HostBinding('attr.aria-describedby') describedBy = '';

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  constructor(
    private fb: FormBuilder,
    private fm: FocusMonitor,
    private elRef: ElementRef
  ) {
    this.parts = fb.group({
      'area': '',
      'exchange': '',
      'subscriber': ''
    });

    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnInit() {
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }



  ngOnDestroy(): void {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

}

// stateChanges -> OnPush change detection strategy
