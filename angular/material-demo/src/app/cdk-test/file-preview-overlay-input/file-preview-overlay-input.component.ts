import { Component, OnInit, Inject } from '@angular/core';
import { FILE_PREVIEW_DIALOG_DATA } from './file-preview-overlay-input.tokens';
import { FilePreviewOverlayInputRef } from './file-preview-overlay-input-ref';
import { Image } from './file-preview-overlay-input.service';

@Component({
  selector: 'file-preview-overlay-input',
  templateUrl: './file-preview-overlay-input.component.html',
  styleUrls: ['./file-preview-overlay-input.component.css']
})
export class FilePreviewOverlayInputComponent implements OnInit {

  constructor(
    public dialogRef: FilePreviewOverlayInputRef,
    @Inject(FILE_PREVIEW_DIALOG_DATA) public image: Image
  ) { }

  ngOnInit() {

    console.log(this.image);

  }

}
