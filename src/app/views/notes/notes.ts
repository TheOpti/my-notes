import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'notes',
  templateUrl: 'notes.html',
  styleUrls: ['notes.scss']
})
export class NotesComponent {

  private notes : any;
  private subscription: Subscription;
  private loading: boolean;

  constructor(private notesService: NotesService) {
    this.loading = true;
    this.notes = [];

    this.subscription = this.notesService.getMessage().subscribe(notes => {
      this.notes = notes.filter(note => note.type === 'note');
    });
  }

  ngOnInit() {
    this.notesService.getAllNotes().then((notes: Array<any>) => {
      this.notes = notes.filter(note => note.type === 'note');
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteNote(noteId) {
    this.notesService.deleteNote(noteId);
  }
}
