
import { Routes } from '@angular/router';

import { NotesComponent } from './views/notes/notes';
import { RemindersComponent } from './views/reminders/reminders';
import { CalendarComponent } from './views/calendar/calendar';
import { SearchComponent } from './views/search/search';
import { TagsComponent } from './views/tags/tags';
import { ArchiveComponent } from './views/archive/archive';
import { TrashComponent } from './views/trash/trash';

export const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'reminders',
    component: RemindersComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
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
