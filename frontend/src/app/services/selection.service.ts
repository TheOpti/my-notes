import { Injectable } from '@angular/core';

@Injectable()
export class SelectionService {

  private selectedNotes: any;

  constructor() {
    this.selectedNotes = [];
  }

  addToSelection(noteId) {
    this.selectedNotes.push(noteId);
  }

  removeFromSelection(noteId) {
    this.selectedNotes = this.selectedNotes.filter(elem => elem !== noteId);
  }

  isSelected(noteId) {
    return this.selectedNotes.some(elem => elem === noteId);
  }
}
