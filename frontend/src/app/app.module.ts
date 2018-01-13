import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';

import {
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatDialogModule,
  MatMenuModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu';
import { TagsDialogComponent } from './components/sidenav-menu/tags-dialog/tags-dialog';
import { TagRowComponent } from './components/sidenav-menu/tags-dialog/tag-row/tag-row';
import { NavbarComponent } from './components/navbar/navbar';
import { NoteComponent } from './components/note/note';
import { PlaceholderComponent } from './views/placeholder/placeholder';
import { LoginComponent } from './views/login/login';
import { LoginFormComponent } from './views/login/forms/login-form/login-form';
import { PasswordForgotFormComponent } from './views/login/forms/password-forgot-form/password-forgot-form';
import { RegisterFormComponent } from './views/login/forms/register-form/register-form';
import { RegistrationCompleteFormComponent } from './views/login/forms/registration-complete/registration-complete';
import { ApplicationComponent } from './views/application/application';
import { NotesComponent } from './views/notes/notes';
import { CalendarComponent } from './views/calendar/calendar';
import { SearchComponent } from './views/search/search';
import { AddNoteComponent } from './components/add-note/add-note';
import { NoteCanvasComponent } from './components/note-canvas/note-canvas';
import { NotificationsComponent } from './components/notifications/notifications';
import { NotificationComponent } from './components/notifications/notification/notification';
import { ReminderBarComponent } from './components/reminder-bar/reminder-bar';
import { SelectedTagsBarComponent } from './components/selected-tags-bar/selected-tags-bar';
import { IconsBarComponent } from './components/icons-bar/icons-bar';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner';

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
    RegistrationCompleteFormComponent,
    PasswordForgotFormComponent,
    RegisterFormComponent,
    ApplicationComponent,
    NotesComponent,
    CalendarComponent,
    SearchComponent,
    AddNoteComponent,
    NoteCanvasComponent,
    NotificationsComponent,
    NotificationComponent,
    ReminderBarComponent,
    SelectedTagsBarComponent,
    IconsBarComponent,
    LoadingSpinnerComponent,
    FocusDirective
  ],
  entryComponents: [TagsDialogComponent],
  imports: [
    RouterModule.forRoot( routes, { enableTracing: false } ),
    CalendarModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [NotesService, TagsService, NotificationService, SelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
