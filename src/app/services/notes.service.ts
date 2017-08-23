import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import {NotificationService} from "./notification.service";

@Injectable()
export class NotesService {

  private subject = new Subject<any>();

  constructor(private notificationService: NotificationService) { }

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
        this.notificationService.addNotification('note-add');
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
      }, 600);
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
    let stringified = JSON.stringify(filteredNotes);

    localStorage.setItem('notes', stringified);
    this.sendMessage(filteredNotes);
    this.notificationService.addNotification('note-delete');
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
