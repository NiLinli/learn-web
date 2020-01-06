import {
  Directive, IterableDiffer, IterableDiffers, ViewRef,
  ViewContainerRef, TemplateRef, ChangeDetectorRef, DoCheck, Input
} from '@angular/core';

@Directive({
  selector: '[appMyFor]'
})
export class MyForDirective implements DoCheck {
  private items: any; // items holds the collection we’re iterating on
  private differ: IterableDiffer<any>;
  private views: Map<any, ViewRef> = new Map<any, ViewRef>();
  // views is a Map that will link a given item on the collection with the view that contains it

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>,
    private differs: IterableDiffers
  ) { }

  @Input()
  set appMyForOf(items) {
    this.items = items;
    if (this.items && !this.differ) {
      this.differ = this.differs.find(items).create();
    }
  }


  // 改变数组中的元素的话, ngOnChanges 检测不到
  ngDoCheck(): void {
    if (this.differ) {
      const changes = this.differ.diff(this.items);
      if (changes) {
        changes.forEachAddedItem(change => {
          const view = this.viewContainer.createEmbeddedView(
            this.template,
            { $implicit: change.item }
          );
          this.views.set(change.item, view);
        });
        changes.forEachRemovedItem(change => {
          const view = this.views.get(change.item);
          const idx = this.viewContainer.indexOf(view);
          this.viewContainer.remove(idx);
          this.views.delete(change.item);
        });
      }
    }
  }
}


//  <div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">
//    ({{i}}) {{hero.name}}
//  </div>

//  <ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]="trackById">
//    <div [class.odd]="odd">({{i}}) {{hero.name}}</div>
//  </ng-template>

// *NgBookFor="let var of collection" 解析到这个let of 语法即可 解开这种语法糖
// *something="let var in collection" 转换为
// <template something [somethingOf]="collection" let-var="$implicit">
//    <!-- ... -->
// </template>
