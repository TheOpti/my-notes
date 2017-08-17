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

    this.getAllNotes()
      .then((notes) => {
        this.sendMessage(notes);
      });
  }

  getAllNotes() {
    let notes;

    try {
      notes = JSON.parse(localStorage.getItem('notes'));
    } catch (error) {
      notes = [];
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const notesToReturn = notes ? notes : [];
        resolve(notesToReturn);
      }, 1200);
    });
  }

  deleteNote(noteId) {
    let notes: any = localStorage.getItem('notes');

    if (notes) {
      notes = JSON.parse(notes);
    } else {
      notes = [];
    }

    let filteredNotes = notes.filter(note => note.id !== noteId);

    localStorage.setItem('notes', filteredNotes);
    this.sendMessage(filteredNotes);
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
