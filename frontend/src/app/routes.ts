import { Routes } from '@angular/router';

import { LoginComponent } from './views/login/login';
import { NotesComponent } from './views/notes/notes';
import { CalendarComponent } from './views/calendar/calendar';
import { SearchComponent } from './views/search/search';
import { ApplicationComponent } from "./views/application/application";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { state: 'LOGIN' }
  },
  {
    path: 'register',
    component: LoginComponent,
    data: { state: 'REGISTER' }
  },
  {
    path: 'password-forgot',
    component: LoginComponent,
    data: { state: 'PASSWORD_FORGOT' }
  },
  {
    path: 'registered',
    component: LoginComponent,
    data: { state: 'REGISTERED' }
  },
  {
    path: 'application',
    component: ApplicationComponent,
    children: [
      {
        path: 'notes',
        component: NotesComponent,
        data: { type: 'NOTES' }
      },
      {
        path: 'reminders',
        component: NotesComponent,
        data: { type: 'REMINDERS' }
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'tags/:name',
        component: NotesComponent,
        data: { type: 'TAGS' }
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'archive',
        component: NotesComponent,
        data: { type: 'ARCHIVE' }
      },
      {
        path: 'trash',
        component: NotesComponent,
        data: { type: 'TRASH' }
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];
