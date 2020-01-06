import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyTelInputComponent } from './my-tel-input/my-tel-input.component';
import { TestMatNavComponent } from './test-mat-nav/test-mat-nav.component';
import { TestMatDashboardComponent } from './test-mat-dashboard/test-mat-dashboard.component';
import { TestMatTableComponent } from './test-mat-table/test-mat-table.component';
import { ExampleDef } from './example.model';
import { MatIconDemoComponent } from './mat-icon-demo/mat-icon-demo.component';
import { CdkTestDemoComponent } from './cdk-test/cdk-test-demo.component';
import { FilePreviewOverlayComponent } from './cdk-test/file-preview-overlay/file-preview-overlay.component';
import { FilePreviewOverlayInputComponent } from './cdk-test/file-preview-overlay-input/file-preview-overlay-input.component';
import { MatDialogDemoComponent } from './mat-dialog-demo/mat-dialog-demo.component';
import { SharedModule } from './shared/shared.module';
import { BottomSheetOverviewExampleComponent } from './mat-dialog-demo/bottom-sheet-overview-example/bottom-sheet-overview-example.component';
import { TestMatDrawerComponent } from './test-mat-drawer/test-mat-drawer.component';
import { TestMatSidenavComponent } from './test-mat-sidenav/test-mat-sidenav.component';
import { MatFormDemoComponent } from './mat-form-demo/mat-form-demo.component';


export const examples: ExampleDef[] = [
  { label: '使用 cdk', path: 'test-cdk' },
  { label: 'icon', path: 'mat-icon' },
  { label: 'dialog', path: 'mat-dialog' },
  { label: 'form 相关', path: 'mat-form' },
];

const routes: Routes = [
  { path: '', redirectTo: 'mat-icon', pathMatch: 'full' },
  { path: 'test-cdk', component: CdkTestDemoComponent },
  { path: 'mat-icon', component: MatIconDemoComponent },
  { path: 'mat-dialog', component: MatDialogDemoComponent },
  { path: 'mat-form', component: MatFormDemoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyTelInputComponent,
    TestMatNavComponent,
    TestMatDashboardComponent,
    TestMatTableComponent,
    MatIconDemoComponent,
    CdkTestDemoComponent,
    FilePreviewOverlayComponent,
    FilePreviewOverlayInputComponent,
    MatDialogDemoComponent,
    BottomSheetOverviewExampleComponent,
    TestMatDrawerComponent,
    TestMatSidenavComponent,
    MatFormDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule
  ],
  entryComponents: [
    FilePreviewOverlayComponent,
    FilePreviewOverlayInputComponent,
    BottomSheetOverviewExampleComponent
  ],
  providers: [
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
