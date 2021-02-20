import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReuseModule } from './reuse/reuse.module';

import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CustomReuseStrategy } from './providers/custom-reuse-strategy';
import { GlobalCommunicationService } from './global-communication.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    ReuseModule,
    AppRoutingModule
  ],
  providers: [
    GlobalCommunicationService,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },         // reuse route demo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
