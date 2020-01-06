import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input
} from '@angular/core';

@Component({
  selector: 'app-all-hooks',
  templateUrl: './all-hooks.component.html'
})
export class AllHooksComponent implements OnInit,
  OnDestroy, DoCheck,
  OnChanges, AfterContentInit,
  AfterContentChecked, AfterViewInit,
  AfterViewChecked {
  counter: number;
  person: { name: string };
  lifecycles: string[];

  someObj: any;
  @Input() someInputObj: any;

  constructor() {
    // 构造函数完成之前，那些被绑定的输入属性还都没有值
    console.log('AllHooksComponent --------- [constructor]');
    this.lifecycles = [];
    this.lifecycles.push('constructor');
    this.counter = 1;
  }


  ngOnChanges() {
    // 1. 有输入属性改钩子才会被调用
    // 2. 初次调用在 ngOnInit 之前
    console.log('AllHooksComponent - OnChanges');
    this.lifecycles.push('ngOnChanges');
  }

  ngOnInit() {
    // 用途: 在构造函数之后马上执行复杂的初始化逻辑
    // 调用时机：
    // first displays the data-bound properties
    // sets the directive/component's input properties
    console.log('AllHooksComponent - OnInit');
    console.log(123)
    this.lifecycles.push('ngOnInit');
    this.person = {
      name: 'nixixi'
    };

    this.someObj = {
      a: {
        b: 'hulala'
      }
    };

    this.someInputObj.a = {};
    this.someInputObj.a.b = 1;
    

    // 3. 执行完 ngOnInit 之后, 就开始渲染模版 (如果对象没有值, 需要使用 ? 安全符号)
  }

  ngDoCheck() {
    // 用这个方法来检测那些被 Angular 忽略的更改
    // 非常频繁 一般不要使用 使用的逻辑写简单一点
    console.log('AllHooksComponent - DoCheck');
    this.lifecycles.push('ngDoCheck');
  }

  // Angular 会在外来内容被投影到组件中之后调用它们
  ngAfterContentInit() {
    console.log('AllHooksComponent - AfterContentInit');
    this.lifecycles.push('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AllHooksComponent - AfterContentChecked');
    this.lifecycles.push('ngAfterContentChecked');
  }

  // Angular 会在每次创建了组件的子视图后调用它们
  ngAfterViewInit() {
    console.log('AllHooksComponent - AfterViewInit');
    this.lifecycles.push('ngAfterViewInit');
    // Angular 的“单向数据流”规则禁止在一个视图已经被组合好之后再更新视图
    // this.counter = 100; // 报错
    setTimeout(() => {
      this.counter = 100;
    }, 0);
  }

  ngAfterViewChecked() {
    console.log('AllHooksComponent - AfterViewChecked');
    this.lifecycles.push('ngAfterViewChecked');
  }

  ngOnDestroy() {
    // 这里是用来释放那些不会被垃圾收集器自动回收的各类资源的地方
    // 1 取消那些对可观察对象和 DOM 事件的订阅
    // 2 停止定时器
    // 3 注销该指令曾注册到全局服务或应用级服务中的各种回调函数
    console.log('AllHooksComponent - OnDestroy');
    this.lifecycles.push('ngOnDestroy');
  }

  inc() {
    console.log('AllHooksComponent --------- [counter]');
    this.counter += 1;
  }

}
