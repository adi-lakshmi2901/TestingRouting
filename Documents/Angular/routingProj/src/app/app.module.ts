import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ToUpperCasePipe } from './to-upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    WelcomePageComponent,
    ToUpperCasePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
