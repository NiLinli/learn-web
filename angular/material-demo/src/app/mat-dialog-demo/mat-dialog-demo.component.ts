import { Component, OnInit } from '@angular/core';
import { DialogOverviewExampleDialogComponent } from '../shared/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { MatDialog, MatBottomSheet } from '@angular/material';
import { BottomSheetOverviewExampleComponent } from './bottom-sheet-overview-example/bottom-sheet-overview-example.component';


@Component({
  selector: 'app-mat-dialog-demo',
  templateUrl: './mat-dialog-demo.component.html',
  styleUrls: ['./mat-dialog-demo.component.css']
})
export class MatDialogDemoComponent implements OnInit {

  name: string;
  animal: string;

  constructor(
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
  }

  // dialog = modal = layer
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(BottomSheetOverviewExampleComponent);

    bottomSheetRef.afterDismissed().subscribe((value) => {
      console.log(`Bottom sheet has been dismissed. ${value}`);
    });

    setTimeout(() => {
      bottomSheetRef.dismiss('hehe');
    }, 5000);
  }

}
