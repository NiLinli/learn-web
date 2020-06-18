import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from './hero';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsDemoComponent implements OnInit {

  @ViewChild('heroForm') heroForm: NgForm;

  powers: string[];
  model: Hero;
  submitted: boolean;

  bestWish: string;
  countNumber: number;

  constructor() {
    this.powers = ['Really Smart', 'Super Flexible',
      'Super Hot', 'Weather Changer'];
    this.model = new Hero(18, 'Dr IQ', 'linli', 'ni', this.powers[0], undefined);
    this.submitted = false;

    this.countNumber = 11;
  }

  ngOnInit() {
  }


  onSubmit() {
    console.log(this.heroForm.value);

  }

}


// 用ngModel可以获得比仅使用双向数据绑定更多的控制权
// 1. 用户碰过此控件吗？
// 2. 它的值变化了吗？
// 3. 数据变得无效了吗？
// 通过模版变量赋值指令 #name="ngModel" 可以访问
// 1. name.touched
// 2. name.pristine
// 3. name.valid


// input: ngModel输入属性会设置该元素的值
// output:  并通过ngModelChange的输出属性来监听元素值的变化

// NgModel指令只支持实现了ControlValueAccessor的元素 ,input
// 自定义的话：除非写一个合适的值访问器 Value accessor

