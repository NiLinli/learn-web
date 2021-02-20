import {
  Component,
  Input,
  Output,
  EventEmitter,
  KeyValueDiffers,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styles: [`
    .comment-item{
      margin-bottom:20px;
      border:5px dashed blue;
    }
  `]
})
export class CommentComponent implements DoCheck {
  @Input() comment: any;
  @Output() removeEvent: EventEmitter<any>;
  differ: any;

  constructor(differs: KeyValueDiffers) {

    // Key-value differs should be used for dictionary-like structures, and work at the key level
    // 1 增加了key 2 移除了key 3 key 对应的值发生了改变
    this.differ = differs.find([]).create();
    this.removeEvent = new EventEmitter<any>();
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.comment);

    if (changes) {
      changes.forEachAddedItem(r =>
        this.logChange('added', r)
      );
      changes.forEachRemovedItem(r =>
        this.logChange('removed', r)
      );
      changes.forEachChangedItem(r =>
        this.logChange('changed', r)
      );
    }
  }

  logChange(action, r) {
    if (action === 'changed') {
      console.log(
        r.key,
        action,
        'from',
        r.previousValue,
        'to',
        r.currentValue
      );
    }
    if (action === 'added') {
      console.log(action, r.key, 'with', r.currentValue);
    }
    if (action === 'removed') {
      console.log(
        action,
        r.key,
        '(was ' + r.previousValue + ')'
      );
    }
  }

  remove(): void {
    this.removeEvent.emit(this.comment);
  }

  clear(): void {
    delete this.comment.comment;
  }

  like(): void {
    this.comment.likes += 1;
  }
}
