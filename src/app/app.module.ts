import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { AddNoteComponent } from './add-note/add-note';

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
    RemindersComponent,
    AddNoteComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes, { enableTracing: true } ),
    BrowserModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
