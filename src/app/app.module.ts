import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VDomModule } from 'ng-vdom';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GitUsers } from './services/gituser.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VDomModule,
    HttpClientModule
  ],
  providers: [GitUsers],
  bootstrap: [AppComponent]
})
export class AppModule { }
