import { Component, Input } from '@angular/core';

import { SelectionService } from '../../services/selection.service';
import { NotesService } from '../../services/notes.service';

const NOTE_TYPES = {
  NOTE: 'note',
  REMINDER: 'reminder'
};

@Component({
  selector: 'note',
  templateUrl: 'note.html',
  styleUrls: ['note.scss']
})
export class NoteComponent {

  @Input() note: any;

  constructor(private selectionService: SelectionService, private notesService: NotesService) {

    this.isTagSelected = this.isTagSelected.bind(this);
  }

  getCssClasses() {
    let classes = `color--${this.note.color}`;
    classes += this.isSelected(this.note.id) ? ' note--selected' : '';

    return classes;
  }

  handleSelection(noteId) {
    if (this.isSelected(noteId)) {
      this.selectionService.removeFromSelection(noteId);
    } else {
      this.selectionService.addToSelection(noteId);
    }
  }

  isSelected(noteId) {
    return this.selectionService.isSelected(noteId);
  }

  deleteNote(noteId) {
    this.notesService.deleteNote(noteId);
  }

  setColor(color) {
    this.note.color = color;
    this.notesService.updateNote(this.note, this.note.id);
  }

  setReminder(date) {
    this.note.type = NOTE_TYPES.REMINDER;
    this.note.reminder = date;

    this.notesService.updateNote(this.note, this.note.id);
  }

  removeReminder() {
    this.note.type = NOTE_TYPES.NOTE;
    this.note.reminder = null;

    this.notesService.updateNote(this.note, this.note.id);
  }

  isTagSelected(tag) {
    return !!this.note.tags.find(entry => entry.id === tag.id);
  }

  handleTagSelection(tag) {
    if (this.isTagSelected(tag)) {
      this.note.tags = this.note.tags.filter(entry => entry.id !== tag.id);
    } else {
      this.note.tags.push(tag);
    }

    this.notesService.updateNote(this.note, this.note.id);
  }


}
