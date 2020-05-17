import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  title: string;

  constructor(
    private modalService: NzModalService
  ) {
    this.title = 'top domin feature';

  }

  ngOnInit() {
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: '<i>Do you Want to delete these items?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => console.log(this.title)
    });
  }

  showDeleteConfirm(): void {
    this.modalService.confirm({
      // nzTitle: 'Are you sure delete this task?',
      nzContent: `<b style="color: red;">Some descriptions</b>`,
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzIconType: '',
      nzOnOk: () => console.log(this.title),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
