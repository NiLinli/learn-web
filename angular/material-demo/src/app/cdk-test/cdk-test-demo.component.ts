import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { STATIC_FILE_DATE } from './data';
import { FilePreviewOverlayService } from './file-preview-overlay/file-preview-overlay.service';
import { FilePreviewOverlayInputService } from './file-preview-overlay-input/file-preview-overlay-input.service';

@Component({
  templateUrl: './cdk-test-demo.component.html',
  styleUrls: ['./cdk-test-demo.component.css']
})
export class CdkTestDemoComponent implements OnInit {

  file = STATIC_FILE_DATE;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private platform: Platform,
    private filePreviewOverlayService: FilePreviewOverlayService,
    private filePreviewOverlayInputService: FilePreviewOverlayInputService
  ) {

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {

    console.log(this.platform);
  }

  createOverlay(): void {
    const dialogRef = this.filePreviewOverlayService.open();

    // setTimeout(() => {
    //   dialogRef.close();
    // }, 2000);
  }

  createOverlayWithInput() {
    const dialogRef = this.filePreviewOverlayInputService.open({
      image: this.file
    });
  }

}
