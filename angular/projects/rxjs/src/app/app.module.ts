import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
// url
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

// Our models
import { ExampleDef } from './example.model';

// App harness components
import { AppComponent } from './app.component';

// feature module
import { SidebarModule } from './sidebar/sidebar.module';
import { IntroComponent } from './intro/intro.component';
import { RegisterEventListenerComponent } from './register-event-listener/register-event-listener.component';
import { ButtonDirective } from './register-event-listener/button.directive';
import { FlowDemoComponent } from './flow-demo/flow-demo.component';
import { SwitchComponent } from './switch/switch.component';

const examples: ExampleDef[] = [
  { label: 'Intro',  path: 'intro' },
  { label: 'register event listener', path: 'event'},
  { label: 'flow 流动性 demo', path: 'flow'},
  { label: 'switch', path: 'switch'},
];
const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'event', component: RegisterEventListenerComponent },
  { path: 'flow', component: FlowDemoComponent },
  { path: 'switch', component: SwitchComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    RegisterEventListenerComponent,
    ButtonDirective,
    FlowDemoComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot(routes),
    SidebarModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

