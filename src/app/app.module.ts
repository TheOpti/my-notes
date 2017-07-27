import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule
} from '@angular/material';

import { AppComponent } from './app';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu';
import { NavbarComponent } from './navbar/navbar';
import { NotesComponent } from './notes/notes';
import { RemindersComponent } from './reminders/reminders';

const appRoutes: Routes = [
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'reminders',
    component: RemindersComponent
  },
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavMenuComponent,
    NavbarComponent,
    NotesComponent,
    RemindersComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes, { enableTracing: true } ),
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
