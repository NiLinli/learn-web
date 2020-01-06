import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'bottom-sheet-overview-example',
  templateUrl: './bottom-sheet-overview-example.component.html',
  styleUrls: ['./bottom-sheet-overview-example.component.css']
})
export class BottomSheetOverviewExampleComponent implements OnInit {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleComponent>
  ) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}

// 替代 dialog 或者 menu
