import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu';
import { TagsDialogComponent } from './sidenav-menu/tags-dialog/tags-dialog';
import { TagRowComponent } from './sidenav-menu/tags-dialog/tag-row/tag-row';
import { NavbarComponent } from './navbar/navbar';
import { NoteComponent } from './note/note';
import { PlaceholderComponent } from './views/placeholder/placeholder';
import { LoginComponent } from './views/login/login';
import { LoginFormComponent } from './views/login/forms/login-form/login-form';
import { PasswordForgotFormComponent } from './views/login/forms/password-forgot-form/password-forgot-form';
import { RegisterFormComponent } from './views/login/forms/register-form/register-form';
import { ApplicationComponent } from './views/application/application';
import { NotesComponent } from './views/notes/notes';
import { RemindersComponent } from './views/reminders/reminders';
import { CalendarComponent } from './views/calendar/calendar';
import { SearchComponent } from './views/search/search';
import { TagsComponent } from './views/tags/tags';
import { ArchiveComponent } from './views/archive/archive';
import { TrashComponent } from './views/trash/trash';
import { AddNoteComponent } from './add-note/add-note';
import { NoteCanvasComponent } from './note-canvas/note-canvas';
import { NotificationsComponent } from './notifications/notifications';
import { NotificationComponent } from './notifications/notification/notification';
import { ReminderBarComponent } from './reminder-bar/reminder-bar';
import { SelectedTagsBarComponent } from './selected-tags-bar/selected-tags-bar';
import { IconsBarComponent } from './icons-bar/icons-bar';

import { NotesService } from './services/notes.service';
import { TagsService } from './services/tags.service';
import { NotificationService } from './services/notification.service';
import { SelectionService } from './services/selection.service';

import {FocusDirective} from './directives/focus.directive';

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    SidenavMenuComponent,
    TagsDialogComponent,
    TagRowComponent,
    NavbarComponent,
    NoteComponent,
    PlaceholderComponent,
    LoginComponent,
    LoginFormComponent,
    PasswordForgotFormComponent,
    RegisterFormComponent,
    ApplicationComponent,
    NotesComponent,
    RemindersComponent,
    CalendarComponent,
    TagsComponent,
    SearchComponent,
    ArchiveComponent,
    TrashComponent,
    AddNoteComponent,
    NoteCanvasComponent,
    NotificationsComponent,
    NotificationComponent,
    ReminderBarComponent,
    SelectedTagsBarComponent,
    IconsBarComponent,
    FocusDirective
  ],
  entryComponents: [TagsDialogComponent],
  imports: [
    RouterModule.forRoot( routes, { enableTracing: false } ),
    CalendarModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [NotesService, TagsService, NotificationService, SelectionService],
  bootstrap: [AppComponent]
})
export class AppModule {



}
