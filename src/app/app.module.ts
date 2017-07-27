import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule
} from '@angular/material';

import { AppComponent } from './app';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu';
import { NavbarComponent } from './navbar/navbar';

@NgModule({
  declarations: [
    AppComponent,
    SidenavMenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
