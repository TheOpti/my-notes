import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { BaseHttpClient } from "./baseHttp.service";
import { NotificationService } from "./notification.service";

@Injectable()
export class NotesService {

  private subject = new Subject<any>();
  private notes: Array<any>;

  constructor(private baseHttpClient: BaseHttpClient, private notificationService: NotificationService) {
    this.subject = new Subject<any>();
    this.notes = [];
  }

  getAllNotes() {
    return this.notes;
  }

  setNotes(notes) {
    this.notes = notes;
    this.sendMessage(this.notes);
  }

  addNote(note) {
    this.baseHttpClient.post('http://localhost:3000/notes', { note })
      .subscribe(
        (data: any) => {
          this.notes.push(data.note);
          this.sendMessage(this.notes);
          this.notificationService.addNotification('note-add');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateNote(note) {
    this.baseHttpClient.put('http://localhost:3000/notes', { note })
      .subscribe(
        () => {
          const updatedNotes = this.notes.map(currentNote => {
            if (currentNote.id === note.id) {
              currentNote = { ...note };
            }

            return currentNote;
          });

          this.notes = updatedNotes;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteNote(noteId) {
    this.baseHttpClient.delete('http://localhost:3000/notes/' + noteId)
      .subscribe(
        () => {
          this.notes = this.notes.filter(note=> note.id !== noteId);
          this.notificationService.addNotification('note-delete');
          this.sendMessage(this.notes);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteTagsFromNotes(tagId) {
    this.notes.forEach(note => {
      note.tags = note.tags.filter(tag => tag.id !== tagId);
    });
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
