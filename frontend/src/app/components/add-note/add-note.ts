import {
  Component,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';

import { NotesService } from '../../services/notes.service';

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

  public isAddingNewNote = false;
  private post = '';
  private title = '';
  private addNoteClass = '';
  private currentColor = 'white';
  private reminder = '';
  private type = NOTE_TYPES.NOTE;
  private selectedTags = [];

  @ViewChild('textbox') textbox: any;
  @ViewChild('add-note-component') component: any;

  constructor(private eRef: ElementRef, private notesService: NotesService) {
    this.addNoteClass = this.getClassFromColor(this.currentColor);
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
    this.currentColor = 'white';
    this.reminder = null;
    this.type = NOTE_TYPES.NOTE;
    this.selectedTags = [];
  }

  adjustTextarea() {
    this.textbox.nativeElement.style.height = '1px';
    this.textbox.nativeElement.style.height =
      (25 + this.textbox.nativeElement.scrollHeight) + "px";
  }

  addNewNote() {
    const note = {
      creationDate: new Date(),
      title: this.title,
      post: this.post.replace(/\n\r?/g, '<br />'),
      color: this.currentColor,
      reminder: this.reminder,
      type: this.type,
      tags: this.selectedTags
    };

    this.notesService.addNote(note);

    this.clearInputs();
    this.disableEditing();
  }


  getClassFromColor(color) {
    return `color--${color}`;
  }

  setColor(color) {
    this.currentColor = color;
    this.addNoteClass = this.getClassFromColor(color);
  }

  setReminder(date) {
    this.reminder = date;
    this.type = NOTE_TYPES.REMINDER;
  }

  removeReminder($event) {
    $event.stopPropagation();

    this.reminder = null;
    this.type = NOTE_TYPES.NOTE;
  }

  isTagSelected(tag) {
    return !!this.selectedTags.find(entry => entry.id === tag.id);
  }

  handleTagSelection(tag) {
    if (this.isTagSelected(tag)) {
      this.selectedTags = this.selectedTags.filter(entry => entry.id !== tag.id);
    } else {
      this.selectedTags.push(tag);
    }
  }

}
