import { Component, Input } from '@angular/core';

@Component({
  selector: 'note',
  templateUrl: 'note.html',
  styleUrls: ['note.scss']
})
export class NoteComponent {

  @Input() note: any;

  constructor() {}

  ngOnInit() {
    console.log('NoteComponent', this.note);
  }

  getClassFromColor(color) {
    return `color--${color}`;
  }

}
