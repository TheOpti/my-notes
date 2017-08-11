import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdTooltipModule
} from '@angular/material';

import { AppComponent } from './app';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu';
import { NavbarComponent } from './navbar/navbar';
import { PlaceholderComponent } from './views/placeholder/placeholder';
import { NotesComponent } from './views/notes/notes';
import { RemindersComponent } from './views/reminders/reminders';
import { ArchiveComponent } from './views/archive/archive';
import { TrashComponent } from './views/trash/trash';
import { AddNoteComponent } from './add-note/add-note';
import { NotificationsComponent } from './notifications/notifications';
import { NotificationComponent } from './notifications/notification/notification';

import { NotesService } from './services/notes.service';

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
    path: 'archive',
    component: ArchiveComponent
  },
  {
    path: 'trash',
    component: TrashComponent
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
    PlaceholderComponent,
    NotesComponent,
    RemindersComponent,
    ArchiveComponent,
    TrashComponent,
    AddNoteComponent,
    NotificationsComponent,
    NotificationComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes, { enableTracing: true } ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdTooltipModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {



}
