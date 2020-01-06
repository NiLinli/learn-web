import { OverlayRef } from '@angular/cdk/overlay';


export class FilePreviewOverlayInputRef {

    constructor(
        private overlayRef: OverlayRef
    ) { }

    close(): void {
        this.overlayRef.dispose();
    }
}
