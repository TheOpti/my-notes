import {
  Component,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';

import v1 from 'uuid/v1';

import { NotesService } from '../services/notes.service';

const NOTE_TYPES = {
  NOTE: 'note',
  REMINDER: 'reminder'
};

@Component({
  selector: 'add-note',
  templateUrl: 'add-note.html',
  styleUrls: ['add-note.scss']
})
export class AddNoteComponent {

  private isAddingNewNote = false;
  private post = '';
  private title = '';
  private addNoteClass = '';
  private colors = ['white', 'red', 'orange', 'yellow', 'grey', 'blue', 'sea', 'green'];
  private currentColor = 'white';
  private noteDate = '';
  private noteType = NOTE_TYPES.NOTE;

  private dateOptions = [
    {
      id: 'tomorrow-16',
      day: 'Today',
      time: '16:00'
    },
    {
      id: 'tomorrow-8',
      day: 'Tomorrow',
      time: '08:00'
    },
    {
      id: 'next-week-8',
      day: 'Next week',
      time: '12:00'
    },
  ];

  @ViewChild('textbox') textbox: any;
  @ViewChild('add-note-component') component: any;
  @ViewChild('paletteMenuTrigger') paletteMenu: any;
  @ViewChild('reminderMenuTrigger') dateMenu: any;

  constructor(private eRef: ElementRef, private notesService: NotesService) {
    this.addNoteClass = this.getClassFromColor(this.currentColor);
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (event.target.className.includes('cdk-overlay-backdrop')
      || event.target.className.includes('mat-menu')) {
      this.enableEditing();
      return;
    }

    if (this.eRef.nativeElement.contains(event.target)) {
      this.enableEditing();
    } else {
      this.clearInputs();
      this.disableEditing();
      this.addNoteClass = 'color--white';
    }
  }

  enableEditing() {
    this.isAddingNewNote = true;
  }

  disableEditing() {
    this.isAddingNewNote = false;
  }

  clearInputs() {
    this.title = '';
    this.post = '';
    this.currentColor = 'white';
    this.noteDate = '';
  }

  adjustTextarea() {
    this.textbox.nativeElement.style.height = '1px';
    this.textbox.nativeElement.style.height =
      (25 + this.textbox.nativeElement.scrollHeight) + "px";
  }

  addNewNote() {
    const note = {
      id: v1(),
      creationDate: new Date(),
      title: this.title,
      post: this.post.replace(/\n\r?/g, '<br />'),
      color: this.currentColor,
      reminder: this.noteDate,
      type: this.noteType
    };

    this.notesService.addNote(note);

    this.clearInputs();
    this.disableEditing();
  }

  onMenuClick(event) {
    event.stopPropagation();
  }

  getClassFromColor(color) {
    return `color--${color}`;
  }

  setColor(color) {
    this.currentColor = color;
    this.addNoteClass = this.getClassFromColor(color);
    this.paletteMenu.closeMenu();
  }

  setReminder(date) {
    this.noteDate = date;
    this.noteType = NOTE_TYPES.REMINDER;

    this.dateMenu.closeMenu();
  }

  removeReminder($event) {
    $event.stopPropagation();

    this.noteDate = null;
    this.noteType = NOTE_TYPES.NOTE;
  }

}
