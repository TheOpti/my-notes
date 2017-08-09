import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotesService {

  private subject = new Subject<any>();

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

    const allNotes = this.getAllNotes();

    this.sendMessage(allNotes);
  }

  getAllNotes() {
    let notes;

    try {
      notes = JSON.parse(localStorage.getItem('notes'));
    } catch (error) {
      notes = [];
    }

    return notes;
  }

  deleteNote(noteId) {
    //TODO delete by ID from local storage
  }

  sendMessage(allNotes) {
    this.subject.next(allNotes);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
