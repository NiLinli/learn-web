import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const CUSTOM_INPUT_NUMBER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NzCustomInputNumberComponent),
  multi: true
};


@Component({
  selector: 'nz-custom-input-number',
  templateUrl: './nz-custom-input-number.component.html',
  styleUrls: ['./nz-custom-input-number.component.css'],
  providers: [CUSTOM_INPUT_NUMBER_VALUE_ACCESSOR]
})
export class NzCustomInputNumberComponent implements OnInit, ControlValueAccessor {

  @ViewChild('inputElement') inputElement: ElementRef;
  value = '';

  // @Output() nzCustomInputNumberChange: EventEmitter<any> = new EventEmitter<any>();

  onModelChange: Function = () => { };


  constructor() { }

  ngOnInit() { }

  onChange(value: string): void {
    this.updateValue(value);
  }

  // '.' at the end or only '-' in the input box.
  // onBlur(): void {
  //   if (this.value.charAt(this.value.length - 1) === '.' || this.value === '-') {
  //     this.updateValue(this.value.slice(0, -1));
  //   }
  // }

  updateValue(value: string): void {
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(+value) && reg.test(value)) || value === '' || value === '-') {
      this.value = value;
    }
    this.inputElement.nativeElement.value = this.value;
    this.onModelChange(Number(this.value));
    // this.nzCustomInputNumberChange.emit(Number(this.value));
  }

  // formatNumber(value: string): string {
  //   const string = `${value}`;
  //   const list = string.split('.');
  //   const prefix = list[0].charAt(0) === '-' ? '-' : '';
  //   let num = prefix ? list[0].slice(1) : list[0];
  //   let result = '';
  //   while (num.length > 3) {
  //     result = `,${num.slice(-3)}${result}`;
  //     num = num.slice(0, num.length - 3);
  //   }
  //   if (num) {
  //     result = num + result;
  //   }
  //   return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
  // }

  // model view -> view value
  writeValue(obj: any): void {
    this.value = obj;
  }

  // view value -> model value
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  // setDisabledState(isDisabled: boolean): void {

  // }



}
