import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NotesService } from '../services/notes.service';

@Component({
  selector: 'notes',
  templateUrl: 'notes.html',
  styleUrls: ['notes.scss']
})
export class NotesComponent {

  private notes : any;
  private subscription: Subscription;


  constructor(private notesService: NotesService) {
    this.subscription = this.notesService.getMessage().subscribe(notes => {
      this.notes = notes;
    });
  }

  ngOnInit() {
    this.notes = this.notesService.getAllNotes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteNote(noteId) {
    this.notesService.deleteNote(noteId);
  }
}
