import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]' , // 方括号([])表示它的属性型选择器 Angular 会在模板中定位每个名叫 appHighlight 的元素，并且为这些元素加上本指令的逻辑
  exportAs: 'appMyHighlightHahahahaha'
})
export class MyHighlightDirective {

  @HostBinding('attr.class') cssClass: string;

  defaultColor: string;

  @Input() highlightColor: string;

  constructor(private el: ElementRef) {

    this.defaultColor = 'pink';

    // 注入 ElementRef 引用宿主
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  // @HostListener 装饰器引用属性型指令的宿主元素
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.cssClass = '';
  }

  log(): void {
    console.log(this.highlightColor);
  }


  private highlight(color: string) {
    // this.el.nativeElement.style.backgroundColor = color;
    this.cssClass = `bgc-${color}`;
  }

  // component 继承 directive
  // directive 管理了这个DOM元素 Input Output
  // component 管理自定义标签 Input Output

}
