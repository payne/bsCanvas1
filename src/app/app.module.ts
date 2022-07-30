import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Canvas1Component } from './canvas1/canvas1.component';
import { SomeButtonsComponent } from './some-buttons/some-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    Canvas1Component,
    SomeButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
