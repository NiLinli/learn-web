import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { FilePreviewOverlayInputComponent } from './file-preview-overlay-input.component';
import { FilePreviewOverlayInputRef } from './file-preview-overlay-input-ref';
import { FILE_PREVIEW_DIALOG_DATA } from './file-preview-overlay-input.tokens';


interface FilePreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  image?: Image;
}

export interface Image {
  name: string;
  url: string;
}

const DEFAULT_CONFIG: FilePreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
  image: null
};

@Injectable({
  providedIn: 'root'
})

export class FilePreviewOverlayInputService {

  constructor(
    private injector: Injector,
    private overlay: Overlay
  ) { }


  open(config: FilePreviewDialogConfig = {}) {

    const dialogConfig = {
      ...DEFAULT_CONFIG,
      ...config
    };

    const overlayRef = this.createOverlay(dialogConfig);


    // 注入进去
    // A remote control is a good way of
    // limiting the access to the underlying APIs and expose only those that we want to be publicly available
    const dialogRef = new FilePreviewOverlayInputRef(overlayRef);
    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

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
      positionStrategy: positionStrategy                                 //
    });

    return overlayConfig;
  }


  private attachDialogContainer(overlayRef: OverlayRef, config: FilePreviewDialogConfig, dialogRef: FilePreviewOverlayInputRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(FilePreviewOverlayInputComponent, null, injector);
    const containerRef: ComponentRef<FilePreviewOverlayInputComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(config: FilePreviewDialogConfig, dialogRef: FilePreviewOverlayInputRef): PortalInjector {
    const injectionTokens = new WeakMap(); // Instantiate new WeakMap for our custom injection tokens

    // set custom injection tokens
    injectionTokens.set(FilePreviewOverlayInputRef, dialogRef);
    injectionTokens.set(FILE_PREVIEW_DIALOG_DATA, config.image);

    return new PortalInjector(this.injector, injectionTokens);


  }
}
