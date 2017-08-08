import {
  Component,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';

@Component({
  selector: 'add-note',
  templateUrl: 'add-note.html',
  styleUrls: ['add-note.scss']
})
export class AddNoteComponent {

  constructor(private eRef: ElementRef) { }

  @ViewChild('textbox') textbox: any;
  @ViewChild('add-note-component') component: any;

  private isAddingNewNote = false;
  post = '';
  title = '';

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.enableEditing();
    } else {
      this.clearInputs();
      this.disableEditing();
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
    this.clearInputs();
    this.disableEditing();
  }
}
