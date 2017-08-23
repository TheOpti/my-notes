import { Component, Input } from '@angular/core';

@Component({
  selector: 'note-canvas',
  templateUrl: 'note-canvas.html',
  styleUrls: ['note-canvas.scss']
})
export class NoteCanvasComponent {

  @Input() notes;

}
