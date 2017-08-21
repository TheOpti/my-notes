import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'reminders',
  templateUrl: 'reminders.html',
  styleUrls: ['reminders.scss']
})
export class RemindersComponent {

  private reminders : any;
  private subscription: Subscription;
  private loading: boolean;

  constructor(private notesService: NotesService) {
    this.loading = true;
    this.reminders = [];

    this.subscription = this.notesService.getMessage().subscribe(notes => {
      this.reminders = notes.filter(note => note.type === 'reminder');
    });
  }

  ngOnInit() {
    this.notesService.getAllNotes().then((notes: Array<any>) => {
      this.reminders = notes.filter(note => note.type === 'reminder');
      this.loading = false;
    });
  }

  getClassFromColor(color) {
    return `color--${color}`;
  }

}
