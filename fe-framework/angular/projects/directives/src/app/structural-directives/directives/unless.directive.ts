import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private hasView: boolean;

  @Input() set appUnless(condition: any) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(
    private viewContainer: ViewContainerRef, // 视图容器
    private templateRef: TemplateRef<any> // 取得 <ng-template> 的内容, 即内嵌的视图
  ) { }

}

  // 分析 *ngIf 语法糖
  // <div *ngIf="hero" class="name">{{hero.name}}</div>

  // <ng-template [ngIf]="hero">
  // <div class="name">{{hero.name}}</div>
  // </ng-template>

  // 翻译成 <ng-template> 包裹宿主元素
  // Angular 渲染的 <ng-template> 的内容, 忽略 <ng-template>, 替换为一个供诊断用的注释

