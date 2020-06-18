import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './custom-validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsDemoComponent implements OnInit {

  powers: string[];
  name: AbstractControl;
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.powers = ['Really Smart', 'Super Flexible',
      'Super Hot', 'Weather Changer'];

    // 原始方式创建 FormGroup
    // this.profileForm = new FormGroup({
    //   name: this.name,
    //   age: new FormControl(''),
    //   power: new FormControl('')
    // });

    // 工厂模式创建 FormGroup
    this.profileForm = this.fb.group({
      name: ['nilinli', [
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(/nilinli/)   // 不能是 nilinli
      ]],
      age: [null],
      power: ['']
    });

    this.name = this.profileForm.get('name');
  }

  ngOnInit() {

    // 监听 formControl 值的变化
    this.name.valueChanges.subscribe((value: string) => {
      console.log('name changed to:', value);
    });

    // 监听 formGroup 值的变化
    this.profileForm.valueChanges.subscribe((form: any) => {
      console.log('profileForm changed to:', form);
    });
  }

  // 改变单个 FormControl 的值
  onSetSingleValue(): void {
    this.name.setValue('nixixixixxiixi-setValue');
  }

  // 整体设置 FormGroup 的值
  onPathValue(): void {
    // 只会修改传入的部分
    this.profileForm.patchValue({
      name: 'nixixi-patchValue',
      age: 18
    });
  }

  onSubmit() {
    console.log(this.profileForm.valid);
    console.log(this.profileForm.value);
  }

}




