import { Component, Input } from '@angular/core';

import { SelectionService } from '../services/selection.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'note',
  templateUrl: 'note.html',
  styleUrls: ['note.scss']
})
export class NoteComponent {

  @Input() note: any;

  constructor(private selectionService: SelectionService, private notesService: NotesService) {}

  getClassFromColor(color) {
    return `color--${color}`;
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

}
