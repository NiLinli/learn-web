# Angular Form

1. FormModule (异步)
2. ReactiveModule (同步)

共用的概念：

1. `#heroForm="ngForm"` 取得对表单 NgForm 的引用
    - heroForm 是对整个 ngForm 指令的引用
    - Angular 自动添加 ngForm 指令到 form 标签上, 提供 form 表单以外的额外特性
      1. 控制那些带有 ngModel 指令和 name 属性的元素, 监听他们的属性, valid value pristine ...
      2. 监听 form 元素的属性
      3. A JSON representation of the form value
      4. Validity state of the entire form
2. `(ngSubmit)` 监听 submit 事件
        -  FormGroup 指令会监听 form 元素发出的 submit 事件, 并发出一个 ngSubmit 事件(原生的 DOM 事件)
        -  点击 button[type='submit'] 触发

分析过程:

1. ngForm 指令托管form (ngSubmit)
2. 注册 formControl 到 ngForm 中
    1. ngModel 指令
    2. 响应式表单

## DOM Event

1. 获得用户输入可以传入 $event / 模版引用变量 到事件中
2. 如果只是需要获得 input 的 value, 不应该使用 $event, 应该使用模版引用变量
3. 原则：模板(用户看到的)和组件(应用如何处理用户数据, 不应该太关心HTML 所有细节)之间的分离关注原则

## FormModule

异步的, 操作后需要等上一个 tick

1. FormsModule 中 exports 了 TEMPLATE_DRIVEN_DIRECTIVES(模版驱动指令), 所以必须要导入到相应的 module 中

ngModel

we use the ngModel directive. In combination with a name attribute, ngModel creates a form control abstraction for us behind the scenes
In order to register form controls on an ngForm instance

ngModelGroup enables us to semantically group our form controls.
 that there has to be an element, where we add ngModelGroup so it will be registered at our ngForm instance.

 ngModel is the thing in Angular that implements two-way data binding. 


Two-way binding 双向绑定：

1. values are flowing from the input box to the model (view -> model)
2. back again (model -> view)
3. 表单中使用`[(ngModel)]`, 必须要定义 **name**
    - Angular 创建了一些 FormControl, 并把它们注册到 NgForm 指令
    - 注册每个 FormControl 时，使用 name 属性值作为键值

## ReactiveModule

同步, 获取的每一个时间点对应一个状态, 状态是唯一的

1. ReactiveFormsModule 中 exports 了 REACTIVE_DRIVEN_DIRECTIVES(响应式表单指令)
2. 可以依赖注入 FormBuilder 的工厂方法快速创建下面实例
3. FormControl (formControlName) -> setValue
4. FormGroup (formGroup) -> pathValue

特点

1. 模型驱动
2. value 随时间的变化而变化
3. 使用显示的, immutable 的方式去管理表单状态(强调状态, 每一个状态对应一个时间点)
4. 对表单数据进行同步访问(可预测性)

FormControl

(AbstractControl) 的属性和方法用于控制 表单状态 , 并在处理表单校验时决定何时显示信息

- valueChanges
- setValue
- FormControl 与 HTML 绑定
  - [formControl]=""
  - formControlName="name"  由 FormControlName 指令提供的 formControlName 属性把每个输入框和 FormGroup 中定义的表单控件绑定起来

FormGroup(FormArray)

- valueChanges
- patchValue
- FormGroup 与 HTML 绑定
    1. [formGroup]=""

响应式表单验证：一旦控件发生了变化，Angular 就会调用这些函数

## 表单验证

1. `import { Validators } from '@angular/forms';` 提供的常用内建的验证器
2. 自定义验证器(定义一个工厂函数, 返回一个验证器函数)

FormGroup / FormControl 状态

1. touched/untouched 而当控件失去焦点时，就会改变控件的 touched（碰过）状态
2. pristine(淳朴的)/ dirty  改变控件的值会改变控件的 dirty（脏）状态
3. valid/invalid
4. status

name.invalid && (name.dirty || name.touched)

input 标签上面的 css 类

```css
.ng-valid
.ng-invalid
.ng-pending
.ng-pristine
.ng-dirty
.ng-untouched
.ng-touched
```

1. 同步验证器
2. 异步验证器

顺序：只有在所有同步验证器都通过之后，Angular 才会运行异步验证器

## 动态创建表单

没有办法更新 Angular 代码的情况下, 根据接收数据的不同, 动态创建不同的表单
