import {
  Component,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';

import v1 from 'uuid/v1';

import { NotesService } from '../services/notes.service';

@Component({
  selector: 'add-note',
  templateUrl: 'add-note.html',
  styleUrls: ['add-note.scss']
})
export class AddNoteComponent {

  private isAddingNewNote = true;
  private post = '';
  private title = '';
  private addNoteClass = '';
  private colors = [];
  private currentColor = '';

  @ViewChild('textbox') textbox: any;
  @ViewChild('add-note-component') component: any;
  @ViewChild('paletteMenuTrigger') menu: any;

  constructor(private eRef: ElementRef, private notesService: NotesService) {
    this.currentColor = 'white';
    this.addNoteClass = this.getClassFromColor(this.currentColor);

    this.colors = ['white', 'red', 'orange', 'yellow', 'grey', 'blue', 'sea', 'green'];
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
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
  }

  adjustTextarea() {
    this.textbox.nativeElement.style.height = '1px';
    this.textbox.nativeElement.style.height =
      (25 + this.textbox.nativeElement.scrollHeight) + "px";
  }

  addNewNote() {
    const note = {
      id: v1(),
      date: new Date(),
      title: this.title,
      post: this.post.replace(/\n\r?/g, '<br />'),
      color: this.currentColor
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

  setColor(event, color) {
    this.currentColor = color;
    this.addNoteClass = this.getClassFromColor(color);
    this.menu.closeMenu();
  }
}
