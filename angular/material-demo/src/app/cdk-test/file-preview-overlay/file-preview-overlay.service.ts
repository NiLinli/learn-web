import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview-overlay.component';
import { FilePreviewOverlayRef } from './file-preview-overlay-ref';

interface FilePreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}


const DEFAULT_CONFIG: FilePreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
};


@Injectable({
  providedIn: 'root'
})

export class FilePreviewOverlayService {

  constructor(
    private overlay: Overlay
  ) { }


  open(config: FilePreviewDialogConfig = {}) {

    const dialogConfig = {
      ...DEFAULT_CONFIG,
      ...config
    };

    const overlayRef = this.createOverlay(dialogConfig);

    const filePreviewPortal = new ComponentPortal(FilePreviewOverlayComponent);
    overlayRef.attach(filePreviewPortal);

    // 引导一层, 分离逻辑
    const dialogRef = new FilePreviewOverlayRef(overlayRef);

    // 点击背景关闭 dialog
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }


  // 创建一个 overlay
  private createOverlay(config: FilePreviewDialogConfig): OverlayRef {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }


  // 获取 overlay 的配置
  private getOverlayConfig(config: FilePreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,                                  //
      backdropClass: config.backdropClass,                              //
      panelClass: config.panelClass,                                    //
      scrollStrategy: this.overlay.scrollStrategies.block(),            // overlay 打开的时候, 页面 sroll, overlay 的表现
      // BlockScrollStrategy: blocks page scrolling
      // NoopScrollStrategy: does nothing
      // CloseScrollStrategy: automatically closes the overlay when scrolling
      // RepositionScrollStrategy: will reposition the overlay element on scroll

      positionStrategy: positionStrategy                                 //
    });

    return overlayConfig;
  }

}
