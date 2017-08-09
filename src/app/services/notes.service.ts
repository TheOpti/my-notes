import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {

  addNote(note) {
    let notes: any = localStorage.getItem('notes');

    if (notes) {
      notes = JSON.parse(notes);
      notes.push(note);
    } else {
      notes = [note];
    }

    notes = JSON.stringify(notes);
    localStorage.setItem('notes', notes);
  }

  getAllNotes() {
    return localStorage.getItem('notes');
  }

  deleteNote(noteId) {

  }
}
