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
  MdTooltipModule,
  MdDialogModule,
  MdProgressSpinnerModule,
  MdMenuModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule
} from '@angular/material';

import { AppComponent } from './app';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu';
import { TagsDialogComponent } from './sidenav-menu/tags-dialog/tags-dialog';
import { TagRowComponent } from './sidenav-menu/tags-dialog/tag-row/tag-row';
import { NavbarComponent } from './navbar/navbar';
import { PlaceholderComponent } from './views/placeholder/placeholder';
import { NotesComponent } from './views/notes/notes';
import { RemindersComponent } from './views/reminders/reminders';
import { SearchComponent } from './views/search/search';
import { TagsComponent } from './views/tags/tags';
import { ArchiveComponent } from './views/archive/archive';
import { TrashComponent } from './views/trash/trash';
import { AddNoteComponent } from './add-note/add-note';
import { NotificationsComponent } from './notifications/notifications';
import { NotificationComponent } from './notifications/notification/notification';
import { ReminderBarComponent } from './reminder-bar/reminder-bar';

import { NotesService } from './services/notes.service';
import { TagsService } from './services/tags.service';
import { NotificationService } from './services/notification.service';

import {FocusDirective} from './directives/focus.directive';

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
    path: 'tags/:name',
    component: TagsComponent
  },
  {
    path: 'search',
    component: SearchComponent
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
    TagsDialogComponent,
    TagRowComponent,
    NavbarComponent,
    PlaceholderComponent,
    NotesComponent,
    RemindersComponent,
    TagsComponent,
    SearchComponent,
    ArchiveComponent,
    TrashComponent,
    AddNoteComponent,
    NotificationsComponent,
    NotificationComponent,
    ReminderBarComponent,
    FocusDirective
  ],
  entryComponents: [TagsDialogComponent],
  imports: [
    RouterModule.forRoot( appRoutes, { enableTracing: false } ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdTooltipModule,
    MdDialogModule,
    MdProgressSpinnerModule,
    MdMenuModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [NotesService, TagsService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {



}
